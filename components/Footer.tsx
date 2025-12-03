import React from 'react';

interface FooterProps {
    onOpenAbout: () => void;
    onOpenCredits: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenAbout, onOpenCredits }) => {
    return (
        <footer className="mt-8 text-sm text-gray-600 flex flex-col items-center gap-2">
            <button onClick={onOpenAbout} className="font-bold text-green-600 cursor-pointer hover:underline">
                Acerca de los resultados
            </button>
            <button onClick={onOpenCredits} className="font-bold text-green-600 cursor-pointer hover:underline">
                Créditos
            </button>
            <p className="font-bold text-green-600">2025</p>
        </footer>
    );
};

export default Footer;