export default function Culturas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-game-neutral via-pastel-mint-50 to-game-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pastel-lavender-800 mb-4">
            🌍 Culturas del Mundo
          </h1>
          <p className="text-xl text-pastel-peach-700 mb-8 max-w-3xl mx-auto">
            Los juegos tradicionales son una ventana a la diversidad cultural de nuestro mundo
          </p>
          <div className="w-24 h-1 bg-game-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 mb-8 border border-game-primary/20">
            <h2 className="text-2xl font-bold text-pastel-lavender-800 mb-4">
              La diversidad cultural en los juegos tradicionales
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cada cultura del mundo ha desarrollado sus propias formas de juego, reflejando sus valores, 
              tradiciones y formas de vida. Los juegos tradicionales son mucho más que entretenimiento: 
              son portadores de identidad cultural y herramientas de transmisión de conocimientos entre generaciones.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Desde la rayuela en Ecuador hasta el origami en Japón, desde las canicas en México hasta 
              las cometas en la India, cada juego cuenta una historia única sobre el pueblo que lo creó.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-game-accent/20 rounded-lg p-6 border border-game-accent/30">
              <h3 className="text-xl font-bold text-pastel-lavender-800 mb-3">
                🎯 Valores universales
              </h3>
              <p className="text-gray-700">
                Aunque cada cultura tiene sus juegos únicos, todos comparten valores universales como 
                la cooperación, el respeto, la creatividad y la alegría.
              </p>
            </div>

            <div className="bg-game-primary/20 rounded-lg p-6 border border-game-primary/30">
              <h3 className="text-xl font-bold text-pastel-lavender-800 mb-3">
                🌟 Aprendizaje intercultural
              </h3>
              <p className="text-gray-700">
                Conocer juegos de otras culturas ayuda a los niños a desarrollar empatía, 
                apertura mental y aprecio por la diversidad.
              </p>
            </div>

            <div className="bg-game-secondary/20 rounded-lg p-6 border border-game-secondary/30">
              <h3 className="text-xl font-bold text-pastel-lavender-800 mb-3">
                🎨 Expresión cultural
              </h3>
              <p className="text-gray-700">
                Los juegos reflejan el arte, la música, las historias y las creencias de cada pueblo, 
                siendo una forma viva de expresión cultural.
              </p>
            </div>

            <div className="bg-pastel-mint-200 rounded-lg p-6 border border-pastel-mint-400">
              <h3 className="text-xl font-bold text-pastel-lavender-800 mb-3">
                💡 Sabiduría ancestral
              </h3>
              <p className="text-gray-700">
                Muchos juegos tradicionales contienen enseñanzas sobre la naturaleza, 
                las matemáticas, la física y la vida en comunidad.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/juegos"
              className="inline-block bg-game-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-game-primary/80 transition-colors"
            >
              Explorar Juegos Tradicionales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
