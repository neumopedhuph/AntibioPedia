

export interface AntibioticOption {
    name?: string; // Optional because logic implies parent name usage sometimes
    condition?: string;
    dose_per_kg?: number[];
    dose_of?: string;
    frequency?: string;
    max_dose_per_day?: number;
    fixed_dose?: any; // Can be number or string with units
    dose?: string; // For fixed string doses like "600 000 U"
    type?: string; // 'sobre', 'comprimido'
    is_UI?: boolean;
    age_options?: AntibioticOption[];
    custom_pauta?: string;
    duration?: string;
}

export interface Presentations {
    jarabe?: string[];
    sobres?: string[];
    comprimidos?: string[];
}

export interface Antibiotic {
    name: string;
    dose_type?: 'fixed' | 'combo' | 'combo_age_dependent' | 'age_dependent' | 'age_dependent_custom' | 'custom' | 'weight_dependent' | string;
    options?: AntibioticOption[];
    dose_per_kg?: number[]; // For standard simple antibiotics
    dose_of?: string;
    frequency?: string;
    max_dose_per_day?: number;
    max_dose_per_instance?: { [key: string]: number };
    duration?: string;
    notes?: string;
    presentations?: Presentations;
    pauta?: string; // For custom types
    is_UI?: boolean;
}

export interface PathologyData {
    sourcePage?: number;
    pathology_notes?: string;
    antibiotics: Antibiotic[];
}

export interface Suggestion {
    text: string;
    type: 'jarabe' | 'comprimido' | 'cápsula' | 'sobre' | 'iv' | 'topical' | 'default';
}