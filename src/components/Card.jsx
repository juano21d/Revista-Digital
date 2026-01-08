export default function Card({
  title,
  description,
  image = null,
  metadata = {},
  valores = [],
  tipo = "general",
  onButtonClick = null,
  hasGammaContent = false,
}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image with pastel gradient fallback */}
      <div className="h-48 bg-gradient-to-br from-game-primary/30 to-game-secondary/30 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center">
            <span className="text-game-primary text-4xl mb-2 block">
              {tipo === "juego" ? "🎯" : "🌍"}
            </span>
            <span className="text-gray-600 text-sm">Imagen no disponible</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Metadata */}
        {Object.keys(metadata).length > 0 && (
          <div className="space-y-2 mb-4">
            {Object.entries(metadata).map(([key, value]) => (
              <div key={key} className="flex justify-between text-sm">
                <span className="text-gray-500 font-medium">{key}:</span>
                <span className="text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Valores educativos */}
        {valores.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-2">
              Valores que desarrolla:
            </h4>
            <div className="flex flex-wrap gap-2">
              {valores.map((valor, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-game-primary/20 to-game-secondary/20 text-gray-700 text-xs rounded-full border border-game-primary/30"
                >
                  {valor}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action button with pastel styling */}
      <div className="px-6 pb-6">
        <button
          onClick={onButtonClick}
          className="w-full bg-gradient-to-r from-game-primary to-game-secondary text-white py-2 px-4 rounded-md hover:from-game-primary/80 hover:to-game-secondary/80 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg"
        >
          {tipo === "juego" ? "Conocer juego" : "Ver más detalles"}
        </button>
      </div>
    </div>
  );
}
