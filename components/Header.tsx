import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center mb-8">
            <div className="flex justify-center items-center gap-4">
                <img src="https://i.imgur.com/TiTdHzA.png" alt="AntibioPedia Logo" className="h-16 w-auto transition-all duration-300" />
                <div className="text-left">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500 font-heading">
                        AntibioPedia
                    </h1>
                    <p className="text-lg md:text-xl text-green-600 tracking-tight font-medium">
                        Calculadora Antibiótica Pediátrica
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;