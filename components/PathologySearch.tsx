import React, { useState, useEffect, useRef } from 'react';
import { ANTIBIOTIC_DATA } from '../constants';

interface Props {
    onSelect: (pathology: string) => void;
    selectedPathology: string | null;
}

const PathologySearch: React.FC<Props> = ({ onSelect, selectedPathology }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const allPathologies = Object.keys(ANTIBIOTIC_DATA).sort();

    useEffect(() => {
        if (selectedPathology) {
            setSearchTerm(selectedPathology);
            setIsOpen(false);
        } else {
            setSearchTerm('');
        }
    }, [selectedPathology]);

    useEffect(() => {
        // Resetear índice activo cuando cambia la búsqueda
        setActiveIndex(-1);
    }, [searchTerm]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    const filteredPathologies = allPathologies.filter(p => 
        p.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (pathology: string) => {
        setSearchTerm(pathology);
        setIsOpen(false);
        setActiveIndex(-1);
        onSelect(pathology);
        inputRef.current?.blur();
    };

    const handleClear = () => {
        setSearchTerm('');
        setIsOpen(false);
        onSelect(''); 
        inputRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isOpen) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex(prev => (prev < filteredPathologies.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(prev => (prev > 0 ? prev - 1 : -1));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex >= 0 && activeIndex < filteredPathologies.length) {
                handleSelect(filteredPathologies[activeIndex]);
            } else if (filteredPathologies.length > 0) {
                // Si no hay nada seleccionado pero hay resultados y se pulsa enter, 
                // opcionalmente podríamos seleccionar el primero, o no hacer nada.
                // Aquí optamos por seleccionar el primero si es una coincidencia muy cercana o el único
                if (filteredPathologies.length === 1) {
                    handleSelect(filteredPathologies[0]);
                }
            }
        } else if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };

    return (
        <div className="relative w-full" ref={wrapperRef}>
            <label htmlFor="pathology-search" className="block text-sm font-medium text-gray-700 mb-1">
                Patología Infecciosa
            </label>
            <div className="relative">
                <input
                    ref={inputRef}
                    type="text"
                    id="pathology-search"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setIsOpen(true);
                        if (e.target.value === '') onSelect('');
                    }}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsOpen(true)}
                    placeholder="Buscar patología..."
                    autoComplete="off"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition shadow-sm outline-none"
                />
                {searchTerm && (
                    <button
                        onClick={handleClear}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-400 hover:text-gray-600"
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
            </div>
            {isOpen && filteredPathologies.length > 0 && (
                <div className="absolute z-10 w-full bg-white mt-1 border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {filteredPathologies.map((pathology, index) => (
                        <div
                            key={pathology}
                            className={`px-4 py-2 cursor-pointer text-sm border-b border-gray-50 last:border-none ${
                                index === activeIndex ? 'bg-green-100 text-green-900 font-medium' : 'text-gray-700 hover:bg-green-50'
                            }`}
                            onClick={() => handleSelect(pathology)}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            {pathology}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PathologySearch;