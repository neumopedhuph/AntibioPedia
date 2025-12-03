
import React, { useState, useEffect } from 'react';
import { Antibiotic, Suggestion } from '../types';
import { calculateSuggestions, formatDecimal, formatInteger, getDosesPerDay, getFrequencies, roundIVDose } from '../utils';

interface Props {
    antibiotic: Antibiotic;
    weight: number;
    pathology: string;
}

const SuggestionBox: React.FC<{ suggestion: Suggestion }> = ({ suggestion }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(suggestion.text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'jarabe': return '💧';
            case 'comprimido':
            case 'cápsula': return '💊';
            case 'sobre': return '📄';
            case 'iv': return '💉';
            default: return '💊';
        }
    };

    return (
        <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start gap-2">
                <span className="text-xl">{getIcon(suggestion.type)}</span>
                <span className="text-sm font-medium text-gray-800">{suggestion.text}</span>
            </div>
            <button
                onClick={handleCopy}
                disabled={copied}
                className={`ml-2 px-2 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${copied ? 'bg-green-200 text-green-800' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
            >
                {copied ? '¡Copiado!' : 'Copiar'}
            </button>
        </div>
    );
};

const AntibioticCard: React.FC<Props> = ({ antibiotic, weight, pathology }) => {
    const [age, setAge] = useState<string>('');
    const [range, setRange] = useState<'intermediate' | 'high'>('intermediate');
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

    const needsAge = antibiotic.dose_type?.includes('age_dependent') || antibiotic.options?.some(o => o.age_options);
    const hasRange = antibiotic.dose_per_kg && antibiotic.dose_per_kg.length === 2 && antibiotic.dose_per_kg[0] !== antibiotic.dose_per_kg[1];

    useEffect(() => {
        // Reset local state when props change
        setAge('');
        setRange('intermediate');
    }, [antibiotic.name, pathology]);

    // Recalculate logic
    let content: React.ReactNode = null;

    // --- LOGIC BLOCKS ---
    
    // 1. Combo Age Dependent (e.g., Cefotaxima + Linezolid)
    if (antibiotic.dose_type === 'combo_age_dependent') {
        const ageVal = parseFloat(age);
        const validAge = !isNaN(ageVal) && ageVal >= 0;

        let comboSummary = '';
        let mgCalcNode = null;

        if (validAge) {
             const parts: string[] = [];
             const mgDetails: string[] = [];
             
             antibiotic.options?.forEach(drug => {
                 let targetDailyDose = 0;
                 let freqText = drug.frequency || '';
                 const unit_day = drug.is_UI ? 'U/día' : 'mg/día';
                 let dosePerAdmin = 0;

                 if (drug.age_options) {
                     // Safety check for age_options index. Logic assumes <12 is index 0, >=12 is index 1 or if only 1 option available use that?
                     // Adapting to be more robust: use index 0 if only 1 exists, otherwise toggle.
                     // Original logic: const ageOption = ageVal < 12 ? drug.age_options[0] : drug.age_options[1];
                     // If drug.age_options has length 1 (e.g. Brucelosis Doxy), accessing [1] crashes.
                     
                     let ageOption = drug.age_options[0];
                     if (drug.age_options.length > 1) {
                         ageOption = ageVal < 12 ? drug.age_options[0] : drug.age_options[1];
                     }

                     if (ageOption) {
                        freqText = ageOption.frequency || freqText;
                        if (ageOption.dose_per_kg) {
                            targetDailyDose = weight * ageOption.dose_per_kg[0];
                        } else if (ageOption.fixed_dose) {
                             targetDailyDose = ageOption.fixed_dose * getDosesPerDay(freqText || '24h')[0];
                        }
                        mgDetails.push(`${drug.name?.replace(' IV', '')}: ${formatInteger(targetDailyDose)} ${unit_day}`);
                     }
                 } else {
                     // Standard drug in combo
                      if(drug.dose_per_kg) {
                        const min = weight * drug.dose_per_kg[0];
                        const max = weight * drug.dose_per_kg[1];
                        targetDailyDose = (min + max) / 2;
                        if (drug.max_dose_per_day && targetDailyDose > drug.max_dose_per_day) targetDailyDose = drug.max_dose_per_day;
                        mgDetails.push(`${drug.name?.replace(' IV', '')}: ${formatInteger(targetDailyDose)} ${unit_day}`);
                      }
                 }
                 
                 dosePerAdmin = targetDailyDose / getDosesPerDay(freqText || '24h')[0];
                 parts.push(`${drug.name?.toUpperCase().replace(' IV', '')} ${roundIVDose(dosePerAdmin)} mg ${freqText}`);
             });

             const durationText = antibiotic.duration ? ` durante ${antibiotic.duration}` : '';
             comboSummary = `${parts.join(' + ')}${durationText} vía intravenosa.`;
             mgCalcNode = (
                 <div className="mt-3 bg-gray-50 p-2 rounded">
                     <p className="text-xs font-semibold text-gray-500 uppercase">Cálculo:</p>
                     <ul className="list-disc list-inside text-xs text-gray-600">
                         {mgDetails.map((d, i) => <li key={i}>{d}</li>)}
                     </ul>
                 </div>
             );
        }

        content = (
            <>
                <div className="mt-3">
                     <label className="block text-sm font-semibold text-gray-700">¿Edad (años)?</label>
                     <input 
                        type="number" 
                        value={age} 
                        onChange={e => setAge(e.target.value)} 
                        className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 sm:text-sm outline-none" 
                        placeholder="Ej: 4" 
                    />
                </div>
                {validAge && mgCalcNode}
                {validAge && (
                    <div className="mt-4">
                        <p className="font-semibold text-gray-900 uppercase text-xs mb-2">Pauta Sugerida:</p>
                        <SuggestionBox suggestion={{ text: comboSummary, type: 'iv' }} />
                    </div>
                )}
            </>
        );

    } 
    // 2. Simple Age Dependent (e.g. Levofloxacino, Azitromicina Pertussis)
    else if (antibiotic.dose_type?.includes('age_dependent')) {
        const ageVal = parseFloat(age);
        const validAge = !isNaN(ageVal) && ageVal >= 0;
        let suggestion: Suggestion | null = null;
        let mgCalcText = '';

        if (validAge) {
             if (antibiotic.name === 'Levofloxacino' && antibiotic.options) {
                 const option = ageVal < 5 ? antibiotic.options[0] : antibiotic.options[1];
                 const freq = option.frequency || '24h';
                 const dosesPerDay = getDosesPerDay(freq)[0];
                 let dailyDose = weight * (option.dose_per_kg?.[0] || 0);
                 if (antibiotic.max_dose_per_day && dailyDose > antibiotic.max_dose_per_day) dailyDose = antibiotic.max_dose_per_day;
                 
                 // Levo is usually same dose per admin if once daily
                 const dosePerAdmin = dailyDose / (freq.includes('12') ? 2 : 1); 
                 
                 mgCalcText = `${formatInteger(dailyDose)} mg/día`;
                 
                 // Check syrup
                 if (antibiotic.presentations?.jarabe) {
                     const ml = dosePerAdmin / 50; // 50mg/ml
                     const dur = antibiotic.duration ? ` durante ${antibiotic.duration}` : '';
                     suggestion = { text: `LEVOFLOXACINO jarabe 50mg/ml: ${formatDecimal(ml)} ml ${freq}${dur} vía oral.`, type: 'jarabe' };
                 }
             } else if (antibiotic.name === 'Azitromicina' && antibiotic.notes?.includes('Bordetella')) {
                 // Pertussis logic
                 const dose = Math.min(10 * weight, 500);
                 const dose2 = Math.min(5 * weight, 250);
                 
                 if (ageVal < 0.5) { // < 6 months
                     mgCalcText = `${formatInteger(dose)} mg/día`;
                     const ml = dose / 40; // 200mg/5ml
                     suggestion = { text: `AZITROMICINA jarabe 200mg/5ml: ${formatDecimal(ml)} ml cada 24h durante 5 días.`, type: 'jarabe' };
                 } else {
                     mgCalcText = `Día 1: ${formatInteger(dose)} mg; Días 2-5: ${formatInteger(dose2)} mg`;
                     const ml1 = dose / 40;
                     const ml2 = dose2 / 40;
                     suggestion = { text: `AZITROMICINA jarabe 200mg/5ml: ${formatDecimal(ml1)} ml (día 1) y ${formatDecimal(ml2)} ml (días 2-5).`, type: 'jarabe' };
                 }
             } else if (antibiotic.name.includes('Aciclovir') && antibiotic.options) {
                 const option = ageVal < 12 ? antibiotic.options[0] : antibiotic.options[1];
                 const dose = weight * (option.dose_per_kg?.[0] || 0);
                 mgCalcText = `${formatInteger(dose * 3)} mg/día`;
                 suggestion = { text: `ACICLOVIR ${roundIVDose(dose)} mg ${option.frequency || 'cada 8 h'} durante ${antibiotic.duration} vía IV.`, type: 'iv' };
             } else if (antibiotic.name.includes('Linezolid') && antibiotic.options) {
                 const option = ageVal < 12 ? antibiotic.options[0] : antibiotic.options[1];
                 let dose = 0;
                 if(option.dose_per_kg) dose = weight * option.dose_per_kg[0];
                 else if (option.fixed_dose) dose = option.fixed_dose;
                 
                 const freq = option.frequency || 'cada 8 h';
                 const dosesPerDay = getDosesPerDay(freq)[0];
                 mgCalcText = `${formatInteger(dose * dosesPerDay)} mg/día`;
                 suggestion = { text: `LINEZOLID ${roundIVDose(dose)} mg ${freq} durante ${antibiotic.duration}.`, type: 'iv' };
             }
        }

        content = (
            <>
                 <div className="mt-3">
                     <label className="block text-sm font-semibold text-gray-700">¿Edad (años)?</label>
                     <input 
                        type="number" 
                        value={age} 
                        onChange={e => setAge(e.target.value)} 
                        className="mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-green-500 focus:ring-1 focus:ring-green-500 sm:text-sm outline-none" 
                        placeholder="Ej: 4" 
                    />
                </div>
                {validAge && <div className="mt-2 text-xs text-gray-500">Cálculo: {mgCalcText}</div>}
                {validAge && suggestion && (
                    <div className="mt-4 space-y-2">
                        <p className="font-semibold text-gray-900 uppercase text-xs">Pauta Sugerida:</p>
                        <SuggestionBox suggestion={suggestion} />
                    </div>
                )}
            </>
        );
    }
    // 3. Fixed Dose (e.g. Penicillin G Benz)
    else if (antibiotic.dose_type === 'fixed' && antibiotic.options) {
        const option = antibiotic.options.length > 1 
            ? (weight < 27 ? antibiotic.options[0] : antibiotic.options[1])
            : antibiotic.options[0];
        
        let text = `${antibiotic.name.toUpperCase()} ${option.dose} ${option.frequency}`;
        let type: Suggestion['type'] = 'comprimido';
        
        if (antibiotic.name.includes('Fenoximetilpenicilina')) {
             type = option.dose?.includes('250') ? 'sobre' : 'comprimido';
             text = `FENOXIMETILPENICILINA POTÁSICA 1 ${type} de ${option.dose} ${option.frequency}`;
        } else if (antibiotic.name.includes('Benzatina')) {
            type = 'iv';
            text = `PENICILINA G BENZATINA ${option.dose} ${option.frequency} vía IM`;
        }

        if (antibiotic.duration) text += ` durante ${antibiotic.duration}.`;

        content = (
            <div className="mt-4">
                <p className="font-semibold text-gray-900 uppercase text-xs mb-2">Pauta Sugerida:</p>
                <SuggestionBox suggestion={{ text, type }} />
            </div>
        );
    }
    // 4. Custom / Topical
    else if (antibiotic.dose_type === 'custom') {
         if (antibiotic.name === 'Azitromicina' && antibiotic.pauta?.includes('10 mg/kg')) {
             // OMA Azitro
             const d1 = Math.min(10 * weight, 500);
             const d2 = Math.min(5 * weight, 250);
             const ml1 = formatDecimal(d1 / 40);
             const ml2 = formatDecimal(d2 / 40);
             const text = `AZITROMICINA jarabe 200mg/5ml: ${ml1} ml (día 1) y ${ml2} ml (días 2-5).`;
             content = (
                <div className="mt-4">
                    <p className="font-semibold text-gray-900 uppercase text-xs mb-2">Pauta Sugerida:</p>
                    <SuggestionBox suggestion={{ text, type: 'jarabe' }} />
                </div>
            );
         } else {
            content = (
                <div className="mt-4">
                    <p className="font-semibold text-gray-900 uppercase text-xs mb-2">Pauta Sugerida:</p>
                    <SuggestionBox suggestion={{ text: `${antibiotic.name.toUpperCase()}: ${antibiotic.pauta} ${antibiotic.duration || ''}`, type: 'topical' }} />
                </div>
            );
         }
    }
    // 5. Standard Calculation (Includes Range and Combo standard)
    else {
        let dailyDose = 0;
        let displaySuggestions: Suggestion[] = [];
        let mgCalcText = '';

        if (antibiotic.dose_type === 'combo' && antibiotic.options) {
             // Combo logic
             let parts: string[] = [];
             let mgDetails: string[] = [];
             antibiotic.options.forEach(drug => {
                 const min = weight * (drug.dose_per_kg?.[0] || 0);
                 const max = weight * (drug.dose_per_kg?.[1] || 0);
                 let target = (min + max) / 2;
                 if (drug.max_dose_per_day && target > drug.max_dose_per_day) target = drug.max_dose_per_day;
                 
                 const freq = drug.frequency || 'cada 24 h';
                 const dosePerAdmin = target / getDosesPerDay(freq)[0];
                 const unit = drug.is_UI ? 'U' : 'mg';
                 parts.push(`${drug.name?.toUpperCase().replace(' IV', '')} ${roundIVDose(dosePerAdmin)} ${unit} ${freq}`);
                 mgDetails.push(`${drug.name?.replace(' IV', '')}: ${formatInteger(target)} ${unit}/día`);
             });
             
             const dur = antibiotic.duration ? ` durante ${antibiotic.duration}` : '';
             displaySuggestions = [{ text: `${parts.join(' + ')}${dur} vía IV.`, type: 'iv' }];
             
             content = (
                 <>
                    <div className="mt-2 bg-gray-50 p-2 rounded">
                         <p className="text-xs font-semibold text-gray-500 uppercase">Cálculo:</p>
                         <ul className="list-disc list-inside text-xs text-gray-600">
                             {mgDetails.map((d, i) => <li key={i}>{d}</li>)}
                         </ul>
                     </div>
                     <div className="mt-4 space-y-2">
                        <p className="font-semibold text-gray-900 uppercase text-xs">Pauta Sugerida:</p>
                        {displaySuggestions.map((s, i) => <SuggestionBox key={i} suggestion={s} />)}
                     </div>
                 </>
             )

        } else if (antibiotic.dose_per_kg) {
            // Standard Single Drug
            const minDaily = weight * antibiotic.dose_per_kg[0];
            const maxDaily = weight * antibiotic.dose_per_kg[1];
            
            // Logic for range button
            dailyDose = range === 'intermediate' ? (minDaily + maxDaily) / 2 : maxDaily;
            
            // Max dose cap
            if (antibiotic.max_dose_per_day) {
                if (dailyDose > antibiotic.max_dose_per_day) dailyDose = antibiotic.max_dose_per_day;
            }

            const unit = antibiotic.name.includes('Penicilina G') && antibiotic.name.includes('IV') ? 'U/día' : 'mg/día';
            mgCalcText = `${formatInteger(dailyDose)} ${unit}`;
            if (minDaily !== maxDaily) {
                mgCalcText += ` (Rango: ${formatInteger(minDaily)}-${formatInteger(maxDaily)})`;
            }

            displaySuggestions = calculateSuggestions(antibiotic, dailyDose, pathology, weight);

            content = (
                <>
                    <div className="mt-3 flex items-start justify-between bg-gray-50 p-2 rounded">
                        <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase">Cálculo:</p>
                            <p className="text-xs text-gray-600">{mgCalcText}</p>
                        </div>
                        {hasRange && (
                            <button 
                                onClick={() => setRange(range === 'intermediate' ? 'high' : 'intermediate')}
                                className={`text-xs px-2 py-1 rounded border font-medium transition-colors ${range === 'intermediate' ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100' : 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100'}`}
                            >
                                {range === 'intermediate' ? 'Pautar Rango Superior' : 'Pautar Rango Intermedio'}
                            </button>
                        )}
                    </div>
                    {displaySuggestions.length > 0 && (
                        <div className="mt-4 space-y-2">
                            <p className="font-semibold text-gray-900 uppercase text-xs">Pauta Sugerida:</p>
                            {displaySuggestions.map((s, i) => <SuggestionBox key={i} suggestion={s} />)}
                        </div>
                    )}
                </>
            );
        }
    }

    // --- RENDER ---
    
    // Helper for dose info display
    const renderDoseInfo = () => {
         if (antibiotic.dose_type?.includes('combo')) {
             return (
                 <ul className="list-disc list-inside text-xs text-gray-600 mt-1">
                     {antibiotic.options?.map((o, i) => (
                         <li key={i}>{o.name?.replace(' IV', '')}: {o.dose_per_kg ? `${o.dose_per_kg.join('-')} ${o.is_UI ? 'U' : 'mg'}/kg` : 'Ver pauta'} {o.frequency}</li>
                     ))}
                 </ul>
             )
         }
         if (antibiotic.dose_per_kg) {
             return <p className="text-sm text-gray-600"><strong>Pauta:</strong> {antibiotic.dose_per_kg.join('-')} mg/kg/día {antibiotic.frequency}</p>
         }
         if (antibiotic.dose_type === 'fixed' && antibiotic.options) {
             return (
                 <div className="text-sm text-gray-600 mt-1">
                    {antibiotic.options.map((o, i) => <div key={i}>{o.condition}: {o.dose} {o.frequency}</div>)}
                 </div>
             )
         }
         return null;
    };

    return (
        <div className="bg-green-50/50 border border-green-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-green-900 tracking-tight leading-snug">
                {antibiotic.name.replace(/\s*\(dosis altas\)/i, '').replace(/\s*(8:1|4:1)/i, '').replace(/\s*VO/g, '').toUpperCase()}
            </h3>
            
            {renderDoseInfo()}
            
            <p className="text-sm text-gray-600 mt-1">
                <strong>Duración:</strong> {antibiotic.duration || 'Variable'}
            </p>

            {content}

            {antibiotic.presentations && (
                <div className="mt-3 text-xs text-gray-500">
                    <p className="font-semibold mb-1">Presentaciones:</p>
                    <ul className="list-disc list-inside pl-1">
                        {antibiotic.presentations.jarabe && <li>Jarabe: {antibiotic.presentations.jarabe.join(', ')}</li>}
                        {antibiotic.presentations.comprimidos && <li>Cápsulas/Comp: {antibiotic.presentations.comprimidos.join(', ')}</li>}
                        {antibiotic.presentations.sobres && <li>Sobres: {antibiotic.presentations.sobres.join(', ')}</li>}
                    </ul>
                </div>
            )}
            
            {antibiotic.notes && (
                <div className="mt-3 bg-green-100/80 p-2 rounded text-xs text-green-800 italic border border-green-200">
                    Nota: {antibiotic.notes}
                </div>
            )}
        </div>
    );
};

export default AntibioticCard;
