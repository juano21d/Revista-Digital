"use client";

import GameList from "@/components/GameList";
import juegosData from "@/data/juegos.json";
import { useState } from "react";

export default function Juegos() {
  const [filtroActivo, setFiltroActivo] = useState("todos");

  const paises = ["todos", ...new Set(juegosData.map((juego) => juego.pais))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-game-neutral via-pastel-mint-50 to-game-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pastel-lavender-800 mb-4">
            🎮 Juegos Tradicionales
          </h1>
          <p className="text-xl text-pastel-peach-700 mb-8 max-w-3xl mx-auto">
            Descubre la riqueza lúdica del Ecuador y del mundo
          </p>
          <div className="w-24 h-1 bg-game-primary mx-auto"></div>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-game-primary/20">
            <label className="block text-sm font-medium text-pastel-lavender-800 mb-2">
              Filtrar por país:
            </label>
            <select
              value={filtroActivo}
              onChange={(e) => setFiltroActivo(e.target.value)}
              className="px-4 py-2 border border-pastel-mint-300 rounded-md focus:outline-none focus:ring-2 focus:ring-game-primary bg-white"
            >
              {paises.map((pais) => (
                <option key={pais} value={pais}>
                  {pais === "todos" ? "Todos los países" : pais}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mensaje pedagógico */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-game-accent/20 p-6 rounded-lg border border-game-accent/30">
            <h3 className="text-lg font-semibold text-pastel-lavender-800 mb-3">
              💫 Cada cultura enseña valores a través del juego
            </h3>
            <p className="text-gray-700">
              Los juegos tradicionales son más que entretenimiento: son
              herramientas pedagógicas que transmiten valores como la
              cooperación, el respeto, la paciencia y la inclusión. Cada juego
              lleva consigo la sabiduría de generaciones.
            </p>
          </div>
        </div>

        {/* Galería de Juegos */}
        <GameList filtro={filtroActivo} />

        {filtroActivo !== "todos" &&
          juegosData.filter((juego) => juego.pais === filtroActivo).length ===
            0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No se encontraron juegos para el país seleccionado.
              </p>
            </div>
          )}

        {/* Mensaje final */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl mx-auto border border-game-primary/20">
            <h3 className="text-2xl font-bold text-pastel-lavender-800 mb-4">
              🌟 Respetar la diversidad cultural empieza en la infancia
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Cuando los niños aprenden y practican juegos de diferentes
              culturas, desarrollan empatía, respeto y apreciación por la
              diversidad. Cada juego es una oportunidad de construir puentes
              entre culturas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
