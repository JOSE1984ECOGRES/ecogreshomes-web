// =====================================================================
//  PROMOCIONES DE ECOGRES HOMES
//  Cada bloque { ... } es una promoción que aparece en la portada.
//  Para añadir una promoción nueva: copia un bloque, cambia los datos
//  y crea su carpeta en promociones/ (ver README.md).
//
//  estado: "En comercialización", "Próximamente" o "Vendida"
// =====================================================================

window.PROMOCIONES = [
  {
    id: "edificio-tucanito",
    nombre: "Edificio Tucanito",
    marca: "Edificio Tucanito by Ecogres Homes",
    zona: "Bajamar · San Cristóbal de La Laguna, Tenerife",
    direccion: "Carretera General Bajamar 123, Bajamar, La Laguna, Tenerife",
    pagina: "promociones/edificio-tucanito/",
    imagen: "promociones/edificio-tucanito/img/2_esquina_verja-despues.jpg",
    estado: "En comercialización",
    viviendas: 19,
    desde: 168000,               // precio más bajo, sin impuestos, trastero incluido
    tipos: "Estudios, 1 y 2 dormitorios y ático",
    extra: "A 100 m de la playa"
  }

  // , {
  //   id: "nueva-promocion",
  //   nombre: "Nombre del edificio",
  //   ...
  // }
];

// Muestra la tarjeta "Próximamente" al final de la lista (true / false)
window.MOSTRAR_PROXIMAMENTE = true;
