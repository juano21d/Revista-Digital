"use client";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">
            Sobre el Proyecto
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Nuestra Misión
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Promover la educación intercultural en las instituciones de
            educación inicial, fomentando el respeto, la valoración y el
            conocimiento de la diversidad cultural presente en nuestras
            comunidades educativas.
          </p>

          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Objetivos
          </h2>
          <ul className="text-gray-700 mb-6 space-y-2">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Sensibilizar sobre la importancia de la educación intercultural
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Proporcionar recursos educativos culturalmente diversos
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Facilitar el intercambio de experiencias entre educadores
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Crear un espacio de diálogo y reflexión pedagógica
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            Público Objetivo
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Esta revista está dirigida a educadores de nivel inicial,
            estudiantes de pedagogía, familias comprometidas con la educación
            intercultural y toda persona interesada en promover la diversidad
            cultural en los espacios educativos.
          </p>
        </div>

        <div className="bg-amber-100 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">
            ¿Por qué es importante la educación intercultural?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            En un mundo cada vez más globalizado, es fundamental que los niños y
            niñas desarrollen desde temprana edad competencias interculturales
            que les permitan convivir de manera armónica con la diversidad,
            valorando las diferencias como una oportunidad de enriquecimiento
            mutuo y construcción de una sociedad más justa e inclusiva.
          </p>
        </div>
      </div>
    </div>
  );
}
