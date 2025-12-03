import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PathologySearch from './components/PathologySearch';
import AntibioticCard from './components/AntibioticCard';
import { Modal, AboutModalContent, CreditsModalContent } from './components/Modals';
import { ANTIBIOTIC_DATA } from './constants';

function App() {
  const [weight, setWeight] = useState<string>('');
  const [selectedPathology, setSelectedPathology] = useState<string | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  
  const staticButtonRef = useRef<HTMLDivElement>(null);

  const numWeight = parseFloat(weight);
  const isValidWeight = !isNaN(numWeight) && numWeight > 0;
  const isNeonatal = isValidWeight && numWeight <= 3;
  const isLateNeonatal = isValidWeight && numWeight > 3 && numWeight <= 5.5;

  // Scroll observer para mostrar el botón flotante
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Mostrar botón flotante cuando el botón estático NO es visible
        setShowFloatingButton(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-20px 0px 0px 0px" // Un pequeño margen para que no parpadee justo en el borde
      }
    );

    if (staticButtonRef.current) {
      observer.observe(staticButtonRef.current);
    }

    return () => {
      if (staticButtonRef.current) {
        observer.unobserve(staticButtonRef.current);
      }
    };
  }, []);

  const handleWeightChange = (delta: number) => {
    const current = parseFloat(weight) || 0;
    const newValue = Math.max(0, Math.round((current + delta) * 10) / 10);
    setWeight(newValue.toString());
  };

  const handleReset = () => {
    setWeight('');
    setSelectedPathology(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pathologyData = selectedPathology ? ANTIBIOTIC_DATA[selectedPathology] : null;

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl min-h-screen flex flex-col">
      <Header />

      <main className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex-grow">
        {/* Input Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
              Peso del Paciente (kg)
            </label>
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => handleWeightChange(-0.1)}
                className="px-4 py-2 border border-gray-300 rounded-l-lg bg-gray-50 hover:bg-gray-100 text-lg font-bold text-gray-600 transition"
              >
                -
              </button>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Ej: 15"
                className="w-full px-4 py-2 border-t border-b border-gray-300 focus:ring-green-500 focus:border-green-500 text-center text-lg outline-none"
              />
              <button
                type="button"
                onClick={() => handleWeightChange(0.1)}
                className="px-4 py-2 border border-gray-300 rounded-r-lg bg-gray-50 hover:bg-gray-100 text-lg font-bold text-gray-600 transition"
              >
                +
              </button>
            </div>
          </div>

          <div className={`${isNeonatal ? 'opacity-50 pointer-events-none' : ''} transition-opacity`}>
            <PathologySearch 
                onSelect={setSelectedPathology} 
                selectedPathology={selectedPathology}
            />
          </div>
        </div>

        {/* Action Bar (Static Button) */}
        <div className="text-center mb-8" ref={staticButtonRef}>
            <button 
                onClick={handleReset}
                className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-green-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                </svg>
                Nueva Consulta
            </button>
        </div>

        {/* Results Area */}
        <div className="mt-6 min-h-[300px]">
            {isNeonatal && (
                <div className="text-center text-red-600 font-semibold py-10 px-6 border-2 border-dashed border-red-300 bg-red-50 rounded-xl animate-pulse">
                    <p>Peso acorde a un neonato. Por favor, consulte pautas específicas según edad postmenstrual.</p>
                </div>
            )}

            {!isNeonatal && isLateNeonatal && (
                <div className="text-center text-amber-800 font-semibold p-4 mb-6 border border-amber-300 bg-amber-50 rounded-xl">
                    <p>Si su paciente es un neonato, consulte pautas específicas según edad postmenstrual.</p>
                </div>
            )}

            {!isNeonatal && !isValidWeight && !selectedPathology && (
                <div className="text-center text-gray-400 py-16 px-6 border-2 border-dashed border-gray-200 rounded-xl">
                    <p className="text-lg">Introduzca el peso y seleccione una patología para comenzar.</p>
                </div>
            )}

            {!isNeonatal && isValidWeight && selectedPathology && pathologyData && (
                <div className="animate-fade-in-up">
                    <div className="border-b pb-4 mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2 font-heading">{selectedPathology}</h2>
                        <p className="text-gray-600">
                            Paciente de <span className="font-bold text-black">{weight} kg</span>
                        </p>
                        {pathologyData.pathology_notes && (
                            <p className="text-sm text-gray-500 italic mt-1">{pathologyData.pathology_notes}</p>
                        )}
                    </div>
                    
                    <div className="grid gap-6 md:grid-cols-1">
                        {pathologyData.antibiotics.map((antibiotic, idx) => (
                            <AntibioticCard 
                                key={idx} 
                                antibiotic={antibiotic} 
                                weight={numWeight}
                                pathology={selectedPathology}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
      </main>

      <Footer onOpenAbout={() => setShowAbout(true)} onOpenCredits={() => setShowCredits(true)} />

      {/* Floating Reset Button */}
      <div 
        className={`fixed bottom-6 left-0 right-0 z-20 flex justify-center transition-all duration-500 transform ${
            showFloatingButton ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
         <button 
            onClick={handleReset} 
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
            </svg>
            Nueva Consulta
        </button>
      </div>

      <Modal isOpen={showAbout} onClose={() => setShowAbout(false)} title="Acerca de los resultados">
        <AboutModalContent />
      </Modal>

      <Modal isOpen={showCredits} onClose={() => setShowCredits(false)} title="Créditos">
        <CreditsModalContent />
      </Modal>
    </div>
  );
}

export default App;