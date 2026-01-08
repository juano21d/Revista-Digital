"use client";

export default function GammaModal({ isOpen, onClose, gammaUrl, title }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-game-primary to-game-secondary p-4 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">🎯 {title}</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        {/* Iframe Content */}
        <div className="p-4 bg-gray-50">
          <iframe
            src={gammaUrl}
            style={{ width: "100%", height: "70vh", border: "none" }}
            allow="fullscreen"
            title={title}
            className="rounded-lg shadow-inner"
          />
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-4 flex justify-center">
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-game-primary to-game-secondary text-white px-6 py-2 rounded-lg hover:from-game-primary/80 hover:to-game-secondary/80 transition-all duration-300 font-medium shadow-md"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
