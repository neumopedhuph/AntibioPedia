import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center p-4">
            <div className="relative mx-auto p-5 border w-full max-w-lg shadow-lg rounded-xl bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-xl leading-6 font-bold text-gray-900 mb-4">{title}</h3>
                    <div className="mt-2 px-2 py-3 text-left">
                        {children}
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-green-600 text-white text-base font-medium rounded-lg w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const AboutModalContent = () => (
    <div className="text-sm text-gray-600 space-y-4">
        <p>
            Esta herramienta sugiere las pautas antibióticas recomendadas por las guías de práctica clínica nacionales más recientes, realizando el cálculo de la dosis indicada para las presentaciones disponibles en España.
        </p>
        <p className="font-semibold text-gray-800">
            La introducción adecuada de los datos, el juicio diagnóstico otorgado al paciente, y la elección final del tratamiento antibiótico son responsabilidad exclusiva del pediatra o médico de familia prescriptor del tratamiento.
        </p>
        <p>
            Para el tratamiento antibiótico de un neonato, se recomienda consultar documentos específicos para este rango de edad según su edad postmenstrual.
        </p>
        <ul className="list-disc pl-5 space-y-1">
            <li>Con los resultados en miligramos de las medicaciones intravenosas/intramusculares se redondean las unidades para facilitar su preparación.</li>
            <li>Con los resultados en mililitros de los jarabes, se redondea para dar un solo decimal.</li>
            <li>En el caso de pautas antibióticas en las que exista un rango de dosificación indicado, se realiza el cálculo con el valor intermedio de ese rango.</li>
        </ul>
    </div>
);

export const CreditsModalContent = () => (
    <p className="text-sm text-gray-600">
        Calculadora web desarrollada mediante Gemini 2.5 Pro por David Tejero Sánchez, pediatra en Madrid. Prohibida su copia o modificación.
    </p>
);
