(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/data/juegos.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"id":1,"nombre":"Rayuela","pais":"Ecuador","descripcion":"Juego tradicional que consiste en saltar sobre cuadrados dibujados en el suelo, desarrollando coordinación, equilibrio y habilidades sociales. Es una actividad que fomenta la paciencia y la precisión.","imagen":"/images/rayuela-ecuador.jpg","valores":["coordinación","paciencia","respeto de turnos","perseverancia"],"materiales":"tiza o marcador, piedra pequeña o ficha","gammaUrl":"https://gamma.app/embed/nzxwqng9h2m7wn0"},{"id":2,"nombre":"Trompo","pais":"Ecuador","descripcion":"Juguete tradicional de madera que gira mediante un cordel. Su manejo requiere destreza y práctica, enseñando perseverancia y habilidades motoras finas. Es símbolo de la cultura popular ecuatoriana.","imagen":"/images/trompo-ecuador.jpg","valores":["destreza manual","perseverancia","concentración","tradición cultural"],"materiales":"trompo de madera, cordel o piola"},{"id":3,"nombre":"Saltar la Cuerda","pais":"Ecuador","descripcion":"Actividad física que puede realizarse individual o grupalmente. Desarrolla coordinación, resistencia y ritmo. Las variantes grupales fomentan la cooperación y el trabajo en equipo.","imagen":"/images/cuerda-ecuador.jpg","valores":["coordinación","trabajo en equipo","ritmo","resistencia física"],"materiales":"cuerda o soga de aproximadamente 3 metros"},{"id":4,"nombre":"Canicas","pais":"Ecuador","descripcion":"Juego de precisión donde los participantes intentan golpear canicas con otras. Desarrolla coordinación óculo-manual, concentración y estrategia. Promueve el intercambio social.","imagen":"/images/canicas-ecuador.jpg","valores":["precisión","concentración","intercambio social","estrategia"],"materiales":"canicas de vidrio o cerámica, superficie lisa"},{"id":5,"nombre":"Soga Japonesa (Nawa-tobi)","pais":"Japón","descripcion":"Tradición milenaria donde grupos grandes saltan una soga muy larga coordinadamente. Enseña sincronización, paciencia y trabajo en equipo. Es parte de festivales escolares japoneses.","imagen":"/images/soga-japonesa.jpg","valores":["sincronización","trabajo en equipo","paciencia","cooperación"],"materiales":"soga larga de 5-10 metros, espacio amplio"},{"id":6,"nombre":"Origami Móvil","pais":"Japón","descripcion":"Arte de crear figuras con papel que luego se usan en juegos. Desarrolla creatividad, concentración y habilidades motoras finas. Conecta arte con juego tradicional.","imagen":"/images/origami-japon.jpg","valores":["creatividad","concentración","paciencia","arte tradicional"],"materiales":"papel de colores, instrucciones de plegado"},{"id":7,"nombre":"Canicas Mexicanas (Chivas)","pais":"México","descripcion":"Variante mexicana del juego de canicas con reglas específicas y técnicas particulares. Se juega en círculos dibujados y desarrolla puntería y estrategia social.","imagen":"/images/canicas-mexico.jpg","valores":["puntería","estrategia","negociación","amistad"],"materiales":"canicas de colores, tiza para dibujar círculos"},{"id":8,"nombre":"Yoyo Tradicional","pais":"México","descripcion":"Juguete que sube y baja mediante una cuerda. Su dominio requiere práctica y coordinación. En México tiene variantes regionales y competencias tradicionales.","imagen":"/images/yoyo-mexico.jpg","valores":["coordinación","perseverancia","creatividad","competencia amistosa"],"materiales":"yoyo de madera o plástico con cuerda"},{"id":9,"nombre":"Pirinola","pais":"México","descripcion":"Juego de azar con una pirinola (trompo con caras numeradas o con órdenes). Enseña sobre probabilidad de manera divertida y fomenta la socialización grupal.","imagen":"/images/pirinola-mexico.jpg","valores":["socialización","probabilidad","diversión grupal","paciencia"],"materiales":"pirinola, fichas o dulces para apostar"},{"id":10,"nombre":"Cometas (Chichiguas)","pais":"Colombia","descripcion":"Construcción y vuelo de cometas artesanales. Actividad que combina creatividad, conocimiento del viento y paciencia. Es tradición en festivales colombianos.","imagen":"/images/cometas-colombia.jpg","valores":["creatividad","conocimiento natural","paciencia","tradición familiar"],"materiales":"papel, varillas de madera, hilo, cola o engrudo"},{"id":11,"nombre":"Ronda Infantil","pais":"Colombia","descripcion":"Círculo de niños que cantan y bailan juntos. Preserva la música tradicional, desarrolla ritmo y fortalece vínculos sociales. Incluye canciones como 'Arroz con Leche'.","imagen":"/images/ronda-colombia.jpg","valores":["música tradicional","ritmo","vínculos sociales","memoria cultural"],"materiales":"ninguno, solo voces y movimiento"},{"id":12,"nombre":"Peonza China (Diabolo)","pais":"China","descripcion":"Juguete tradicional que gira en una cuerda sostenida por dos palos. Requiere gran habilidad y concentración. Es parte de espectáculos culturales chinos.","imagen":"/images/diabolo-china.jpg","valores":["habilidad manual","concentración","espectacularidad","cultura milenaria"],"materiales":"diabolo, dos palos con cuerda"}]);}),
"[project]/src/components/Card.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Card({ title, description, image = null, metadata = {}, valores = [], tipo = "general", onButtonClick = null, hasGammaContent = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-48 bg-gradient-to-br from-game-primary/30 to-game-secondary/30 flex items-center justify-center",
                children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: image,
                    alt: title,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/components/Card.jsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-game-primary text-4xl mb-2 block",
                            children: tipo === "juego" ? "🎯" : "🌍"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Card.jsx",
                            lineNumber: 19,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600 text-sm",
                            children: "Imagen no disponible"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Card.jsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Card.jsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Card.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-gray-800 mb-3",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/Card.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 text-sm leading-relaxed mb-4",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/Card.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    Object.keys(metadata).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 mb-4",
                        children: Object.entries(metadata).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-500 font-medium",
                                        children: [
                                            key,
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Card.jsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-700",
                                        children: value
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Card.jsx",
                                        lineNumber: 39,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/src/components/Card.jsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Card.jsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    valores.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-semibold text-gray-700 mb-2",
                                children: "Valores que desarrolla:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Card.jsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: valores.map((valor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 bg-gradient-to-r from-game-primary/20 to-game-secondary/20 text-gray-700 text-xs rounded-full border border-game-primary/30",
                                        children: valor
                                    }, index, false, {
                                        fileName: "[project]/src/components/Card.jsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Card.jsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Card.jsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Card.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onButtonClick,
                    className: "w-full bg-gradient-to-r from-game-primary to-game-secondary text-white py-2 px-4 rounded-md hover:from-game-primary/80 hover:to-game-secondary/80 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg",
                    children: hasGammaContent && tipo === "juego" ? "🎮 Jugar Ahora" : tipo === "juego" ? "Conocer juego" : "Ver más detalles"
                }, void 0, false, {
                    fileName: "[project]/src/components/Card.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Card.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Card.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GameList.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$juegos$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/juegos.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Card.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function GameList({ filtro = "todos", limite = null }) {
    const juegosFiltrados = filtro === "todos" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$juegos$2e$json__$28$json$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$juegos$2e$json__$28$json$29$__["default"].filter((juego)=>juego.pais === filtro);
    const juegosAmostrar = limite ? juegosFiltrados.slice(0, limite) : juegosFiltrados;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: juegosAmostrar.map((juego)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: juego.nombre,
                description: juego.descripcion,
                image: juego.imagen,
                metadata: {
                    País: juego.pais,
                    Materiales: juego.materiales
                },
                valores: juego.valores,
                tipo: "juego"
            }, juego.id, false, {
                fileName: "[project]/src/components/GameList.jsx",
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/GameList.jsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = GameList;
var _c;
__turbopack_context__.k.register(_c, "GameList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/juegos/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Juegos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GameList.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$juegos$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/juegos.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Juegos() {
    _s();
    const [filtroActivo, setFiltroActivo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todos");
    const paises = [
        "todos",
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$juegos$2e$json__$28$json$29$__["default"].map((juego)=>juego.pais))
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-game-neutral via-pastel-mint-50 to-game-secondary",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-pastel-lavender-800 mb-4",
                            children: "🎮 Juegos Tradicionales"
                        }, void 0, false, {
                            fileName: "[project]/src/app/juegos/page.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-pastel-peach-700 mb-8 max-w-3xl mx-auto",
                            children: "Descubre la riqueza lúdica del Ecuador y del mundo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/juegos/page.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-24 h-1 bg-game-primary mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/app/juegos/page.jsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/juegos/page.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-game-primary/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium text-pastel-lavender-800 mb-2",
                                children: "Filtrar por país:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/juegos/page.jsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: filtroActivo,
                                onChange: (e)=>setFiltroActivo(e.target.value),
                                className: "px-4 py-2 border border-pastel-mint-300 rounded-md focus:outline-none focus:ring-2 focus:ring-game-primary bg-white",
                                children: paises.map((pais)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: pais,
                                        children: pais === "todos" ? "Todos los países" : pais
                                    }, pais, false, {
                                        fileName: "[project]/src/app/juegos/page.jsx",
                                        lineNumber: 38,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/juegos/page.jsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/juegos/page.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/juegos/page.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-game-accent/20 p-6 rounded-lg border border-game-accent/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-pastel-lavender-800 mb-3",
                                children: "💫 Cada cultura enseña valores a través del juego"
                            }, void 0, false, {
                                fileName: "[project]/src/app/juegos/page.jsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700",
                                children: "Los juegos tradicionales son más que entretenimiento: son herramientas pedagógicas que transmiten valores como la cooperación, el respeto, la paciencia y la inclusión. Cada juego lleva consigo la sabiduría de generaciones."
                            }, void 0, false, {
                                fileName: "[project]/src/app/juegos/page.jsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/juegos/page.jsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/juegos/page.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GameList$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    filtro: filtroActivo
                }, void 0, false, {
                    fileName: "[project]/src/app/juegos/page.jsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                filtroActivo !== "todos" && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$juegos$2e$json__$28$json$29$__["default"].filter((juego)=>juego.pais === filtroActivo).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "No se encontraron juegos para el país seleccionado."
                    }, void 0, false, {
                        fileName: "[project]/src/app/juegos/page.jsx",
                        lineNumber: 68,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/juegos/page.jsx",
                    lineNumber: 67,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-3xl mx-auto border border-game-primary/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold text-pastel-lavender-800 mb-4",
                                children: "🌟 Respetar la diversidad cultural empieza en la infancia"
                            }, void 0, false, {
                                fileName: "[project]/src/app/juegos/page.jsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 leading-relaxed",
                                children: "Cuando los niños aprenden y practican juegos de diferentes culturas, desarrollan empatía, respeto y apreciación por la diversidad. Cada juego es una oportunidad de construir puentes entre culturas."
                            }, void 0, false, {
                                fileName: "[project]/src/app/juegos/page.jsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/juegos/page.jsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/juegos/page.jsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/juegos/page.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/juegos/page.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(Juegos, "DR9GvYyCc8BEuYTwGgOobZEMFT8=");
_c = Juegos;
var _c;
__turbopack_context__.k.register(_c, "Juegos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b8d32ab8._.js.map