# 🪶 Juegos Tradicionales del Ecuador y del Mundo

Una plataforma educativa digital sobre juegos tradicionales y educación intercultural en la primera infancia, desarrollada para la Universidad Católica de Cuenca.

## 🌍 Descripción

Este proyecto es una revista digital educativa que tiene como objetivo promover la educación intercultural a través de juegos tradicionales del Ecuador y el mundo. La plataforma está diseñada para fortalecer el diálogo intercultural en la primera infancia, proporcionando herramientas pedagógicas que integran diversidad cultural, valores y tradiciones lúdicas.

## ✨ Características Principales

- **🎮 Galería de Juegos Tradicionales**: Colección de 12 juegos de Ecuador, Japón, México, Colombia y China
- **📚 Marco Pedagógico**: Fundamentos teóricos de la educación intercultural a través del juego
- **🎥 Multimedia Educativa**: Videos y recursos audiovisuales con enfoque pedagógico
- **🌟 Valores Educativos**: Cada juego incluye los valores que desarrolla (cooperación, respeto, paciencia, etc.)
- **🎯 Filtros por País**: Navegación organizada por origen cultural de los juegos
- **📱 Diseño Responsive**: Optimizado para dispositivos móviles y de escritorio con colores pasteles
- **🎨 Interfaz Accesible**: Diseño inclusivo con paleta de colores pasteles y navegación intuitiva

## 🛠️ Tecnologías

- **Framework**: Next.js 14 con App Router
- **Frontend**: React 18
- **Lenguaje**: JavaScript (ES6+)
- **Estilos**: Tailwind CSS
- **Runtime**: Node.js
- **Herramientas de construcción**: PostCSS, Autoprefixer

## 📁 Estructura del Proyecto

```
revista-intercultural/
├── src/
│   ├── app/                    # Páginas principales (App Router)
│   │   ├── layout.jsx          # Layout principal con Navbar y Footer
│   │   ├── page.jsx            # Página de inicio con juegos destacados
│   │   ├── juegos/
│   │   │   └── page.jsx        # Galería de juegos tradicionales
│   │   ├── galeria/
│   │   │   └── page.jsx        # Multimedia educativa (videos e imágenes)
│   │   ├── educacion/
│   │   │   └── page.jsx        # Marco pedagógico intercultural
│   │   ├── creditos/
│   │   │   └── page.jsx        # Créditos académicos y referencias
│   │   └── globals.css         # Estilos globales con paleta pastel
│   ├── components/             # Componentes reutilizables
│   │   ├── Navbar.jsx          # Navegación principal (tema juegos)
│   │   ├── Footer.jsx          # Información universitaria
│   │   ├── Card.jsx            # Tarjetas para juegos con valores
│   │   ├── GameList.jsx        # Lista filtrable de juegos
│   │   └── VideoPlayer.jsx     # Reproductor de videos educativos
│   ├── data/                   # Contenido educativo en JSON
│   │   ├── juegos.json         # 12 juegos tradicionales con metadatos
│   │   └── videos.json         # Videos educativos con información pedagógica
│   │   ├── cuentos.json        # Cuentos tradicionales
│   │   └── entrevistas.json    # Entrevistas con educadores
│   └── styles/                 # Estilos adicionales (si es necesario)
├── public/                     # Archivos estáticos
├── .github/                    # Configuración de GitHub
│   └── copilot-instructions.md # Instrucciones para GitHub Copilot
├── package.json                # Dependencias y scripts
├── next.config.js              # Configuración de Next.js
├── tailwind.config.js          # Configuración de Tailwind CSS
├── postcss.config.js           # Configuración de PostCSS
└── README.md                   # Este archivo
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 18.0 o superior
- npm o yarn

### Pasos para la instalación

1. **Clona o descarga el proyecto**

   ```bash
   git clone <url-del-repositorio>
   cd revista-intercultural
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Abre tu navegador**

   Ve a [http://localhost:3000](http://localhost:3000) para ver la aplicación.

### Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor en modo producción
- `npm run lint` - Ejecuta el linter para verificar el código

## 📝 Gestión de Contenido

### Agregar nuevas culturas

Edita el archivo `src/data/culturas.json` y agrega un nuevo objeto con la siguiente estructura:

```json
{
  "nombre": "Nombre de la Cultura",
  "descripcion": "Descripción detallada...",
  "imagen": "/images/cultura-ejemplo.jpg",
  "region": "region_geografica",
  "idioma": "Idiomas hablados",
  "poblacion": "Número aproximado de habitantes",
  "costumbres": ["Costumbre 1", "Costumbre 2"]
}
```

### Agregar nuevos cuentos

Edita el archivo `src/data/cuentos.json`:

```json
{
  "titulo": "Título del Cuento",
  "origen": "Cultura de Origen",
  "categoria": "Tipo de relato",
  "edad_recomendada": "Rango de edad",
  "resumen": "Resumen breve...",
  "moraleja": "Enseñanza principal",
  "contenido": "Historia completa..."
}
```

### Agregar nuevas entrevistas

Edita el archivo `src/data/entrevistas.json`:

```json
{
  "nombre": "Nombre del Entrevistado",
  "cargo": "Posición o cargo",
  "institucion": "Institución",
  "pais": "País",
  "fecha_entrevista": "YYYY-MM-DD",
  "tema": "Tema principal",
  "extracto": "Cita destacada...",
  "puntos_clave": ["Punto 1", "Punto 2"],
  "recursos_recomendados": ["Recurso 1", "Recurso 2"]
}
```

## 🎨 Personalización de Estilos

El proyecto utiliza Tailwind CSS con una paleta de colores cálidos personalizada:

```javascript
// tailwind.config.js
colors: {
  'warm-50': '#fffbf0',
  'warm-100': '#fef7e0',
  'warm-200': '#fdecc8',
  'warm-300': '#fbd9a5',
  'warm-400': '#f8c572',
  'warm-500': '#f5a623',  // Color principal
  'warm-600': '#e6941a',
  'warm-700': '#bf7c15',
  'warm-800': '#99641a',
  'warm-900': '#7d5318',
}
```

Para modificar los colores, edita el archivo `tailwind.config.js`.

## 🚀 Despliegue

### Despliegue en Vercel (Recomendado)

1. **Sube tu proyecto a GitHub**

2. **Conecta con Vercel**

   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu cuenta de GitHub
   - Selecciona el repositorio del proyecto

3. **Configuración automática**

   - Vercel detectará automáticamente que es un proyecto Next.js
   - No necesita configuración adicional

4. **Deploy**
   - El deploy se realizará automáticamente
   - Obtendrás una URL pública para tu aplicación

### Otras opciones de despliegue

- **Netlify**: Compatible con Next.js
- **Heroku**: Requiere configuración adicional
- **AWS Amplify**: Soporte nativo para Next.js
- **Servidor propio**: Usar `npm run build` y `npm start`

### Variables de entorno (si las necesitas)

Crea un archivo `.env.local` para variables locales:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir:

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre** un Pull Request

### Ideas para contribuir

- Agregar más culturas y tradiciones
- Mejorar la accesibilidad
- Implementar sistema de búsqueda
- Agregar más recursos multimedia
- Traducir contenido a otros idiomas
- Optimizar rendimiento

## 📋 To-Do / Roadmap

- [ ] Sistema de búsqueda y filtros avanzados
- [ ] Sección de juegos educativos interculturales
- [ ] Sistema de comentarios y valoraciones
- [ ] Versión multiidioma
- [ ] App móvil nativa
- [ ] Integración con redes sociales
- [ ] Sistema de usuario y favoritos
- [ ] Panel de administración para contenido

## 🐛 Solución de Problemas

### Problemas comunes

**Error de dependencias**

```bash
npm install --legacy-peer-deps
```

**Error de Tailwind CSS**

```bash
npm run build
```

**Puerto ocupado**

```bash
npm run dev -- -p 3001
```

### Logs útiles

Revisa la consola del navegador y los logs del terminal para identificar errores específicos.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 👥 Autores

- **Equipo de Desarrollo** - _Desarrollo inicial_ - [Tu Nombre](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- Comunidades indígenas y culturales por compartir su sabiduría
- Educadores interculturales por su dedicación
- Desarrolladores de código abierto por las herramientas utilizadas
- Familias y niños que inspiraron este proyecto

## 📞 Contacto

- **Email**: info@revistaintercultural.edu
- **Website**: [www.revistaintercultural.edu](https://www.revistaintercultural.edu)
- **GitHub**: [github.com/revista-intercultural](https://github.com/revista-intercultural)

---

## 🌟 ¿Te gustó el proyecto?

Si este proyecto te fue útil, no olvides darle una ⭐ en GitHub y compartirlo con otros educadores interesados en la diversidad cultural.

**¡Juntos construyemos un mundo más inclusivo y respetuoso de la diversidad cultural!** 🌍✨
