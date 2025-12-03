
import { PathologyData } from './types';

export const ANTIBIOTIC_DATA: Record<string, PathologyData> = {
    "Absceso Cerebral": {
        "sourcePage": 319,
        "antibiotics": [
            { "name": "Cefotaxima IV + Metronidazol IV + Vancomicina IV", "dose_type": "combo", "options": [{"name": "Cefotaxima IV", "dose_per_kg": [200, 300], "frequency": "cada 4-6 h", "max_dose_per_day": 12000}, {"name": "Metronidazol IV", "dose_per_kg": [30, 40], "frequency": "cada 6-8 h", "max_dose_per_day": 4000}, {"name": "Vancomicina IV", "dose_per_kg": [60, 60], "frequency": "cada 6 h", "max_dose_per_day": 4000}], "duration": "6-8 semanas", "notes": "Tratamiento empírico de elección. Ajustar según foco y cultivo." }
        ]
    },
    "Absceso Periamigdalino": {
        sourcePage: 71,
        antibiotics: [
            {
                name: "Amoxicilina-clavulánico IV",
                dose_per_kg: [100, 100],
                dose_of: "Amoxicilina",
                frequency: "cada 6 horas",
                duration: "Hasta mejoría clínica y afebril",
                notes: "Drenaje quirúrgico si compromiso de vía aérea o ausencia de mejoría a las 48-72 horas de antibioterapia. Se puede continuar tratamiento vía oral hasta completar 14 días.",
                max_dose_per_day: 8000
            },
            {
                name: "Clindamicina IV",
                dose_per_kg: [40, 40],
                frequency: "cada 8 horas",
                duration: "Hasta mejoría clínica y afebril",
                notes: "Drenaje quirúrgico si compromiso de vía aérea o ausencia de mejoría a las 48-72 horas de antibioterapia. Se puede continuar tratamiento vía oral hasta completar 14 días.",
                max_dose_per_day: 2700
            }
        ]
    },
    "Absceso Retroamigdalino": {
        sourcePage: 71,
        antibiotics: [
            { name: "Ceftriaxona IV + Clindamicina IV", dose_type: 'combo', options: [{name: 'Ceftriaxona IV', dose_per_kg: [50, 100], frequency: 'cada 12-24 horas', max_dose_per_day: 4000}, {name: 'Clindamicina IV', dose_per_kg: [30, 40], frequency: 'cada 6-8 horas', max_dose_per_day: 2700}], duration: "10-14 días", notes: "Tratamiento de elección." },
            { name: "Ampicilina-Sulbactam IV", dose_per_kg: [150, 200], dose_of: "Ampicilina", frequency: "cada 6 horas", duration: "10-14 días", notes: "Alternativa.", max_dose_per_day: 8000 }
        ]
    },
    "Adenitis Cervical Bacteriana": {
         sourcePage: 71,
        antibiotics: [
            { 
                name: "Amoxicilina-Clavulánico 4:1", 
                dose_per_kg: [40, 80], 
                dose_of: "Amoxicilina", 
                frequency: "cada 8 horas", 
                duration: "7-10 días", 
                notes: "Tratamiento de elección.",
                max_dose_per_day: 1500,
                presentations: {
                    jarabe: ['125/31.25 mg/5ml', '250/62.5 mg/5ml'],
                    sobres: ['250/62.5 mg', '500/125 mg'],
                    comprimidos: ['500/125 mg']
                }
            },
            { 
                name: "Clindamicina", 
                dose_per_kg: [30, 40], 
                frequency: "cada 6-8 horas", 
                duration: "7-10 días", 
                notes: "Alternativa.", 
                max_dose_per_day: 1200,
                presentations: {
                    jarabe: ["15 mg/ml"],
                    comprimidos: ['150 mg', '300 mg']
                }
            }
        ]
    },
    "Amebiasis (Entamoeba histolytica)": {
        sourcePage: 215,
        antibiotics: [
            { 
                name: "Metronidazol", 
                dose_per_kg: [35, 50], 
                frequency: "cada 8 horas", 
                duration: "10 días", 
                max_dose_per_day: 2250, 
                notes: "Seguir con un amebicida intraluminal (ej. Paromomicina)."
            }
        ]
    },
    "Anaplasmosis Humana": {
        sourcePage: 432,
        antibiotics: [
            { "name": "Doxiciclina", "dose_per_kg": [4.4, 4.4], "frequency": "cada 12 horas", "duration": "7-10 días", "max_dose_per_day": 200, "notes": "Tratamiento de elección." }
        ]
    },
    "Artritis Séptica (< 3 meses)": {
        sourcePage: 294,
        antibiotics: [
            { name: "Cefotaxima IV + Cloxacilina IV", dose_type: 'combo', options: [{name: 'Cefotaxima IV', dose_per_kg: [100, 200], frequency: 'cada 6-8 horas', max_dose_per_day: 12000}, {name: 'Cloxacilina IV', dose_per_kg: [100, 200], frequency: 'cada 6 horas', max_dose_per_day: 12000}], duration: "2-3 semanas", notes: "Tratamiento IV inicial. Pasar a VO según evolución clínica." }
        ]
    },
    "Artritis Séptica (3 meses - 5 años)": {
        sourcePage: 294,
        antibiotics: [
            { name: "Cefotaxima IV", dose_per_kg: [100, 200], frequency: "cada 6-8 horas", duration: "2-3 semanas", notes: "Tratamiento IV inicial. Pasar a VO según evolución clínica.", max_dose_per_day: 12000 },
            { name: "Cefuroxima IV", dose_per_kg: [100, 150], frequency: "cada 8 horas", duration: "2-3 semanas", notes: "Alternativa. Tratamiento IV inicial.", max_dose_per_day: 4500 },
            { name: "Vancomicina IV o Clindamicina IV", dose_type: 'custom', pauta: "Añadir a cefalosporina si alta prevalencia de S. aureus MRSA", duration: "2-3 semanas", notes: "Considerar en contextos de alta resistencia." }
        ]
    },
    "Artritis Séptica (> 5 años)": {
        sourcePage: 294,
        antibiotics: [
            { name: "Cefazolina IV", dose_per_kg: [100, 150], frequency: "cada 8 horas", duration: "2-3 semanas", notes: "Tratamiento IV inicial. Pasar a VO según evolución clínica.", max_dose_per_day: 6000 }
        ]
    },
    "Brucelosis": {
        sourcePage: 446,
        antibiotics: [
            {
                name: "Doxiciclina + Rifampicina",
                dose_type: "combo_age_dependent",
                options: [
                    {
                        name: "Doxiciclina",
                        age_options: [
                            { "condition": "≥ 8 años", "dose_per_kg": [4.4, 4.4], "frequency": "cada 12 horas", "max_dose_per_day": 200 }
                        ]
                    },
                    {
                        name: "Rifampicina",
                        "dose_per_kg": [15, 20],
                        "frequency": "cada 24 horas", 
                        "max_dose_per_day": 900
                    }
                ],
                duration: "6 semanas",
                notes: "Tratamiento de elección en mayores de 8 años."
            },
            {
                name: "Cotrimoxazol + Rifampicina",
                dose_type: "combo",
                options: [
                    { "name": "Cotrimoxazol", "dose_per_kg": [10, 10], "dose_of": "Trimetoprim", "frequency": "cada 12 horas", "max_dose_per_day": 320 },
                    { "name": "Rifampicina", "dose_per_kg": [15, 20], "frequency": "cada 24 horas", "max_dose_per_day": 900 }
                ],
                duration: "6 semanas",
                notes: "Tratamiento de elección en menores de 8 años."
            }
        ]
    },
    "Celulitis Orbitaria": {
        "sourcePage": 91,
        "antibiotics": [
            { "name": "Cefotaxima IV + Clindamicina IV", "dose_type": "combo", "options": [{"name": "Cefotaxima IV", "dose_per_kg": [150, 200], "frequency": "cada 6-8 h", "max_dose_per_day": 12000}, {"name": "Clindamicina IV", "dose_per_kg": [40, 40], "frequency": "cada 6-8 h", "max_dose_per_day": 2700}], "duration": "Al menos 21 días", "notes": "Tratamiento de elección."}
        ]
    },
    "Celulitis Periorbitaria (Preseptal)": {
        sourcePage: 90,
        antibiotics: [
            { 
                name: "Amoxicilina-Clavulánico 8:1", 
                dose_per_kg: [80, 90], 
                dose_of: "Amoxicilina", 
                frequency: "cada 8 horas", 
                duration: "7-10 días", 
                notes: "Tratamiento de elección.",
                max_dose_per_day: 2625,
                presentations: {
                    jarabe: ['100/12.5 mg/ml'],
                    sobres: ['875/125 mg'],
                    comprimidos: ['875/125 mg']
                }
            }
        ]
    },
    "Cólera (Vibrio Cholerae)": {
        "sourcePage": 189,
        "antibiotics": [
            { "name": "Azitromicina", "dose_per_kg": [20, 20], "frequency": "dosis única", "duration": "Dosis única", "notes": "Tratamiento de elección.", "max_dose_per_day": 1000 }
        ]
    },
    "Encefalitis Herpética": {
        "sourcePage": 326,
        "antibiotics": [
            { "name": "Aciclovir IV", "dose_type": "age_dependent", "options": [{"condition": "< 12 años", "dose_per_kg": [20, 20], "frequency": "cada 8 h"}, {"condition": "≥ 12 años", "dose_per_kg": [10, 10], "frequency": "cada 8 h"}], "duration": "14-21 días", "notes": "Tratamiento de elección para encefalitis por VHS."}
        ]
    },
    "Enfermedad invasiva por Streptococcus pyogenes": {
         "antibiotics": [
            { 
                "name": "Penicilina G Sódica IV + Clindamicina IV", 
                "dose_type": "combo", 
                "options": [
                    {"name": "Penicilina G Sódica IV", "dose_per_kg": [200000, 400000], "is_UI": true, "frequency": "cada 6 horas", "max_dose_per_day": 24000000}, 
                    {"name": "Clindamicina IV", "dose_per_kg": [40, 40], "frequency": "cada 8 horas", "max_dose_per_day": 2700}
                ], 
                "notes": "Exploración quirúrgica si sospecha de fascitis necrosante." 
            }
        ]
    },
    "Enfermedad por arañazo de gato (Bartonella henselae)": {
        "sourcePage": 134, 
        "antibiotics": [
            {
                "name": "Azitromicina",
                "dose_per_kg": [10, 10],
                "frequency": "cada 24 horas",
                "duration": "5 días",
                "max_dose_per_day": 500,
                "notes": "Indicado en pacientes con clínica sistémica o inmunodeprimidos. Suele curar espontáneamente en 1-3 meses.",
                "presentations": {
                    jarabe: ['200 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            }
        ]
    },
    "Endocarditis Infecciosa (Nativa, Comunitaria)": {
        sourcePage: 139,
        antibiotics: [
            { name: "Ampicilina IV + Cloxacilina IV + Gentamicina IV", dose_type: 'combo', options: [{name: 'Ampicilina IV', dose_per_kg: [200, 300], frequency: 'cada 4-6 horas', max_dose_per_day: 12000}, {name: 'Cloxacilina IV', dose_per_kg: [100, 200], frequency: 'cada 4-6 horas', max_dose_per_day: 12000}, {name: 'Gentamicina IV', dose_per_kg: [3, 5], frequency: 'cada 8-24 horas', max_dose_per_day: 500}], duration: "4-6 semanas", notes: "Tratamiento empírico de elección." }
        ]
    },
    "Endocarditis Infecciosa (Nativa, Nosocomial)": {
        sourcePage: 139,
        antibiotics: [
            { name: "Vancomicina IV + Gentamicina IV", dose_type: 'combo', options: [{name: 'Vancomicina IV', dose_per_kg: [40, 60], frequency: 'cada 6-8 horas', max_dose_per_day: 4000}, {name: 'Gentamicina IV', dose_per_kg: [3, 5], frequency: 'cada 8-24 horas', max_dose_per_day: 500}], duration: "4-6 semanas", notes: "Tratamiento empírico de elección." }
        ]
    },
    "Endocarditis Infecciosa (Protésica)": {
        sourcePage: 139,
        antibiotics: [
             { name: "Vancomicina IV + Gentamicina IV + Rifampicina", dose_type: 'combo', options: [{name: 'Vancomicina IV', dose_per_kg: [40, 60], frequency: 'cada 6-8 horas', max_dose_per_day: 4000}, {name: 'Gentamicina IV', dose_per_kg: [3, 5], frequency: 'cada 8-24 horas', max_dose_per_day: 500}, {name: 'Rifampicina', dose_per_kg: [20,20], frequency: 'cada 12 horas', max_dose_per_day: 600}], duration: ">6 semanas", notes: "Tratamiento empírico de elección." }
        ]
    },
    "Enfermedad de Lyme (Localizada)": {
        sourcePage: 304,
        antibiotics: [
            { 
                name: "Amoxicilina", 
                dose_per_kg: [50, 50], 
                frequency: "cada 8 horas", 
                duration: "14 días", 
                notes: "Elección en < 8 años.",
                max_dose_per_day: 3000,
                presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['500 mg', '750 mg', '1 g'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            { name: "Doxiciclina", dose_per_kg: [4, 4], frequency: "cada 12 horas", duration: "14 días", notes: "Elección en ≥ 8 años.", max_dose_per_day: 200 }
        ]
    },
    "Enfermedad de Lyme (Diseminada, Artritis)": {
        sourcePage: 304,
        antibiotics: [
            { 
                name: "Amoxicilina", 
                dose_per_kg: [50, 50], 
                frequency: "cada 8 horas", 
                duration: "28 días", 
                notes: "Elección en < 8 años.",
                max_dose_per_day: 3000,
                presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['500 mg', '750 mg', '1 g'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            { name: "Doxiciclina", dose_per_kg: [4, 4], frequency: "cada 12 horas", duration: "28 días", notes: "Elección en ≥ 8 años.", max_dose_per_day: 200 }
        ]
    },
    "Enfermedades por Garrapatas (Fiebre Botonosa)": {
        sourcePage: 304,
        antibiotics: [
            { name: "Doxiciclina", dose_type: 'weight_dependent', options: [{ condition: '< 45 kg', dose_per_kg: [2.2, 2.2], frequency: 'cada 12 horas' }, { condition: '≥ 45 kg', dose_per_kg: null, fixed_dose: 100, frequency: 'cada 12 horas' }], duration: "7-10 días", notes: "Tratamiento de elección en todas las edades.", max_dose_per_day: 200 }
        ]
    },
    "Espondilitis": {
        sourcePage: 294,
        antibiotics: [
            { name: "Cloxacilina IV + Cefotaxima IV", dose_type: 'combo', options: [{name: 'Cloxacilina IV', dose_per_kg: [100, 200], frequency: 'cada 6 horas', max_dose_per_day: 12000}, {name: 'Cefotaxima IV', dose_per_kg: [100, 200], frequency: 'cada 6-8 horas', max_dose_per_day: 12000}], duration: "4-6 semanas", notes: "Tratamiento IV inicial. Pasar a VO según evolución clínica." }
        ]
    },
    "Faringoamigdalitis Aguda": {
        sourcePage: 70,
        antibiotics: [
            { 
                name: "Fenoximetilpenicilina potásica", 
                dose_type: 'fixed', 
                options: [
                    { condition: 'Peso < 27 kg', dose: '250 mg', frequency: 'cada 12 horas', type: 'sobre' }, 
                    { condition: 'Peso ≥ 27 kg', dose: '500 mg', frequency: 'cada 12 horas', type: 'comprimido' }
                ], 
                duration: "7-10 días", 
                notes: "Primera elección.",
                presentations: {
                    sobres: ['250 mg'],
                    comprimidos: ['500 mg']
                }
            },
            { 
                name: "Amoxicilina", 
                dose_per_kg: [40, 50], 
                frequency: "cada 12 o 24 horas", 
                max_dose_per_instance: { '12h': 500, '24h': 1000 }, 
                duration: "7-10 días", 
                notes: "Primera alternativa.",
                max_dose_per_day: 2000,
                presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['500 mg', '750 mg', '1 g'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            {
                "name": "Penicilina G Benzatina IM",
                "dose_type": "fixed",
                "options": [
                    { "condition": "Peso < 27 kg", "dose": "600 000 U", "frequency": "dosis única" },
                    { "condition": "Peso ≥ 27 kg", "dose": "1 200 000 U", "frequency": "dosis única" }
                ],
                "duration": "Dosis única",
                "notes": "En caso de no cumplimiento de la vía oral."
            },
            { 
                name: "Cefadroxilo", 
                dose_per_kg: [30, 30], 
                frequency: "cada 12 horas", 
                max_dose_per_day: 1000, 
                duration: "5-10 días", 
                notes: "Alternativa en alergia a betalactámicos (reacción retardada, no anafiláctica).",
                presentations: {
                    jarabe: ['250 mg / 5 ml'],
                    comprimidos: ['500 mg'] //capsulas
                }
            },
            { 
                name: "Azitromicina", 
                dose_per_kg: [20, 20], 
                frequency: "cada 24 horas", 
                max_dose_per_day: 500, 
                duration: "3 días", 
                notes: "Alternativa en alergia a betalactámicos (reacción inmediata).",
                presentations: {
                    jarabe: ['200 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            { 
                name: "Clindamicina", 
                dose_per_kg: [8, 30], 
                frequency: "cada 6-8 horas", 
                max_dose_per_day: 1200, 
                duration: "7-10 días", 
                notes: "Alternativa en alergia a betalactámicos (reacción inmediata).",
                presentations: {
                    jarabe: ["15 mg/ml"],
                    comprimidos: ['150 mg', '300 mg']
                }
            }
        ]
    },
    "Fascitis Necrotizante": {
        "sourcePage": 277,
        "antibiotics": [
            { "name": "Penicilina G IV + Clindamicina IV", "dose_type": "combo", "options": [{"name": "Penicilina G IV", "dose_per_kg": [200000, 400000], "is_UI": true, "frequency": "cada 4-6 h", "max_dose_per_day": 24000000}, {"name": "Clindamicina IV", "dose_per_kg": [40, 40], "frequency": "cada 6-8 h", "max_dose_per_day": 2700}], "duration": "Según evolución", "notes": "Tratamiento para S. pyogenes (Tipo II). Requiere desbridamiento quirúrgico urgente." }
        ]
    },
    "Fiebre Q": {
        "sourcePage": 446,
         "antibiotics": [
            { "name": "Doxiciclina", "dose_type": "age_dependent", "options": [{ "condition": "≥ 8 años", "dose_per_kg": [4.4, 4.4], "frequency": "cada 12 horas", "max_dose_per_day": 200 }], "duration": "2 semanas" },
            { "name": "Cotrimoxazol", "dose_type": "age_dependent", "options": [{ "condition": "< 8 años", "dose_per_kg": [8, 12], "dose_of": "Trimetoprim", "frequency": "cada 12 horas", "max_dose_per_day": 320 }], "duration": "2 semanas" }
        ]
    },
    "Fiebre Tifoidea (Salmonella Typhi)": {
        "sourcePage": 189,
         "antibiotics": [
            { "name": "Ceftriaxona IV", "dose_per_kg": [75, 100], "frequency": "cada 12-24 h", "duration": "10-14 días", "notes": "Tratamiento de elección.", "max_dose_per_day": 4000 },
            { "name": "Ciprofloxacino", "dose_per_kg": [20, 30], "frequency": "cada 12 h", "duration": "7-10 días", "notes": "Alternativa, si sensible.", "max_dose_per_day": 1500, "presentations": { "jarabe": ["100 mg/ml"], "comprimidos": ["250 mg", "500 mg", "750 mg"] }}
        ]
    },
    "Gastroenteritis Aguda Bacteriana (casos seleccionados)": {
        sourcePage: 213,
        antibiotics: [
            { name: "Ceftriaxona IV", dose_per_kg: [50, 100], frequency: "cada 12-24 horas", duration: "7-10 días", notes: "Indicado en formas invasivas por Salmonella.", max_dose_per_day: 4000 },
            { 
                name: "Azitromicina (Campylobacter, Shigella, ETEC/EIEC)", 
                dose_per_kg: [10, 10], 
                frequency: "cada 24 horas", 
                duration: "3 días", 
                notes: "Elección para Campylobacter. Alternativa en Shigella y E.coli.",
                 max_dose_per_day: 500,
                 presentations: {
                    jarabe: ['200 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            { 
                name: "Ciprofloxacino", 
                dose_per_kg: [20, 30], 
                frequency: "cada 12 horas", 
                duration: "3 días", 
                notes: "Alternativa en Shigella y Salmonella.",
                max_dose_per_day: 1500,
                presentations: {
                    jarabe: ['100 mg/ml'],
                    comprimidos: ['250 mg', '500 mg', '750 mg']
                }
            },
            { name: "Cotrimoxazol (Yersinia)", dose_per_kg: [8, 12], dose_of: "Trimetoprim", frequency: "cada 12 horas", duration: "5 días", notes: "Elección para Yersinia.", max_dose_per_day: 320 }
        ]
    },
    "Impétigo / Celulitis / Erisipela": {
        sourcePage: 274,
        antibiotics: [
            { name: "Mupirocina Tópica", dose_type: 'custom', pauta: '1 aplicación cada 8h', duration: "5-7 días", notes: "Tratamiento de elección en impétigo localizado." },
            { name: "Ácido Fusídico Tópico", dose_type: 'custom', pauta: '1 aplicación cada 8h', duration: "5-7 días", notes: "Alternativa en impétigo localizado." },
            { 
                name: "Cefadroxilo VO", 
                dose_per_kg: [30, 30], 
                frequency: "cada 12 horas", 
                duration: "5-10 días", 
                notes: "Tratamiento ambulatorio.",
                max_dose_per_day: 1000,
                presentations: {
                    jarabe: ['250 mg / 5 ml'],
                    comprimidos: ['500 mg'] //capsulas
                }
            },
            { name: "Amoxicilina VO", dose_per_kg: [50, 50], frequency: "cada 8 horas", duration: "7-10 días", notes: "Alternativa ambulatoria para erisipela.", max_dose_per_day: 3000},
            { name: "Ampicilina IV", dose_per_kg: [100, 200], frequency: "cada 6 horas", duration: "7-10 días", notes: "Alternativa hospitalaria para erisipela.", max_dose_per_day: 12000 },
            { name: "Cefazolina IV", dose_per_kg: [50, 100], frequency: "cada 8 horas", duration: "7-10 días", notes: "Tratamiento hospitalario de elección.", max_dose_per_day: 6000 },
            { 
                name: "Clindamicina VO", 
                dose_per_kg: [10, 30], 
                frequency: "cada 6-8 horas", 
                duration: "7-10 días", 
                notes: "Alternativa en alergia a betalactámicos (ambulatorio).", 
                max_dose_per_day: 1200,
                presentations: {
                    jarabe: ["15 mg/ml"],
                    comprimidos: ['150 mg', '300 mg']
                }
            },
            { name: "Clindamicina IV", dose_per_kg: [20, 40], frequency: "cada 6-8 horas", duration: "7-10 días", notes: "Alternativa en alergia a betalactámicos (hospitalario).", max_dose_per_day: 2700 }
        ]
    },
    "Infección por Clostridioides difficile": {
        sourcePage: 192,
        antibiotics: [
            { 
                "name": "Metronidazol VO", 
                "dose_per_kg": [30, 30], 
                "frequency": "cada 6 horas", 
                "duration": "10 días", 
                "max_dose_per_day": 500, 
                "notes": "Primer episodio, infección leve/moderada." 
            },
            { 
                "name": "Vancomicina VO", 
                "dose_per_kg": [40, 40], 
                "frequency": "cada 6 horas", 
                "duration": "10 días", 
                "max_dose_per_day": 500, 
                "notes": "Primer episodio, infección grave." 
            }
        ]
    },
    "Infecciones Foliculares (Foliculitis, Forúnculo, Ántrax)": {
        "sourcePage": 279,
        "antibiotics": [
            { "name": "Mupirocina Tópica", "dose_type": "custom", "pauta": "1 aplicación cada 8 horas", "duration": "5-7 días", "notes": "Para casos leves y localizados." },
            { 
                "name": "Cefadroxilo VO", 
                "dose_per_kg": [30, 30], 
                "frequency": "cada 12 h", 
                "duration": "7-10 días", 
                "notes": "Para casos más extensos (ántrax).", 
                "max_dose_per_day": 1000,
                "presentations": {
                    "jarabe": ["250 mg / 5 ml"],
                    "comprimidos": ["500 mg"]
                }
            }
        ]
    },
    "Infección por Mordedura (Animal/Humana)": {
        sourcePage: 282,
        antibiotics: [
            { 
                name: "Amoxicilina-Clavulánico 4:1", 
                dose_per_kg: [40, 40],
                dose_of: "Amoxicilina", 
                frequency: "cada 8 horas", 
                duration: "7-14 días", 
                notes: "Elección para tratamiento.",
                max_dose_per_day: 1500,
                presentations: {
                    jarabe: ['125/31.25 mg/5ml', '250/62.5 mg/5ml'],
                    sobres: ['250/62.5 mg', '500/125 mg'],
                    comprimidos: ['500/125 mg']
                }
            },
            { name: "Clindamicina + Cotrimoxazol VO", dose_type: 'combo', options: [{name: 'Clindamicina', dose_per_kg: [10, 30], frequency: 'cada 6-8 horas', max_dose_per_day: 1200}, {name: 'Cotrimoxazol', dose_per_kg: [8, 12], frequency: 'cada 12 horas', dose_of: "Trimetoprim", max_dose_per_day: 320}], duration: "7-14 días", notes: "Alternativa en alergia a betalactámicos." }
        ]
    },
    "Infección Urinaria - Cistitis": {
        sourcePage: 265,
        antibiotics: [
            { 
                name: "Cefuroxima axetilo", 
                dose_per_kg: [20, 30], 
                frequency: "cada 12 horas", 
                duration: "3-5 días",
                max_dose_per_day: 1000,
                presentations: {
                    jarabe: ['125 mg / 5 ml','250 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg'],
                    sobres: ['125 mg', '250 mg', '500 mg']
                }
            },
            { 
                name: "Amoxicilina-Clavulánico 4:1", 
                dose_per_kg: [35, 40], 
                dose_of: "Amoxicilina",
                frequency: "cada 8 horas", 
                duration: "3-5 días",
                max_dose_per_day: 1500,
                presentations: {
                    jarabe: ['125/31.25 mg/5ml', '250/62.5 mg/5ml'],
                    sobres: ['250/62.5 mg', '500/125 mg'],
                    comprimidos: ['500/125 mg']
                }
            },
            { 
                name: "Cefixima", 
                dose_per_kg: [8, 8], 
                frequency: "cada 12-24 horas", 
                duration: "3-5 días",
                max_dose_per_day: 400,
                presentations: {
                    jarabe: ['100 mg / 5 ml'],
                    comprimidos: ['200 mg', '400 mg']
                }
            },
            { name: "Fosfomicina trometamol", dose_type: 'fixed', options: [{condition: '> 6 años', dose: '2 g', frequency: 'dosis única'}, {condition: '> 12 años', dose: '3 g', frequency: 'dosis única'}], duration: 'Dosis única', notes: 'Alternativa.'},
            { 
                name: "Cotrimoxazol", 
                dose_per_kg: [8, 12], 
                dose_of: "Trimetoprim", 
                frequency: "cada 12 horas", 
                duration: "3 días", 
                notes: "Alternativa en alergia a betalactámicos.", 
                max_dose_per_day: 320,
                presentations: {
                    jarabe: ['40/200 mg / 5 ml'],
                    comprimidos: ['80/400 mg', '160/800 mg']
                }
            },
        ]
    },
    "Infección Urinaria - Pielonefritis (Ambulatorio)": {
        sourcePage: 265,
        antibiotics: [
            { 
                name: "Cefixima", 
                dose_per_kg: [8, 8], 
                frequency: "cada 12-24 horas", 
                duration: "7-10 días",
                max_dose_per_day: 400,
                presentations: {
                    jarabe: ['100 mg / 5 ml'],
                    comprimidos: ['200 mg', '400 mg']
                }
            },
            { 
                name: "Cefuroxima axetilo", 
                dose_per_kg: [30, 40], 
                frequency: "cada 12 horas", 
                duration: "7-10 días",
                max_dose_per_day: 1000,
                presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg'],
                    sobres: ['125 mg', '250 mg', '500 mg']
                }
            },
            { 
                name: "Amoxicilina-Clavulánico", 
                dose_per_kg: [40, 50], 
                dose_of: "Amoxicilina",
                frequency: "cada 8 horas", 
                duration: "7-14 días",
                notes: "Considerar si uropatía.",
                max_dose_per_day: 1500,
                presentations: {
                    jarabe: ['125/31.25 mg/5ml', '250/62.5 mg/5ml'],
                    sobres: ['250/62.5 mg', '500/125 mg'],
                    comprimidos: ['500/125 mg']
                }
            }
        ]
    },
    "Infección Urinaria - Pielonefritis (Ingreso Hospitalario)": {
        sourcePage: 265,
        antibiotics: [
            { name: "Cefotaxima IV", dose_per_kg: [100, 200], frequency: "cada 6-8 horas", duration: "7-10 días", max_dose_per_day: 12000 },
            { name: "Ceftriaxona IV", dose_per_kg: [50, 80], frequency: "cada 12-24 horas", duration: "7-10 días", max_dose_per_day: 4000 },
            { name: "Gentamicina IV", dose_per_kg: [5, 7.5], frequency: "cada 24 horas", duration: "7-10 días", notes: "Puede usarse en monoterapia o asociado. Alternativa en alergia a betalactámicos.", max_dose_per_day: 500 },
            { name: "Amikacina IV", dose_per_kg: [15, 20], frequency: "cada 24 horas", duration: "7-10 días", notes: "Alternativa si resistencias a Gentamicina > 10%.", max_dose_per_day: 1500 }
        ]
    },
    "Leishmaniasis Visceral": {
        sourcePage: 215,
        antibiotics: [
            { "name": "Anfotericina B liposomal IV", "dose_per_kg": [3, 3], "frequency": "cada 24 horas", "duration": "días 1-5, 14 y 21", "notes": "Tratamiento de elección." }
        ]
    },
    "Mastoiditis Aguda": {
        sourcePage: 104,
        antibiotics: [
            { name: "Ceftriaxona IV", dose_per_kg: [50, 100], frequency: "cada 12-24 horas", duration: "Según evolución", notes: "Tratamiento de elección. Considerar añadir Vancomicina si hay riesgo de S. aureus MRSA.", max_dose_per_day: 4000 }
        ]
    },
    "Meningitis Aguda Bacteriana (< 3 meses)": {
        sourcePage: 125,
        antibiotics: [
            { name: "Ampicilina IV + Cefotaxima IV", dose_type: 'combo', options: [{name: 'Ampicilina IV', dose_per_kg: [200, 300], frequency: 'cada 6 horas', max_dose_per_day: 12000}, {name: 'Cefotaxima IV', dose_per_kg: [200, 300], frequency: 'cada 6-8 horas', max_dose_per_day: 12000}], duration: "Según evolución", notes: "Tratamiento empírico de elección." },
            { name: "Ampicilina IV + Gentamicina IV", dose_type: 'combo', options: [{name: 'Ampicilina IV', dose_per_kg: [200, 300], frequency: 'cada 6 horas', max_dose_per_day: 12000}, {name: 'Gentamicina IV', dose_per_kg: [5, 7.5], frequency: 'cada 24 horas', max_dose_per_day: 500}], duration: "Según evolución", notes: "Alternativa." }
        ]
    },
    "Meningitis Aguda Bacteriana (≥ 3 meses)": {
        sourcePage: 125,
        antibiotics: [
            { name: "Cefotaxima IV", dose_per_kg: [200, 300], frequency: "cada 6 horas", duration: "Según evolución", notes: "Tratamiento empírico de elección.", max_dose_per_day: 12000 },
            { name: "Ceftriaxona IV", dose_per_kg: [100, 100], frequency: "cada 12-24 horas", duration: "Según evolución", notes: "Alternativa.", max_dose_per_day: 4000 },
            { name: "Vancomicina IV + Meropenem IV", dose_type: 'combo', options: [{name: 'Vancomicina IV', dose_per_kg: [60, 60], frequency: 'cada 6 horas', max_dose_per_day: 4000}, {name: 'Meropenem IV', dose_per_kg: [120, 120], frequency: 'cada 8 horas', max_dose_per_day: 6000}], duration: "Según evolución", notes: "Alternativa en alergia a betalactámicos." }
        ]
    },
    "Miocarditis / Pericarditis Purulenta": {
        sourcePage: 137,
        antibiotics: [
            { name: "Cefotaxima IV + Vancomicina IV", dose_type: 'combo', options: [{name: 'Cefotaxima IV', dose_per_kg: [150, 200], frequency: 'cada 6-8 horas', max_dose_per_day: 12000}, {name: 'Vancomicina IV', dose_per_kg: [40, 60], frequency: 'cada 6 horas', max_dose_per_day: 4000}], duration: "3-4 semanas", notes: "Tratamiento empírico de elección." }
        ]
    },
    "Neumonía Adquirida en la Comunidad (NAC) - Ambulatorio": {
         sourcePage: 161,
         antibiotics: [
            { 
                name: "Amoxicilina", 
                dose_per_kg: [80, 80], 
                frequency: "cada 8 horas", 
                duration: "5 días", 
                notes: "Elección para sospecha bacteriana típica.",
                max_dose_per_day: 3000,
                presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['500 mg', '750 mg', '1 g'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            { 
                name: "Amoxicilina-Clavulánico", 
                dose_per_kg: [80, 90], 
                dose_of: "Amoxicilina", 
                frequency: "cada 8 horas", 
                duration: "7-10 días", 
                notes: "Elección si factores de riesgo de resistencia.",
                max_dose_per_day: 2625,
                presentations: {
                    jarabe: ['100/12.5 mg/ml'],
                    sobres: ['875/125 mg'],
                    comprimidos: ['875/125 mg']
                }
            },
            { 
                name: "Azitromicina", 
                dose_per_kg: [10, 10], 
                frequency: "cada 24 horas", 
                duration: "3 días", 
                notes: "Elección para sospecha bacteriana atípica. Pauta de 5 días (10mg/kg día 1, luego 5mg/kg/día) también es válida.",
                max_dose_per_day: 500,
                presentations: {
                    jarabe: ['200 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            { 
                name: "Claritromicina", 
                dose_per_kg: [15, 15], 
                frequency: "cada 12 horas", 
                max_dose_per_day: 1000, 
                duration: "7-10 días", 
                notes: "Alternativa para sospecha de atípica.",
                presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg']
                }
            },
            { 
                name: "Levofloxacino", 
                dose_type: 'age_dependent', 
                options: [{ condition: '< 5 años', dose_per_kg: [10,10], frequency: 'cada 12 horas' }, { condition: '≥ 5 años', dose_per_kg: [10,10], frequency: 'cada 24 horas' }], 
                duration: "7-10 días", 
                notes: "Alternativa en alergia a betalactámicos.", 
                max_dose_per_day: 750,
                presentations: {
                    jarabe: ['50 mg/ml']
                }
            }
         ]
    },
    "Neumonía Adquirida en la Comunidad (NAC) - Ingreso Hospitalario": {
         sourcePage: 161,
         antibiotics: [
            { name: "Ampicilina IV", dose_per_kg: [100, 200], frequency: "cada 6-8 horas", duration: "7-10 días", notes: "Para NAC no complicada.", max_dose_per_day: 12000 },
            { name: "Penicilina G IV", "dose_per_kg": [200000, 300000], "is_UI": true, "frequency": "cada 4-6 h", duration: "7-10 días", "notes": "Alternativa para NAC no complicada.", "max_dose_per_day": 24000000 }
         ]
    },
    "Neumonía complicada (Derrame pleural complicado, absceso pulmonar, neumonía necrotizante)": {
        sourcePage: 161,
        antibiotics: [
            { 
                name: "Cefotaxima IV + Vancomicina IV", 
                dose_type: 'combo', 
                options: [
                    {name: 'Cefotaxima IV', dose_per_kg: [100, 200], frequency: 'cada 6 horas', max_dose_per_day: 12000}, 
                    {name: 'Vancomicina IV', dose_per_kg: [60, 60], frequency: 'cada 6 horas', max_dose_per_day: 4000}
                ], 
                duration: "7-14 días", 
                notes: "Tratamiento de elección."
            },
            {
                name: "Cefotaxima IV + Linezolid IV",
                dose_type: "combo_age_dependent",
                options: [
                     {name: 'Cefotaxima IV', dose_per_kg: [100, 200], frequency: 'cada 6 horas', max_dose_per_day: 12000},
                     {
                        name: "Linezolid IV",
                        age_options: [
                            { condition: "< 12 años", dose_per_kg: [30, 30], frequency: "cada 8 horas" },
                            { condition: "≥ 12 años", fixed_dose: 600, frequency: "cada 12 horas" }
                        ]
                     }
                ],
                duration: "7-14 días",
                notes: "Alternativa."
            }
        ]
    },
     "Neumonía con etiología bacteriana conocida": {
        sourcePage: 161,
        antibiotics: [
            { name: "Ampicilina IV (Streptococcus pneumoniae/pyogenes)", dose_per_kg: [100, 200], frequency: "cada 6-8 horas", max_dose_per_day: 12000 },
            { 
                name: "Amoxicilina VO (Streptococcus pneumoniae)", 
                dose_per_kg: [40, 80], 
                frequency: "cada 8 horas", 
                max_dose_per_day: 3000,
                presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['500 mg', '750 mg', '1 g'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            { 
                name: "Amoxicilina VO (Streptococcus pyogenes)", 
                dose_per_kg: [40, 50], 
                frequency: "cada 8 horas", 
                max_dose_per_day: 3000,
                 presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['500 mg', '750 mg', '1 g'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            { name: "Cefazolina IV (Staphylococcus aureus sensible)", dose_per_kg: [100, 100], frequency: "cada 8 horas", max_dose_per_day: 6000 },
            { name: "Cloxacilina IV (Staphylococcus aureus sensible)", dose_per_kg: [50, 100], frequency: "cada 6 horas", max_dose_per_day: 12000 },
            { 
                name: "Cefadroxilo VO (Staphylococcus aureus sensible)", 
                dose_per_kg: [30, 60], 
                frequency: "cada 8 horas", 
                max_dose_per_day: 1000,
                presentations: {
                    jarabe: ['250 mg / 5 ml'],
                    comprimidos: ['500 mg']
                }
            },
            { name: "Vancomicina IV (Staphylococcus aureus resistente)", dose_per_kg: [60, 60], frequency: "cada 6-8 horas", max_dose_per_day: 4000 },
            { name: "Clindamicina IV/VO (Staphylococcus aureus resistente - Alt.)", dose_per_kg: [40, 40], frequency: "cada 6-8 horas", max_dose_per_day: 2700 },
            {
                name: "Linezolid IV/VO (Staphylococcus aureus resistente - Alt.)",
                dose_type: 'age_dependent',
                options: [
                    { condition: "< 12 años", dose_per_kg: [30, 30], frequency: "cada 8 horas" },
                    { condition: "≥ 12 años", fixed_dose: 600, frequency: "cada 12 horas" }
                ],
                notes: "Alternativa para S. aureus resistente."
            },
            { 
                name: "Cotrimoxazol IV/VO (Staphylococcus aureus resistente - Alt.)", 
                dose_per_kg: [8,10], 
                dose_of: "Trimetoprim", 
                frequency: "cada 8-12 horas", 
                max_dose_per_day: 320,
                presentations: {
                    jarabe: ['40/200 mg / 5 ml'],
                    comprimidos: ['80/400 mg', '160/800 mg']
                }
            },
            { name: "Cefuroxima IV (Haemophilus influenzae)", dose_per_kg: [100, 100], frequency: "cada 8 horas", max_dose_per_day: 4500 },
            { 
                name: "Cefuroxima VO (Haemophilus influenzae)", 
                dose_per_kg: [20, 30], 
                frequency: "cada 12 horas", 
                max_dose_per_day: 1000, 
                max_dose_per_instance: {'12h': 500},
                presentations: {
                    jarabe: ['125 mg / 5 ml','250 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg'],
                    sobres: ['125 mg', '250 mg', '500 mg']
                }
            },
            { 
                name: "Azitromicina IV/VO (Mycoplasma/Chlamydia)", 
                dose_per_kg: [10, 10], 
                frequency: "cada 24 horas", 
                duration: "3 días", 
                max_dose_per_day: 500,
                presentations: {
                    jarabe: ['200 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            }
        ]
    },
    "Osteomielitis Aguda (< 3 meses)": {
        sourcePage: 294,
        antibiotics: [
            { name: "Cefotaxima IV + Cloxacilina IV", dose_type: 'combo', options: [{name: 'Cefotaxima IV', dose_per_kg: [100, 200], frequency: 'cada 6-8 horas', max_dose_per_day: 12000}, {name: 'Cloxacilina IV', dose_per_kg: [100, 200], frequency: 'cada 6 horas', max_dose_per_day: 12000}], duration: "4-6 semanas", notes: "Tratamiento IV inicial. Pasar a VO según evolución clínica." }
        ]
    },
    "Osteomielitis Aguda (≥ 3 meses)": {
        sourcePage: 294,
        antibiotics: [
            { name: "Cloxacilina IV", dose_per_kg: [100, 200], frequency: "cada 6 horas", duration: "4-6 semanas", notes: "Tratamiento de elección. IV inicial.", max_dose_per_day: 12000 },
            { name: "Cefazolina IV", dose_per_kg: [100, 150], frequency: "cada 8 horas", duration: "4-6 semanas", notes: "Alternativa. IV inicial.", max_dose_per_day: 6000 },
            { name: "Clindamicina IV", dose_per_kg: [20, 40], frequency: "cada 6-8 horas", duration: "4-6 semanas", notes: "Alternativa. IV inicial.", max_dose_per_day: 2700 }
        ]
    },
     "Otitis Externa (con indicación sistémica)": {
        sourcePage: 107,
        antibiotics: [
            { 
                name: "Ciprofloxacino", 
                dose_per_kg: [20, 30], 
                frequency: "cada 12 horas", 
                duration: "7-10 días", 
                notes: "Elección si se requiere tratamiento sistémico.",
                max_dose_per_day: 1500,
                presentations: {
                    jarabe: ['100 mg/ml'],
                    comprimidos: ['250 mg', '500 mg', '750 mg']
                }
            },
            { name: "Cefalexina", dose_per_kg: [25, 50], frequency: "cada 6 horas", duration: "7-10 días", notes: "Alternativa sistémica.", max_dose_per_day: 4000 }
        ]
    },
    "Otitis Media Aguda": {
        sourcePage: 104,
        antibiotics: [
            { 
                name: "Amoxicilina (dosis altas)", 
                dose_per_kg: [80, 90], 
                frequency: "cada 8-12 horas", 
                max_dose_per_day: 3000, 
                duration: "5-10 días", 
                notes: "Tratamiento de elección.",
                presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['500 mg', '750 mg', '1 g'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            { 
                name: "Amoxicilina-Clavulánico 8:1", 
                dose_per_kg: [80, 90], 
                dose_of: "Amoxicilina", 
                frequency: "cada 8-12 horas", 
                max_dose_per_day: 2625, 
                duration: "10 días", 
                notes: "Si no hay mejoría en 48-72h con Amoxicilina.",
                presentations: {
                    jarabe: ['100/12.5 mg/ml'],
                    sobres: ['875/125 mg'],
                    comprimidos: ['875/125 mg']
                }
            },
            { name: "Cefuroxima", dose_per_kg: [30, 30], frequency: "cada 12 horas", max_dose_per_day: 1000, duration: "10 días", notes: "Alternativa en alergia no anafiláctica."},
            { name: "Ceftriaxona IM/IV", dose_per_kg: [50, 50], frequency: "cada 24 horas", duration: "1-3 días", notes: "Alternativa en alergia no anafiláctica o vómitos.", max_dose_per_day: 2000 },
            { 
                name: "Azitromicina", 
                dose_type: 'custom', 
                pauta: "10 mg/kg el día 1, seguido de 5 mg/kg/día los días 2-5", 
                frequency: "cada 24 horas", 
                duration: "5 días", 
                notes: "Alternativa en alergia anafiláctica.",
                presentations: {
                    jarabe: ['200 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            { 
                name: "Claritromicina", 
                dose_per_kg: [15, 15], 
                frequency: "cada 12 horas", 
                duration: "10 días", 
                notes: "Alternativa en alergia anafiláctica.",
                max_dose_per_day: 1000,
                presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg']
                }
            },
            { name: "Cotrimoxazol", dose_per_kg: [8, 8], dose_of: "Trimetoprim", frequency: "cada 12 horas", max_dose_per_day: 320, duration: "10 días", notes: "Alternativa en alergia anafiláctica."}
        ]
    },
    "Parasitosis Extraintestinal - Toxocariasis": {
        sourcePage: 240,
        antibiotics: [
            { name: "Albendazol", dose_per_kg: [15, 15], frequency: "cada 12 horas", duration: "5 días", notes: "Tratamiento de elección.", max_dose_per_day: 800 }
        ]
    },
     "Parasitosis Intestinal - Ascaridiasis": {
        sourcePage: 238,
        antibiotics: [
            { name: "Mebendazol", dose_type: 'fixed', options: [{ condition: 'Todos', dose: '100 mg cada 12h', frequency: 'durante 3 días'}], duration: "3 días" },
            { name: "Albendazol", dose_type: 'fixed', options: [{ condition: 'Todos', dose: '400 mg', frequency: 'dosis única'}], duration: "Dosis única" },
        ]
    },
    "Parasitosis Intestinal - Giardiasis": {
        sourcePage: 237,
        antibiotics: [
            { name: "Metronidazol", dose_per_kg: [15, 15], frequency: "cada 8 horas", duration: "5-7 días", notes: "Tratamiento de elección.", max_dose_per_day: 750 }
        ]
    },
     "Parasitosis Intestinal - Oxiuriasis": {
        sourcePage: 238,
        antibiotics: [
            { name: "Mebendazol", dose_type: 'fixed', options: [{ condition: 'Todos', dose: '100 mg', frequency: 'dosis única'}], duration: "Dosis única", notes: "Repetir dosis a las 2 semanas." },
            { name: "Albendazol", dose_type: 'fixed', options: [{ condition: 'Todos', dose: '400 mg', frequency: 'dosis única'}], duration: "Dosis única", notes: "Repetir dosis a las 2 semanas." },
        ]
    },
    "Paroniquia / Hidrosadenitis Supurativa": {
        "sourcePage": 279,
        "antibiotics": [
             { "name": "Amoxicilina-Clavulánico 4:1", "dose_per_kg": [40, 40], "dose_of": "Amoxicilina", "frequency": "cada 8 h", "duration": "7-10 días", "notes": "Cubre S. aureus y anaerobios.", "max_dose_per_day": 1500, "presentations": { "jarabe": ["125/31.25 mg/5ml", "250/62.5 mg/5ml"], "sobres": ["250/62.5 mg", "500/125 mg"], "comprimidos": ["500/125 mg"] }}
        ]
    },
    "Parotiditis Bacteriana": {
        sourcePage: 80,
        antibiotics: [
            { 
                name: "Amoxicilina-Clavulánico 4:1", 
                dose_per_kg: [40, 80], 
                dose_of: "Amoxicilina", 
                frequency: "cada 8 horas", 
                duration: "7-10 días", 
                notes: "Tratamiento de elección para parotiditis bacteriana.",
                max_dose_per_day: 1500,
                 presentations: {
                    jarabe: ['125/31.25 mg/5ml', '250/62.5 mg/5ml'],
                    sobres: ['250/62.5 mg', '500/125 mg'],
                    comprimidos: ['500/125 mg']
                }
            }
        ]
    },
    "Peritonitis Primaria / Espontánea": {
        "sourcePage": 252,
        "antibiotics": [
            { "name": "Cefotaxima IV", "dose_per_kg": [150, 200], "frequency": "cada 6-8 h", "duration": "Al menos 7 días", "notes": "Tratamiento de elección empírico.", "max_dose_per_day": 12000 },
            { "name": "Ampicilina IV + Gentamicina IV", "dose_type": "combo", "options": [{"name": "Ampicilina IV", "dose_per_kg": [200, 300], "frequency": "cada 6 h", "max_dose_per_day": 12000}, {"name": "Gentamicina IV", "dose_per_kg": [5, 7.5], "frequency": "cada 24 h", "max_dose_per_day": 500}], "duration": "Al menos 7 días", "notes": "Alternativa."}
        ]
    },
    "Peritonitis Secundaria / Absceso Intraabdominal": {
        "sourcePage": 253,
        "antibiotics": [
            { "name": "Ceftriaxona IV + Metronidazol IV", "dose_type": "combo", "options": [{"name": "Ceftriaxona IV", "dose_per_kg": [50, 100], "frequency": "cada 24 h", "max_dose_per_day": 4000}, {"name": "Metronidazol IV", "dose_per_kg": [30, 40], "frequency": "cada 8 h", "max_dose_per_day": 4000}], "duration": "4-7 días", "notes": "Pauta de elección." },
            { "name": "Piperacilina-Tazobactam IV", "dose_per_kg": [300, 400], "dose_of": "Piperacilina", "frequency": "cada 6-8 h", "duration": "4-7 días", "notes": "Alternativa en monoterapia.", "max_dose_per_day": 16000 }
        ]
    },
    "Piomiositis": {
        "sourcePage": 278,
        "antibiotics": [
            { "name": "Cloxacilina IV", "dose_per_kg": [100, 200], "frequency": "cada 6 h", "duration": "3-4 semanas", "notes": "Tratamiento de elección para S. aureus.", "max_dose_per_day": 12000 },
            { "name": "Cefazolina IV", "dose_per_kg": [100, 150], "frequency": "cada 8 h", "duration": "3-4 semanas", "notes": "Alternativa.", "max_dose_per_day": 6000 }
        ]
    },
    "Sepsis Comunitaria (< 3 meses)": {
        sourcePage: 318,
        antibiotics: [
            { name: "Ampicilina IV + Cefotaxima IV", "dose_type": "combo", "options": [{"name": "Ampicilina IV", "dose_per_kg": [100, 200], "frequency": "cada 6-8 horas", "max_dose_per_day": 12000}, {"name": "Cefotaxima IV", "dose_per_kg": [100, 200], "frequency": "cada 6-8 horas", "max_dose_per_day": 12000}], "duration": "Según evolución", "notes": "Tratamiento empírico de elección." },
            { name: "Ampicilina IV + Gentamicina IV", "dose_type": "combo", "options": [{"name": "Ampicilina IV", "dose_per_kg": [100, 200], "frequency": "cada 6-8 horas", "max_dose_per_day": 12000}, {"name": "Gentamicina IV", "dose_per_kg": [5, 7.5], "frequency": "cada 24 horas", "max_dose_per_day": 500}], "duration": "Según evolución", "notes": "Alternativa." }
        ]
    },
    "Sepsis Comunitaria (> 3 meses)": {
        sourcePage: 318,
        antibiotics: [
            { name: "Cefotaxima IV", "dose_per_kg": [100, 200], "frequency": "cada 6-8 horas", "duration": "Según evolución", "notes": "Tratamiento de elección.", "max_dose_per_day": 12000 },
            { name: "Ceftriaxona IV", "dose_per_kg": [80, 100], "frequency": "cada 12-24 horas", "duration": "Según evolución", "notes": "Alternativa.", "max_dose_per_day": 4000 }
        ]
    },
    "Shigellosis": {
        "sourcePage": 189,
        "antibiotics": [
            { "name": "Azitromicina", "dose_per_kg": [10, 10], "frequency": "cada 24 h", "duration": "3 días", "notes": "Tratamiento de elección.", "max_dose_per_day": 500, "presentations": { "jarabe": ["200 mg / 5 ml"], "comprimidos": ["250 mg", "500 mg"], "sobres": ["250 mg", "500 mg", "1 g"] }},
            { "name": "Ceftriaxona IV", "dose_per_kg": [50, 80], "frequency": "cada 24 h", "duration": "2-5 días", "notes": "Alternativa.", "max_dose_per_day": 4000 }
        ]
    },
    "Sinusitis Aguda Bacteriana": {
        sourcePage: 89,
        antibiotics: [
            { 
                name: "Amoxicilina (dosis altas)", 
                dose_per_kg: [80, 90], 
                frequency: "cada 8 horas", 
                duration: "10 días", 
                notes: "Primera elección sin factores de riesgo en pacientes con agravamiento de los síntomas a partir del 6º-7º día de evolución o cuando se presenten formas de inicio graves.",
                max_dose_per_day: 3000,
                 presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['500 mg', '750 mg', '1 g'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
            { 
                name: "Amoxicilina-Clavulánico 8:1", 
                dose_per_kg: [80, 90], 
                dose_of: "Amoxicilina", 
                frequency: "cada 8 horas", 
                duration: "10 días", 
                notes: "De elección si existen factores de riesgo (enfermedad crónica, inmunodeficiencia), sospecha de resistencia antibiótica a amoxicilina, fracaso terapéutico o sospecha de sinusitis frontal o etmoidal (con mayor riesgo de complicaciones).",
                max_dose_per_day: 2625,
                presentations: {
                    jarabe: ['100/12.5 mg/ml'],
                    sobres: ['875/125 mg'],
                    comprimidos: ['875/125 mg']
                }
            },
            { name: "Cefpodoxima", "dose_per_kg": [10, 10], "frequency": "cada 12 horas", "duration": "10 días", "notes": "Alternativa en alergia no anafiláctica.", "max_dose_per_day": 400 },
            { name: "Ceftibuteno", "dose_per_kg": [9, 9], "frequency": "cada 24 horas", "duration": "10 días", "notes": "Alternativa en alergia no anafiláctica.", "max_dose_per_day": 400 },
            { 
                name: "Cefuroxima-axetilo", 
                dose_per_kg: [30, 30], 
                frequency: "cada 12 horas", 
                duration: "10 días", 
                notes: "Alternativa en alergia no anafiláctica.", 
                max_dose_per_day: 1000,
                presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg'],
                    sobres: ['125 mg', '250 mg', '500 mg']
                }
            },
            { name: "Ceftriaxona IM", "dose_per_kg": [50, 50], "frequency": "cada 24 horas", "duration": "1-3 días", "notes": "Alternativa si intolerancia oral.", "max_dose_per_day": 2000 },
            { 
                name: "Levofloxacino", 
                dose_type: 'age_dependent', 
                options: [{ condition: '< 5 años', dose_per_kg: [10,10], frequency: 'cada 12 horas' }, { condition: '≥ 5 años', dose_per_kg: [10,10], frequency: 'cada 24 horas' }], 
                duration: "10 días", 
                notes: "Alternativa en alergia anafiláctica.", 
                max_dose_per_day: 750,
                presentations: {
                    jarabe: ['50 mg/ml']
                }
            }
        ]
    },
    "Síndrome de la Piel Escaldada Estafilocócica": {
        "sourcePage": 280,
        "antibiotics": [
            { "name": "Cloxacilina IV + Clindamicina IV", "dose_type": "combo", "options": [{"name": "Cloxacilina IV", "dose_per_kg": [100, 200], "frequency": "cada 6 h", "max_dose_per_day": 12000}, {"name": "Clindamicina IV", "dose_per_kg": [40, 40], "frequency": "cada 6-8 h", "max_dose_per_day": 2700}], "duration": "Según evolución", "notes": "Clindamicina inhibe la producción de toxinas." }
        ]
    },
    "Síndrome del Shock Tóxico (Estafilocócico)": {
        "sourcePage": 280,
        "antibiotics": [
            { "name": "Cloxacilina IV + Clindamicina IV", "dose_type": "combo", "options": [{"name": "Cloxacilina IV", "dose_per_kg": [100, 200], "frequency": "cada 6 h", "max_dose_per_day": 12000}, {"name": "Clindamicina IV", "dose_per_kg": [40, 40], "frequency": "cada 6-8 h", "max_dose_per_day": 2700}], "duration": "Según evolución", "notes": "Clindamicina inhibe la producción de toxinas." }
        ]
    },
    "Síndrome del Shock Tóxico (Estreptocócico)": {
        "sourcePage": 281,
        "antibiotics": [
            { "name": "Penicilina G IV + Clindamicina IV", "dose_type": "combo", "options": [{"name": "Penicilina G IV", "dose_per_kg": [200000, 400000], "is_UI": true, "frequency": "cada 4-6 h", "max_dose_per_day": 24000000}, {"name": "Clindamicina IV", "dose_per_kg": [40, 40], "frequency": "cada 6-8 h", "max_dose_per_day": 2700}], "duration": "Según evolución", "notes": "Clindamicina inhibe la producción de toxinas." }
        ]
    },
    "Tos Ferina": {
        sourcePage: 191,
        pathology_notes: "Causada por la bacteria Bordetella pertussis.",
        antibiotics: [
             { 
                name: "Azitromicina", 
                dose_type: 'age_dependent_custom', 
                options: [{ condition: '< 6 meses', dose_per_kg: [10, 10], frequency: 'cada 24h', duration: '5 días' }, { condition: '≥ 6 meses', custom_pauta: "10 mg/kg día 1, luego 5 mg/kg/día los días 2-5", duration: '5 días' }], 
                notes: 'Dosis máx: 500mg (día 1), 250mg (días 2-5).',
                presentations: {
                    jarabe: ['200 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg'],
                    sobres: ['250 mg', '500 mg', '1 g']
                }
            },
             { 
                name: "Claritromicina", 
                dose_per_kg: [15, 15], 
                frequency: "cada 12 horas", 
                duration: "7 días", 
                notes: "Alternativa.",
                max_dose_per_day: 1000,
                presentations: {
                    jarabe: ['125 mg / 5 ml', '250 mg / 5 ml'],
                    comprimidos: ['250 mg', '500 mg']
                }
            }
        ]
    },
    "Tuberculosis (Fase de Continuación)": {
        sourcePage: 178,
        antibiotics: [
            { name: "Isoniazida + Rifampicina", "dose_type": "combo", "options": [{"name": "Isoniazida", "dose_per_kg": [10, 15], "frequency": "cada 24 horas", "max_dose_per_day": 300}, {"name": "Rifampicina", "dose_per_kg": [15, 20], "frequency": "cada 24 horas", "max_dose_per_day": 600}], "duration": "4 meses", "notes": "Fase de continuación estándar." }
        ]
    },
    "Tuberculosis (Fase Inicial)": {
        sourcePage: 178,
        antibiotics: [
            { name: "Isoniazida + Rifampicina + Pirazinamida + Etambutol", "dose_type": "combo", "options": [{"name": "Isoniazida", "dose_per_kg": [10, 15], "frequency": "cada 24 horas", "max_dose_per_day": 300}, {"name": "Rifampicina", "dose_per_kg": [15, 20], "frequency": "cada 24 horas", "max_dose_per_day": 600}, {"name": "Pirazinamida", "dose_per_kg": [30, 40], "frequency": "cada 24 horas", "max_dose_per_day": 2000}, {"name": "Etambutol", "dose_per_kg": [20, 25], "frequency": "cada 24 horas", "max_dose_per_day": 2500}], "duration": "2 meses", "notes": "Fase inicial estándar con 4 fármacos." }
        ]
    },
    "Tularemia": {
        sourcePage: 131, 
        antibiotics: [
            { "name": "Gentamicina IV", "dose_per_kg": [5, 5], "frequency": "cada 24 horas", "duration": "7-10 días" },
            { "name": "Ciprofloxacino", "dose_per_kg": [20, 30], "frequency": "cada 12 horas", "duration": "10-14 días", "max_dose_per_day": 1000, 
                "presentations": {
                    jarabe: ['100 mg/ml'],
                    comprimidos: ['250 mg', '500 mg', '750 mg']
                } 
            }
        ]
    }
};