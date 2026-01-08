"use client";

import Card from "@/components/Card";
import culturasData from "@/data/culturas.json";
import { useState } from "react";

export default function Culturas() {
  const [selectedRegion, setSelectedRegion] = useState("todas");

  const regiones = [
    "todas",
    ...new Set(culturasData.map((cultura) => cultura.region)),
  ];

  const culturasFiltradas =
    selectedRegion === "todas"
      ? culturasData
      : culturasData.filter((cultura) => cultura.region === selectedRegion);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-amber-800 mb-4">
          Culturas del Mundo
        </h1>
        <p className="text-xl text-amber-700 mb-8 max-w-3xl mx-auto">
          Explora la riqueza cultural de diferentes pueblos y comunidades
        </p>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </div>

      {/* Filter by Region */}
      <div className="flex justify-center mb-12">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <label className="block text-sm font-medium text-amber-800 mb-2">
            Filtrar por región:
          </label>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {regiones.map((region) => (
              <option key={region} value={region}>
                {region.charAt(0).toUpperCase() + region.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Cultures Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {culturasFiltradas.map((cultura, index) => (
          <Card
            key={index}
            title={cultura.nombre}
            description={cultura.descripcion}
            image={cultura.imagen}
            metadata={{
              Región: cultura.region,
              Idioma: cultura.idioma,
              Población: cultura.poblacion,
            }}
          />
        ))}
      </div>

      {culturasFiltradas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">
            No se encontraron culturas para la región seleccionada.
          </p>
        </div>
      )}
    </div>
  );
}
