"use client";

import GameList from "@/components/GameList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-game-neutral via-pastel-mint-50 to-game-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="text-6xl mb-4 block animate-bounce">🪶</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-pastel-lavender-800 mb-6">
            Revista Digital Intercultural
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-pastel-peach-700 mb-8">
            Creciendo en Diversidad
          </h2>
          <p className="text-xl text-pastel-lavender-700 mb-8 max-w-3xl mx-auto">
            Juegos tradicionales del Ecuador y del mundo
          </p>
          <div className="w-32 h-1 bg-game-primary mx-auto mb-8"></div>
        </div>

        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-game-primary/20">
            <h2 className="text-3xl font-bold text-pastel-lavender-800 mb-6">
              El juego es una forma de diálogo intercultural
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Los juegos tradicionales son ventanas hacia las culturas del
              mundo. A través del juego, los niños aprenden valores
              fundamentales como el respeto, la cooperación y la diversidad
              cultural, creando puentes de entendimiento entre diferentes
              pueblos y tradiciones.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              En esta revista digital educativa, descubrirás cómo cada cultura
              enseña valores a través del juego, y por qué respetar la
              diversidad cultural empieza en la infancia.
            </p>
            <div className="bg-game-accent/20 p-4 rounded-lg border-l-4 border-game-accent">
              <p className="italic text-pastel-lavender-700">
                "Cada juego tradicional es un tesoro cultural que conecta
                generaciones y enseña a los niños sobre su identidad y la de
                otros pueblos."
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center border border-pastel-mint-200">
            <div className="w-16 h-16 bg-game-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="text-xl font-semibold text-pastel-lavender-800 mb-3">
              Juegos del Ecuador
            </h3>
            <p className="text-gray-600">
              Rayuela, trompo, cuerda y otros juegos que forman parte de nuestra
              identidad cultural
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center border border-pastel-peach-200">
            <div className="w-16 h-16 bg-game-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">�</span>
            </div>
            <h3 className="text-xl font-semibold text-pastel-lavender-800 mb-3">
              Juegos del Mundo
            </h3>
            <p className="text-gray-600">
              Soga japonesa, canicas mexicanas, yoyo y tradiciones lúdicas de
              diferentes culturas
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 text-center border border-pastel-lavender-200">
            <div className="w-16 h-16 bg-game-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-pastel-lavender-800 mb-3">
              Educación Intercultural
            </h3>
            <p className="text-gray-600">
              Recursos pedagógicos para integrar la diversidad cultural en el
              aula
            </p>
          </div>
        </div>

        {/* Juegos Destacados */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-pastel-lavender-800 mb-4">
              🎯 Juegos Destacados
            </h2>
            <p className="text-xl text-pastel-peach-700">
              Descubre algunos juegos tradicionales del Ecuador y el mundo
            </p>
          </div>
          <GameList limite={3} />
          <div className="text-center mt-8">
            <Link
              href="/juegos"
              className="inline-flex items-center bg-gradient-to-r from-game-primary to-game-secondary text-white font-semibold py-3 px-6 rounded-lg hover:from-game-primary/80 hover:to-game-secondary/80 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Ver todos los juegos
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-game-primary to-game-secondary p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¡Explora y aprende jugando!
            </h3>
            <p className="text-white/90 mb-6">
              Descubre cómo los juegos tradicionales pueden enriquecer la
              educación intercultural
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/educacion"
                className="bg-white text-pastel-lavender-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Marco Pedagógico
              </Link>
              <Link
                href="/galeria"
                className="bg-pastel-lavender-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pastel-lavender-700 transition-colors"
              >
                Galería Multimedia
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
