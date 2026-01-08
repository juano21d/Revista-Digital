"use client";

import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Contacto</h1>
          <p className="text-xl text-amber-700 mb-8">
            Conecta con nuestro equipo y únete a la comunidad intercultural
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6">
              Envíanos un mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="colaboracion">Colaboración</option>
                  <option value="recursos">Compartir recursos</option>
                  <option value="consulta">Consulta general</option>
                  <option value="sugerencia">Sugerencia</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 px-6 rounded-md hover:bg-amber-600 transition-colors font-medium"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Team Info */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-amber-800 mb-6">
                Nuestro Equipo
              </h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-600 text-xl">👩‍🏫</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-800">
                      Dra. María González
                    </h3>
                    <p className="text-gray-600">Directora Editorial</p>
                    <p className="text-sm text-gray-500">
                      Especialista en Educación Intercultural
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-600 text-xl">👨‍💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-800">
                      Prof. Carlos Ruiz
                    </h3>
                    <p className="text-gray-600">Coordinador de Contenidos</p>
                    <p className="text-sm text-gray-500">
                      Antropólogo Educativo
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-amber-600 text-xl">👩‍💻</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-800">
                      Ana Martínez
                    </h3>
                    <p className="text-gray-600">Desarrolladora Web</p>
                    <p className="text-sm text-gray-500">Diseño y Tecnología</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-4">
                Únete a nuestra comunidad
              </h3>
              <p className="text-gray-700 mb-4">
                ¿Eres educador, investigador o simplemente alguien apasionado
                por la educación intercultural? ¡Nos encantaría conocerte!
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Comparte tus experiencias y recursos</li>
                <li>• Participa en nuestros webinarios</li>
                <li>• Contribuye con artículos y materiales</li>
                <li>• Conecta con otros educadores</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
