"use client";

import juegosData from "@/data/juegos.json";
import { useState } from "react";
import Card from "./Card";
import GammaModal from "./GammaModal";

export default function GameList({ filtro = "todos", limite = null }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const juegosFiltrados =
    filtro === "todos"
      ? juegosData
      : juegosData.filter((juego) => juego.pais === filtro);

  const juegosAmostrar = limite
    ? juegosFiltrados.slice(0, limite)
    : juegosFiltrados;

  const handleGameClick = (juego) => {
    if (juego.gammaUrl) {
      setSelectedGame(juego);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedGame(null);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {juegosAmostrar.map((juego) => (
          <Card
            key={juego.id}
            title={juego.nombre}
            description={juego.descripcion}
            image={juego.imagen}
            metadata={{
              País: juego.pais,
              Materiales: juego.materiales,
            }}
            valores={juego.valores}
            tipo="juego"
            hasGammaContent={!!juego.gammaUrl}
            onButtonClick={() => handleGameClick(juego)}
          />
        ))}
      </div>

      {selectedGame && (
        <GammaModal
          isOpen={modalOpen}
          onClose={closeModal}
          gammaUrl={selectedGame.gammaUrl}
          title={selectedGame.nombre}
        />
      )}
    </>
  );
}
