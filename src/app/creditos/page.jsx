"use client";

export default function Creditos() {
  const equipo = [
    {
      nombre: "Edgar Curay Vanegas",
      rol: "Coordinador del Proyecto",
      carrera: "Maestría en Educación Intercultural",
      email: "edgar.curay@ucacue.edu.ec",
      descripcion:
        "Coordinador especializado en pedagogía intercultural con amplia experiencia en educación inicial.",
    },
    {
      nombre: "Evelyn Jamileth Maldonado Molina",
      rol: "Investigadora Principal",
      carrera: "Licenciatura en Educación Inicial",
      email: "evelyn.maldonado@ucacue.edu.ec",
      descripcion:
        "Investigadora en juegos tradicionales y su impacto en el desarrollo infantil intercultural.",
    },
    {
      nombre: "Margarita Cordova",
      rol: "Coordinadora de Contenidos",
      carrera: "Licenciatura en Educación Inicial",
      email: "margarita.cordova@ucacue.edu.ec",
      descripcion:
        "Especialista en desarrollo de materiales educativos interculturales.",
    },
    {
      nombre: "Juan Diego Pillco",
      rol: "Desarrollador Web",
      carrera: "Ingeniería en Sistemas",
      email: "juan.pillco@ucacue.edu.ec",
      descripcion:
        "Desarrollador full-stack especializado en plataformas educativas digitales.",
    },
  ];

  const referencias = [
    {
      autor: "Banks, J. A., & McGee Banks, C. A.",
      año: "2019",
      titulo: "Multicultural education: Issues and perspectives",
      editorial: "John Wiley & Sons",
      ubicacion: "Hoboken, NJ",
    },
    {
      autor: "García Canclini, N.",
      año: "2020",
      titulo:
        "Culturas híbridas: Estrategias para entrar y salir de la modernidad",
      editorial: "Paidós",
      ubicacion: "Buenos Aires, Argentina",
    },
    {
      autor: "Ministerio de Educación del Ecuador",
      año: "2021",
      titulo: "Currículo de Educación Inicial: Enfoque intercultural",
      editorial: "MinEduc",
      ubicacion: "Quito, Ecuador",
    },
    {
      autor: "Vygotsky, L. S.",
      año: "2018",
      titulo: "El desarrollo de los procesos psicológicos superiores",
      editorial: "Austral",
      ubicacion: "Barcelona, España",
    },
    {
      autor: "Gardner, H.",
      año: "2019",
      titulo: "Inteligencias múltiples: La teoría en la práctica",
      editorial: "Paidós",
      ubicacion: "Barcelona, España",
    },
    {
      autor: "Huizinga, J.",
      año: "2020",
      titulo: "Homo Ludens: El juego y la cultura",
      editorial: "Alianza Editorial",
      ubicacion: "Madrid, España",
    },
    {
      autor: "Freire, P.",
      año: "2018",
      titulo: "Pedagogía del oprimido",
      editorial: "Siglo XXI",
      ubicacion: "Ciudad de México, México",
    },
    {
      autor: "UNESCO",
      año: "2021",
      titulo: "Directrices para la educación intercultural",
      editorial: "UNESCO Publishing",
      ubicacion: "París, Francia",
    },
  ];

  const fases = [
    {
      numero: 1,
      titulo: "Planificación",
      periodo: "Primero",
      descripcion:
        "Investigación teórica, definición de objetivos y estructura del proyecto",
    },
    {
      numero: 2,
      titulo: "Desarrollo",
      periodo: "Segundo",
      descripcion:
        "Creación de contenidos, desarrollo web y producción de materiales multimedia",
    },
    {
      numero: 3,
      titulo: "Publicación",
      periodo: "Tercero",
      descripcion:
        "Lanzamiento de la plataforma digital y distribución de materiales",
    },
    {
      numero: 4,
      titulo: "Presentación",
      periodo: "Cuarto",
      descripcion:
        "Presentación oficial del proyecto y evaluación de resultados",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-game-neutral via-pastel-mint-50 to-game-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-pastel-lavender-800 mb-4">
            👥 Créditos y Referencias
          </h1>
          <p className="text-xl text-pastel-peach-700 mb-8 max-w-3xl mx-auto">
            Equipo de trabajo, metodología y fundamentación académica
          </p>
          <div className="w-24 h-1 bg-game-primary mx-auto"></div>
        </div>

        {/* Información Institucional */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-game-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-pastel-lavender-800 mb-4">
                🏛️ Universidad Católica de Cuenca
              </h2>
              <h3 className="text-xl text-pastel-peach-700 mb-2">
                Facultad de Educación
              </h3>
              <h4 className="text-lg text-gray-700 mb-4">
                Carrera de Educación Inicial
              </h4>
              <div className="bg-game-accent/20 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">
                  Asignatura:{" "}
                  <span className="text-pastel-lavender-800">
                    Interculturalidad y Diversidad
                  </span>
                </p>
                <p className="text-gray-700 font-medium">
                  Semestre:{" "}
                  <span className="text-pastel-lavender-800">
                    Sexto Semestre
                  </span>
                </p>
                <p className="text-gray-700 font-medium">
                  Periodo académico:{" "}
                  <span className="text-pastel-lavender-800">2025-2026</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipo de Trabajo */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-pastel-lavender-800 text-center mb-12">
            👨‍👩‍👧‍👦 Equipo de Trabajo
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {equipo.map((miembro, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 border border-pastel-mint-200"
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-game-primary to-game-secondary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">👤</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-pastel-lavender-800 mb-1">
                      {miembro.nombre}
                    </h4>
                    <p className="text-pastel-peach-700 font-semibold mb-2">
                      {miembro.rol}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      {miembro.carrera}
                    </p>
                    <p className="text-xs text-gray-700 mb-3 leading-relaxed">
                      {miembro.descripcion}
                    </p>
                    <a
                      href={`mailto:${miembro.email}`}
                      className="text-xs text-game-primary hover:text-game-primary/80 font-medium"
                    >
                      📧 {miembro.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fases del Proyecto */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-pastel-lavender-800 text-center mb-12">
            📅 Fases del Proyecto Académico
          </h3>
          <div className="max-w-4xl mx-auto">
            {fases.map((fase, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 mb-6 border border-pastel-peach-200"
              >
                <div className="flex items-start">
                  <div className="bg-game-accent text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mr-4">
                    {fase.numero}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-pastel-lavender-800">
                        Fase {fase.numero}: {fase.titulo}
                      </h4>
                      <span className="text-sm font-medium text-pastel-peach-700 bg-game-secondary/20 px-3 py-1 rounded-full">
                        {fase.periodo}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {fase.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Referencias Bibliográficas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-pastel-lavender-800 text-center mb-12">
            📚 Referencias Bibliográficas (APA 7ª Edición)
          </h3>
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-game-primary/20">
            <div className="space-y-4">
              {referencias.map((ref, index) => (
                <div
                  key={index}
                  className="border-l-4 border-game-primary pl-4 py-2"
                >
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{ref.autor}</span> (
                    {ref.año}).
                    <em> {ref.titulo}</em>. {ref.editorial}.
                    {ref.ubicacion && ` ${ref.ubicacion}.`}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-pastel-lavender-800 mb-4">
                📖 Nota sobre las Referencias
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Todas las referencias bibliográficas han sido seleccionadas
                siguiendo criterios de relevancia académica, actualidad y
                pertinencia para el tema de educación intercultural y juegos
                tradicionales. Se ha priorizado la inclusión de autores
                reconocidos en el campo de la pedagogía intercultural y el
                desarrollo infantil.
              </p>
            </div>
          </div>
        </div>

        {/* Agradecimientos */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-game-primary to-game-secondary p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              🙏 Agradecimientos
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              Agradecemos especialmente a las comunidades educativas que han
              compartido sus tradiciones lúdicas, a los docentes que implementan
              la educación intercultural en sus aulas, y a todas las familias
              que preservan y transmiten estos valiosos juegos tradicionales.
            </p>
            <p className="text-white/80 text-sm">
              © 2025 Universidad Católica de Cuenca – Revista Digital
              Intercultural
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
