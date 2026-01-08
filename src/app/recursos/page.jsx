"use client";

import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";

export default function Recursos() {
  const [activeTab, setActiveTab] = useState("videos");

  const recursos = {
    videos: [
      {
        id: "dQw4w9WgXcQ",
        titulo: "Diversidad Cultural en el Aula",
        descripcion:
          "Estrategias para incorporar la interculturalidad en educación inicial",
      },
      {
        id: "dQw4w9WgXcQ",
        titulo: "Cuentos del Mundo",
        descripcion:
          "Narración de historias tradicionales de diferentes culturas",
      },
      {
        id: "dQw4w9WgXcQ",
        titulo: "Música y Danza Intercultural",
        descripcion: "Actividades musicales para celebrar la diversidad",
      },
    ],
    audios: [
      {
        titulo: "Canciones Tradicionales Andinas",
        descripcion: "Melodías para enseñar sobre la cultura andina",
        duracion: "15:30",
      },
      {
        titulo: "Cuentos Narrados en Quechua",
        descripcion: "Historias tradicionales en lengua originaria",
        duracion: "12:45",
      },
      {
        titulo: "Sonidos de la Naturaleza Amazónica",
        descripcion: "Ambiente sonoro para actividades de relajación",
        duracion: "20:00",
      },
    ],
    imagenes: [
      {
        titulo: "Vestimentas Tradicionales",
        descripcion: "Colección de trajes típicos de América Latina",
        categoria: "Fotografía",
      },
      {
        titulo: "Artesanías del Mundo",
        descripcion: "Técnicas artesanales de diferentes culturas",
        categoria: "Arte",
      },
      {
        titulo: "Festivales Culturales",
        descripcion: "Celebraciones tradicionales documentadas",
        categoria: "Eventos",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-800 mb-4">
          Recursos Multimedia
        </h1>
        <p className="text-xl text-amber-700 mb-8 max-w-3xl mx-auto">
          Videos, audios e imágenes para enriquecer la experiencia educativa
        </p>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-white rounded-lg shadow-lg p-2">
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-3 rounded-md transition-colors ${
              activeTab === "videos"
                ? "bg-amber-500 text-white"
                : "text-amber-700 hover:bg-amber-100"
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setActiveTab("audios")}
            className={`px-6 py-3 rounded-md transition-colors ${
              activeTab === "audios"
                ? "bg-amber-500 text-white"
                : "text-amber-700 hover:bg-amber-100"
            }`}
          >
            Audios
          </button>
          <button
            onClick={() => setActiveTab("imagenes")}
            className={`px-6 py-3 rounded-md transition-colors ${
              activeTab === "imagenes"
                ? "bg-amber-500 text-white"
                : "text-amber-700 hover:bg-amber-100"
            }`}
          >
            Imágenes
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      <div className="max-w-6xl mx-auto">
        {activeTab === "videos" && (
          <div className="grid lg:grid-cols-2 gap-8">
            {recursos.videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <VideoPlayer videoId={video.id} />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">
                    {video.titulo}
                  </h3>
                  <p className="text-gray-700">{video.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "audios" && (
          <div className="grid md:grid-cols-2 gap-6">
            {recursos.audios.map((audio, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-600 text-xl">🎵</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-amber-800">
                      {audio.titulo}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {audio.duracion}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{audio.descripcion}</p>
                <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors">
                  Reproducir Audio
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "imagenes" && (
          <div className="grid md:grid-cols-3 gap-6">
            {recursos.imagenes.map((imagen, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-500 text-4xl">🖼️</span>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-amber-800">
                      {imagen.titulo}
                    </h3>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded">
                      {imagen.categoria}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm">{imagen.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
