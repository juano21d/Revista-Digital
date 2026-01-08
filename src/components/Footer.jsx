export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">🪶</span>
              <h3 className="text-lg font-semibold">Juegos Tradicionales</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Explorando la diversidad cultural a través de juegos tradicionales
              del Ecuador y el mundo para fortalecer la educación intercultural
              en la primera infancia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/juegos"
                  className="text-gray-300 hover:text-game-primary transition-colors"
                >
                  Juegos Tradicionales
                </a>
              </li>
              <li>
                <a
                  href="/galeria"
                  className="text-gray-300 hover:text-game-primary transition-colors"
                >
                  Galería Multimedia
                </a>
              </li>
              <li>
                <a
                  href="/educacion"
                  className="text-gray-300 hover:text-game-primary transition-colors"
                >
                  Educación Intercultural
                </a>
              </li>
              <li>
                <a
                  href="/creditos"
                  className="text-gray-300 hover:text-game-primary transition-colors"
                >
                  Créditos
                </a>
              </li>
            </ul>
          </div>

          {/* Universidad */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Universidad</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p className="font-medium text-white">
                Universidad Católica de Cuenca
              </p>
              <p>Unidad Académica de Educación</p>
              <p>Carrera de Educación Inicial</p>
              <p className="text-game-primary">🎓 Proyecto Académico 2024</p>
            </div>
          </div>

          {/* Información Académica */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p>
                <strong>Tema:</strong> Juegos Tradicionales
              </p>
              <p>
                <strong>Enfoque:</strong> Educación Intercultural
              </p>
              <p>
                <strong>Nivel:</strong> Educación Inicial
              </p>
              <p>
                <strong>Año:</strong> 2024
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm mb-1">
                © 2024 Universidad Católica de Cuenca - Juegos Tradicionales
              </p>
              <p className="text-gray-400 text-xs">
                Proyecto de Educación Intercultural en la Primera Infancia
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                Educando con diversidad:
              </span>
              <span className="text-game-primary text-lg">🌍🎮🪶</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
