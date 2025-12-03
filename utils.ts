import { Antibiotic, Suggestion } from './types';

export function formatInteger(num: number): string {
    return Math.round(num).toString();
}

export function formatDecimal(num: number): string {
    return (Math.round(num * 10) / 10).toLocaleString('es-ES');
}

export function roundIVDose(num: number): number {
    if (num < 100) return Math.round(num);
    return Math.round(num / 10) * 10;
}

export function getDosesPerDay(frequency: string): number[] {
    const freq = frequency.toLowerCase();
    const hours = freq.match(/\d+/g) || [];
    if (hours.length > 0) {
        return hours.map(h => 24 / parseInt(h));
    }
    return [1];
}

export function getFrequencies(frequency: string): string[] {
    const freq = frequency.toLowerCase();
    const hours = freq.match(/\d+/g) || [];
    if (hours.length > 1) {
        return hours.map(h => `cada ${h} horas`);
    }
    return [frequency];
}

export function calculateSuggestions(antibiotic: Antibiotic, dailyDose: number, pathology: string, weight: number): Suggestion[] {
    const dosesPerDayOptions = getDosesPerDay(antibiotic.frequency || 'cada 24 h');
    const freqTextOptions = getFrequencies(antibiotic.frequency || 'cada 24 h');
    let liquidSuggestions: Suggestion[] = [];
    let solidSuggestions: Suggestion[] = [];
    let otherSuggestions: Suggestion[] = [];

    let route = 'vía oral';
    const isIV = antibiotic.name.includes('IV');
    const isIM = antibiotic.name.includes('IM');
    const isVO = antibiotic.name.includes('VO');

    if ((isIV && isVO) || antibiotic.name.includes('IV/VO')) {
        route = 'vía intravenosa u oral';
    } else if (isIV && isIM) {
        route = 'vía intravenosa o intramuscular';
    } else if (isIV) {
        route = 'vía intravenosa';
    } else if (isIM) {
        route = 'vía intramuscular';
    }

    let durationText = '';
    if (antibiotic.duration && antibiotic.duration !== 'Según evolución') {
        if (antibiotic.duration.toLowerCase().startsWith('hasta')) {
            durationText = ` ${antibiotic.duration.toLowerCase()}`;
        } else {
            durationText = ` durante ${antibiotic.duration}`;
        }
    }

    freqTextOptions.forEach((freqText, index) => {
        const dosesPerDay = dosesPerDayOptions[index];
        let dosePerAdmin = dailyDose / dosesPerDay;
        let doseComponentForDisplay = antibiotic.name
            .replace(/\s*\(dosis altas\)/i, '')
            .replace(/\s*(8:1|4:1)/i, '')
            .replace(' IV', '')
            .replace(/\s*\(.*\)/, '');

        if (antibiotic.name === 'Ceftriaxona IM/IV') {
            doseComponentForDisplay = 'CEFTRIAXONA';
            route = 'vía intramuscular o intravenosa';
        }

        if (antibiotic.max_dose_per_instance) {
            const maxKey = freqText.includes('12') ? '12h' : '24h';
            if (antibiotic.max_dose_per_instance[maxKey]) {
                dosePerAdmin = Math.min(dosePerAdmin, antibiotic.max_dose_per_instance[maxKey]);
                // If capped per instance, the daily dose effectively changes for this calculation context,
                // but usually max_dose_per_instance implies a max daily dose too. 
            }
        }

        if (antibiotic.presentations) {
            if (antibiotic.presentations.jarabe) {
                const getConcentration = (syrupString: string) => {
                    const match = syrupString.match(/^(\d+(\.\d+)?)/);
                    return match ? parseFloat(match[1]) : 0;
                };
                // Sort high concentration first to reduce volume
                const sortedJarabe = [...antibiotic.presentations.jarabe].sort((a, b) => getConcentration(b) - getConcentration(a));
                
                sortedJarabe.forEach(syrup => {
                    const cleanSyrupString = syrup.replace(/\s/g, '');
                    // Parsing "125/31.25mg/5ml" or "100mg/ml"
                    const parts = cleanSyrupString.match(/^(\d+(?:\.\d+)?)(?:\/(\d+(?:\.\d+)?)?)?mg\/(\d+(?:\.\d+)?)?ml$/i);
                    if (parts && parts[1]) {
                        let concentrationMg = parseFloat(parts[1]);
                        const concentrationMl = (parts[3]) ? parseFloat(parts[3]) : 1;
                        if (concentrationMg > 0) {
                            const mlPerAdmin = (dosePerAdmin / concentrationMg) * concentrationMl;
                            liquidSuggestions.push({
                                text: `${doseComponentForDisplay.toUpperCase()} jarabe ${cleanSyrupString}: ${formatDecimal(mlPerAdmin)} mililitros ${freqText}${durationText} ${route}.`,
                                type: 'jarabe'
                            });
                        }
                    }
                });
            }

            const checkSolidDose = (presentationArray: string[] | undefined, type: 'cápsula' | 'sobre' | 'comprimido') => {
                if (presentationArray) {
                    presentationArray.forEach(solidDose => {
                        let doseValueMg = 0;
                        let doseMatch = solidDose.match(/^(\d+(?:\.\d+)?)/);
                        if (doseMatch) {
                            doseValueMg = parseFloat(doseMatch[1]);
                            if (solidDose.toLowerCase().includes('g') && !solidDose.toLowerCase().includes('mg')) {
                                doseValueMg *= 1000;
                            }
                        }
                        // Allow 5% margin for solid forms
                        if (doseValueMg > 0 && Math.abs(dosePerAdmin - doseValueMg) < (doseValueMg * 0.05)) {
                            solidSuggestions.push({
                                text: `${doseComponentForDisplay.toUpperCase()} ${type}s ${solidDose}: 1 ${type} ${freqText}${durationText} ${route}.`,
                                type: type
                            });
                        }
                    });
                }
            };
            checkSolidDose(antibiotic.presentations.comprimidos, 'cápsula'); // Using capsule/comprimido loosely here as per original
            checkSolidDose(antibiotic.presentations.sobres, 'sobre');

        } else {
            otherSuggestions.push({
                text: `${doseComponentForDisplay.toUpperCase()} ${roundIVDose(dosePerAdmin)} mg ${freqText}${durationText} ${route}.`,
                type: 'iv'
            });
        }
    });

    // Remove duplicates based on text
    const unique = (arr: Suggestion[]) => {
        const seen = new Set();
        return arr.filter(item => {
            const duplicate = seen.has(item.text);
            seen.add(item.text);
            return !duplicate;
        });
    };

    // Prioritize solids for older kids (weight > 30 approx), liquids for younger
    return weight >= 30
        ? [...unique(solidSuggestions), ...unique(liquidSuggestions), ...unique(otherSuggestions)]
        : [...unique(liquidSuggestions), ...unique(solidSuggestions), ...unique(otherSuggestions)];
}
