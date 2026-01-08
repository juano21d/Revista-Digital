(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Card.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Card({ title, description, image = null, metadata = {}, valores = [], tipo = 'general' }) {
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
                    lineNumber: 7,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-game-primary text-4xl mb-2 block",
                            children: tipo === 'juego' ? '🎯' : '🌍'
                        }, void 0, false, {
                            fileName: "[project]/src/components/Card.jsx",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-600 text-sm",
                            children: "Imagen no disponible"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Card.jsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Card.jsx",
                    lineNumber: 9,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Card.jsx",
                lineNumber: 5,
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
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 text-sm leading-relaxed mb-4",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/Card.jsx",
                        lineNumber: 20,
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
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-700",
                                        children: value
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Card.jsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/src/components/Card.jsx",
                                lineNumber: 28,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Card.jsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    valores.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-semibold text-gray-700 mb-2",
                                children: "Valores que desarrolla:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Card.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: valores.map((valor, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 py-1 bg-gradient-to-r from-game-primary/20 to-game-secondary/20 text-gray-700 text-xs rounded-full border border-game-primary/30",
                                        children: valor
                                    }, index, false, {
                                        fileName: "[project]/src/components/Card.jsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Card.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Card.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Card.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-full bg-gradient-to-r from-game-primary to-game-secondary text-white py-2 px-4 rounded-md hover:from-game-primary/80 hover:to-game-secondary/80 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg",
                    children: tipo === 'juego' ? 'Conocer juego' : 'Ver más detalles'
                }, void 0, false, {
                    fileName: "[project]/src/components/Card.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Card.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Card.jsx",
        lineNumber: 3,
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
"[project]/src/data/culturas.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v([{"nombre":"Cultura Andina","descripcion":"La cultura andina abarca las tradiciones y costumbres de los pueblos que habitan la cordillera de los Andes. Se caracteriza por su profunda conexión con la naturaleza, especialmente con la Pachamama (Madre Tierra), y por la importancia de la reciprocidad en las relaciones sociales.","imagen":"/images/cultura-andina.jpg","region":"sudamerica","idioma":"Quechua, Aymara, Español","poblacion":"30 millones aproximadamente","costumbres":["Inti Raymi - Festival del Sol","Ceremonia a la Pachamama","Intercambio de productos (trueque)","Minga o trabajo comunitario"]},{"nombre":"Cultura Maya","descripcion":"La civilización maya fue una de las más avanzadas de Mesoamérica, conocida por sus logros en matemáticas, astronomía, escritura y arquitectura. Sus descendientes mantienen muchas tradiciones ancestrales en Guatemala, México, Belice y Honduras.","imagen":"/images/cultura-maya.jpg","region":"centroamerica","idioma":"K'iche', Kaqchikel, Q'eqchi', Español","poblacion":"7 millones aproximadamente","costumbres":["Ceremonia del fuego sagrado","Calendario maya ceremonial","Tejidos tradicionales","Día de los Muertos"]},{"nombre":"Cultura Inuit","descripcion":"Los inuit son los pueblos indígenas del Ártico, adaptados a vivir en uno de los ambientes más extremos del planeta. Su cultura se basa en la caza, la pesca y una profunda comprensión del ecosistema ártico.","imagen":"/images/cultura-inuit.jpg","region":"norteamerica","idioma":"Inuktitut, Inglés, Danés","poblacion":"150,000 aproximadamente","costumbres":["Construcción de iglús","Caza de focas y caribúes","Narración de leyendas","Tallado en hueso y marfil"]},{"nombre":"Cultura Maasai","descripcion":"Los maasai son un pueblo seminómada que habita en Kenia y Tanzania. Son conocidos por su estilo de vida pastoral, sus coloridos vestidos tradicionales y sus rituales de iniciación.","imagen":"/images/cultura-maasai.jpg","region":"africa","idioma":"Maa, Suahili, Inglés","poblacion":"1 millón aproximadamente","costumbres":["Pastoreo de ganado","Danzas guerreras tradicionales","Ceremonias de iniciación","Construcción de bomas (poblados)"]},{"nombre":"Cultura Japonesa","descripción":"La cultura japonesa combina tradiciones milenarias con modernidad tecnológica. Se caracteriza por valores como el respeto, la armonía, la disciplina y la búsqueda de la perfección en todas las actividades.","imagen":"/images/cultura-japonesa.jpg","region":"asia","idioma":"Japonés","poblacion":"125 millones aproximadamente","costumbres":["Ceremonia del té","Festival de los cerezos en flor","Artes marciales tradicionales","Respeto a los ancestros"]},{"nombre":"Cultura Aborigen Australiana","descripción":"Los aborígenes australianos representan la cultura continua más antigua del mundo, con más de 65,000 años de historia. Su conexión espiritual con la tierra y sus tradiciones orales son fundamentales en su cultura.","imagen":"/images/cultura-aborigen.jpg","region":"oceania","idioma":"Más de 250 lenguas aborígenes","poblacion":"800,000 aproximadamente","costumbres":["Dreamtime (Tiempo del Sueño)","Arte rupestre y corporal","Didgeridoo y cantos tradicionales","Ceremonias de iniciación"]}]);}),
"[project]/src/app/culturas/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Culturas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$culturas$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/culturas.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Culturas() {
    _s();
    const [selectedRegion, setSelectedRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todas");
    const regiones = [
        "todas",
        ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$culturas$2e$json__$28$json$29$__["default"].map((cultura)=>cultura.region))
    ];
    const culturasFiltradas = selectedRegion === "todas" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$culturas$2e$json__$28$json$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$culturas$2e$json__$28$json$29$__["default"].filter((cultura)=>cultura.region === selectedRegion);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-amber-800 mb-4",
                        children: "Culturas del Mundo"
                    }, void 0, false, {
                        fileName: "[project]/src/app/culturas/page.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-amber-700 mb-8 max-w-3xl mx-auto",
                        children: "Explora la riqueza cultural de diferentes pueblos y comunidades"
                    }, void 0, false, {
                        fileName: "[project]/src/app/culturas/page.jsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-24 h-1 bg-amber-500 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/culturas/page.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/culturas/page.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-lg p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block text-sm font-medium text-amber-800 mb-2",
                            children: "Filtrar por región:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/culturas/page.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: selectedRegion,
                            onChange: (e)=>setSelectedRegion(e.target.value),
                            className: "px-4 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500",
                            children: regiones.map((region)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: region,
                                    children: region.charAt(0).toUpperCase() + region.slice(1)
                                }, region, false, {
                                    fileName: "[project]/src/app/culturas/page.jsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/culturas/page.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/culturas/page.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/culturas/page.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: culturasFiltradas.map((cultura, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: cultura.nombre,
                        description: cultura.descripcion,
                        image: cultura.imagen,
                        metadata: {
                            Región: cultura.region,
                            Idioma: cultura.idioma,
                            Población: cultura.poblacion
                        }
                    }, index, false, {
                        fileName: "[project]/src/app/culturas/page.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/culturas/page.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            culturasFiltradas.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "No se encontraron culturas para la región seleccionada."
                }, void 0, false, {
                    fileName: "[project]/src/app/culturas/page.jsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/culturas/page.jsx",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/culturas/page.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Culturas, "SlbfeSuD5jcXZV4DkR1RL3KIcrY=");
_c = Culturas;
var _c;
__turbopack_context__.k.register(_c, "Culturas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_329519d1._.js.map