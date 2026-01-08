"use client";

import VideoPlayer from "@/components/VideoPlayer";
import videosData from "@/data/videos.json";
import { useState } from "react";

export default function Galeria() {
  const [activeTab, setActiveTab] = useState("videos");

  const imagenes = [
    {
      titulo: "Niños jugando rayuela en Quito",
      descripcion: "Estudiantes de educación inicial aprendiendo coordinación",
      cultura: "Ecuador",
      categoria: "Juegos urbanos",
      imagen: "/imagenes/Rayuela en Quito.jpeg",
    },
    {
      titulo: "Festival de trompos en Cuenca",
      descripcion: "Celebración tradicional con participación comunitaria",
      cultura: "Ecuador",
      categoria: "Festivales",
      imagen: "/imagenes/Festival del Trompo.jpeg",
    },
    {
      titulo: "Niños jugando canicas",
      descripcion: "La precisión y la estrategia en cada tiro",
      cultura: "Internacional",
      categoria: "Juegos de precisión",
      imagen: "/imagenes/Jugando Canicas.jpeg",
    },
    {
      titulo: "Volando cometas",
      descripcion: "La alegría de ver volar las cometas en el cielo",
      cultura: "Internacional",
      categoria: "Juegos aéreos",
      imagen: "/imagenes/Volando Cometas.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-game-neutral via-pastel-mint-50 to-game-secondary">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-pastel-lavender-800 mb-4">
            🎥 Galería Multimedia
          </h1>
          <p className="text-xl text-pastel-peach-700 mb-8 max-w-3xl mx-auto">
            Videos e imágenes que muestran la diversidad lúdica mundial
          </p>
          <div className="w-24 h-1 bg-game-primary mx-auto"></div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-2 border border-game-primary/20">
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-6 py-3 rounded-md transition-colors font-medium ${
                activeTab === "videos"
                  ? "bg-game-primary text-white shadow-md"
                  : "text-pastel-lavender-700 hover:bg-game-primary/20"
              }`}
            >
              📹 Videos Educativos
            </button>
            <button
              onClick={() => setActiveTab("imagenes")}
              className={`px-6 py-3 rounded-md transition-colors font-medium ${
                activeTab === "imagenes"
                  ? "bg-game-secondary text-white shadow-md"
                  : "text-pastel-lavender-700 hover:bg-game-secondary/20"
              }`}
            >
              🖼️ Imágenes Culturales
            </button>
          </div>
        </div>

        {/* Mensaje pedagógico */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-game-accent/20 p-6 rounded-lg border border-game-accent/30">
            <h3 className="text-lg font-semibold text-pastel-lavender-800 mb-3">
              🎬 Aprender viendo: la importancia de los recursos visuales
            </h3>
            <p className="text-gray-700">
              Los recursos multimedia permiten a los niños observar cómo otros
              niños del mundo juegan, aprenden y se divierten, creando
              conexiones emocionales que trascienden las barreras culturales y
              geográficas.
            </p>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "videos" && (
            <div>
              <h2 className="text-2xl font-bold text-pastel-lavender-800 mb-8 text-center">
                Videos Educativos sobre Juegos Tradicionales
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {videosData.map((video, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-pastel-mint-200"
                  >
                    <VideoPlayer videoId={video.videoId} title={video.titulo} />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-pastel-lavender-800">
                          {video.titulo}
                        </h3>
                        <span className="bg-game-primary px-3 py-1 rounded-full text-xs font-medium text-white">
                          {video.cultura}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-3">{video.descripcion}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="mr-4">⏱️ {video.duracion}</span>
                        <span>👥 {video.edad_recomendada}</span>
                      </div>
                      {video.valores_pedagogicos && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-xs font-medium text-pastel-peach-700 mb-1">
                            Valores pedagógicos:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {video.valores_pedagogicos.map((valor, idx) => (
                              <span
                                key={idx}
                                className="bg-game-accent/20 text-pastel-lavender-700 px-2 py-1 rounded text-xs"
                              >
                                {valor}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "imagenes" && (
            <div>
              <h2 className="text-2xl font-bold text-pastel-lavender-800 mb-8 text-center">
                Imágenes de Niños Jugando en Diferentes Culturas
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {imagenes.map((imagen, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-pastel-peach-200 hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={imagen.imagen}
                        alt={imagen.titulo}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-semibold text-pastel-lavender-800">
                          {imagen.titulo}
                        </h3>
                        <span className="bg-game-secondary px-2 py-1 rounded text-xs font-medium text-white">
                          {imagen.cultura}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">
                        {imagen.descripcion}
                      </p>
                      <span className="bg-game-accent/20 text-pastel-lavender-700 px-2 py-1 rounded text-xs">
                        {imagen.categoria}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl mx-auto border border-game-primary/20">
            <h3 className="text-2xl font-bold text-pastel-lavender-800 mb-4">
              🌍 Conectando culturas a través del juego
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Estos recursos multimedia nos permiten viajar por el mundo sin
              salir del aula, descubriendo cómo los niños de diferentes culturas
              comparten la alegría universal del juego.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/juegos"
                className="bg-game-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-game-primary/80 transition-colors"
              >
                Ver Juegos Tradicionales
              </a>
              <a
                href="/educacion"
                className="bg-pastel-lavender-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-pastel-lavender-700 transition-colors"
              >
                Enfoque Pedagógico
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
