"use client";

export default function Educacion() {
  const beneficios = [
    {
      icono: "🤝",
      titulo: "Cooperación y Trabajo en Equipo",
      descripcion:
        "Los juegos grupales enseñan a los niños a colaborar, compartir responsabilidades y alcanzar objetivos comunes.",
      ejemplos: [
        "Soga tradicional",
        "Rondas infantiles",
        "Juegos de pelota cooperativos",
      ],
    },
    {
      icono: "🌍",
      titulo: "Conciencia Cultural",
      descripcion:
        "Cada juego lleva consigo la historia y valores de una cultura, ampliando la perspectiva mundial de los niños.",
      ejemplos: ["Rayuela ecuatoriana", "Origami japonés", "Canicas mexicanas"],
    },
    {
      icono: "💪",
      titulo: "Desarrollo Físico y Motor",
      descripcion:
        "Los movimientos específicos de cada juego fortalecen diferentes habilidades motrices y coordinación.",
      ejemplos: [
        "Saltos de rayuela",
        "Lanzamiento de trompo",
        "Equilibrio en zancos",
      ],
    },
    {
      icono: "🧠",
      titulo: "Estimulación Cognitiva",
      descripcion:
        "Los juegos tradicionales desarrollan estrategia, memoria, concentración y resolución de problemas.",
      ejemplos: [
        "Ajedrez ancestral",
        "Juegos de memoria",
        "Laberintos tradicionales",
      ],
    },
    {
      icono: "❤️",
      titulo: "Inteligencia Emocional",
      descripcion:
        "A través del juego, los niños aprenden a manejar emociones, desarrollar empatía y autocontrol.",
      ejemplos: [
        "Juegos de roles",
        "Competencias amistosas",
        "Actividades de expresión",
      ],
    },
    {
      icono: "🎭",
      titulo: "Creatividad y Expresión",
      descripcion:
        "Los juegos tradicionales fomentan la imaginación, creatividad y diferentes formas de expresión artística.",
      ejemplos: ["Teatro popular", "Danzas tradicionales", "Canto y música"],
    },
  ];

  const metodologias = [
    {
      fase: "1. Presentación Cultural",
      descripcion: "Introducir el juego en su contexto cultural original",
      actividades: [
        "Mostrar el país de origen",
        "Contar la historia del juego",
        "Explicar su significado cultural",
      ],
    },
    {
      fase: "2. Demostración Práctica",
      descripcion: "Enseñar las reglas y técnicas básicas del juego",
      actividades: [
        "Demostración por parte del docente",
        "Práctica guiada paso a paso",
        "Corrección de técnicas",
      ],
    },
    {
      fase: "3. Práctica Inclusiva",
      descripcion:
        "Adaptar el juego para que todos los niños puedan participar",
      actividades: [
        "Modificar reglas si es necesario",
        "Crear variantes inclusivas",
        "Fomentar la participación total",
      ],
    },
    {
      fase: "4. Reflexión Intercultural",
      descripcion: "Conectar la experiencia con valores y aprendizajes",
      actividades: [
        "Comparar con juegos locales",
        "Identificar valores aprendidos",
        "Compartir experiencias personales",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-game-neutral via-pastel-mint-50 to-game-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-pastel-lavender-800 mb-4">
            📚 Educación Intercultural
          </h1>
          <h2 className="text-2xl font-semibold text-pastel-peach-700 mb-8">
            La Importancia Pedagógica de los Juegos Tradicionales
          </h2>
          <div className="w-24 h-1 bg-game-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Los juegos tradicionales son herramientas pedagógicas poderosas que
            trascienden el entretenimiento, convirtiéndose en puentes culturales
            que conectan a los niños con la diversidad mundial mientras
            desarrollan habilidades fundamentales para la vida.
          </p>
        </div>

        {/* Mensaje inspirador */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-game-accent/20 to-game-primary/20 p-8 rounded-lg border border-game-accent/30">
            <h3 className="text-2xl font-bold text-pastel-lavender-800 mb-4 text-center">
              🌟 "El juego es una forma de diálogo intercultural"
            </h3>
            <p className="text-gray-700 text-center leading-relaxed text-lg">
              A través del juego, los niños no solo se divierten, sino que
              aprenden a comunicarse más allá de las palabras, creando
              conexiones auténticas con otras culturas y desarrollando una
              mentalidad global desde temprana edad.
            </p>
          </div>
        </div>

        {/* Beneficios Pedagógicos */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-pastel-lavender-800 text-center mb-12">
            🎯 Beneficios Pedagógicos de los Juegos Tradicionales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-pastel-mint-200 hover:shadow-xl transition-all"
              >
                <div className="text-center mb-4">
                  <span className="text-4xl mb-2 block">{beneficio.icono}</span>
                  <h4 className="text-lg font-semibold text-pastel-lavender-800">
                    {beneficio.titulo}
                  </h4>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {beneficio.descripcion}
                </p>
                <div>
                  <p className="text-xs font-medium text-pastel-peach-700 mb-2">
                    Ejemplos:
                  </p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {beneficio.ejemplos.map((ejemplo, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-1 h-1 bg-game-primary rounded-full mr-2"></span>
                        {ejemplo}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metodología de Implementación */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-pastel-lavender-800 text-center mb-12">
            🔄 Metodología de Implementación en el Aula
          </h3>
          <div className="max-w-4xl mx-auto">
            {metodologias.map((metodologia, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-6 border border-pastel-peach-200"
              >
                <div className="flex items-start">
                  <div className="bg-game-secondary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-pastel-lavender-800 mb-2">
                      {metodologia.fase}
                    </h4>
                    <p className="text-gray-700 mb-3">
                      {metodologia.descripcion}
                    </p>
                    <div className="bg-game-neutral/50 p-3 rounded">
                      <p className="text-xs font-medium text-pastel-peach-700 mb-2">
                        Actividades sugeridas:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {metodologia.actividades.map((actividad, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-game-primary mr-2">•</span>
                            {actividad}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marco Teórico */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-game-primary/20">
            <h3 className="text-2xl font-bold text-pastel-lavender-800 mb-6 text-center">
              📖 Marco Teórico: Fundamentos de la Educación Intercultural
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-pastel-peach-700 mb-3">
                  Teoría del Aprendizaje Social (Vygotsky)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Los juegos tradicionales actúan como mediadores culturales,
                  permitiendo que los niños internalicen valores y prácticas
                  sociales a través de la interacción con pares y elementos
                  culturales diversos.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-pastel-peach-700 mb-3">
                  Educación Intercultural (Banks & McGee Banks)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  La implementación de juegos de diferentes culturas promueve la
                  equidad educativa, reduce prejuicios y desarrolla competencias
                  interculturales esenciales para la ciudadanía global.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-pastel-peach-700 mb-3">
                  Teoría de Inteligencias Múltiples (Gardner)
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Los juegos tradicionales estimulan diferentes tipos de
                  inteligencia simultáneamente: kinestésica, musical,
                  interpersonal, espacial y lógico-matemática, ofreciendo
                  múltiples caminos de aprendizaje.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mensaje final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-game-primary to-game-secondary p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🌱 Respetar la diversidad cultural empieza en la infancia
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Al integrar juegos tradicionales de diferentes culturas en el
              currículo de educación inicial, estamos sembrando las semillas de
              una sociedad más inclusiva, empática y culturalmente consciente.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/juegos"
                className="bg-white text-pastel-lavender-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Explorar Juegos
              </a>
              <a
                href="/galeria"
                className="bg-pastel-lavender-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pastel-lavender-700 transition-colors"
              >
                Ver Galería
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
