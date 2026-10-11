// =====================================================================
//  VIVIENDAS DEL EDIFICIO TUCANITO
//  Este es el archivo que tienes que tocar para cambiar precios o estados.
//
//  estado:  "disponible"  ·  "reservado"  ·  "vendido"
//  precio:  en euros, SIN impuestos y con el trastero ya incluido
//           (precio del business plan + 10.000 € de trastero)
//  m2:      superficie construida según proyecto
//  terraza: m² de terraza (0 si no tiene)
//  trastero: true / false
//  idealista: enlace al anuncio (o "" si no está publicado)
//
//  Guarda el archivo (Cmd + S) y recarga la web en el navegador.
// =====================================================================

window.DATOS_PROMOCION = {
  nombre: "Edificio Tucanito",
  plazoObra: "8 meses",
  entrega: "",                    // PENDIENTE: fecha de entrega, por ejemplo "Diciembre de 2027"
  certificado: "A+",
  telefono: "618 762 481",
  whatsapp: "34618762481",
  email: "administracion@ecogresmad.com"
};

window.VIVIENDAS = [
  { id: "V01", planta: "baja",    tipo: "Estudio",       m2: 36.11, terraza: 29.43,  precio: 170000, estado: "disponible", trastero: true, idealista: "", descripcion: "Salón-cocina-dormitorio, baño y dos terrazas." },
  { id: "V02", planta: "baja",    tipo: "Estudio",       m2: 42.40, terraza: 21.35,  precio: 187000, estado: "disponible", trastero: true, idealista: "", descripcion: "Salón-cocina-dormitorio, baño, solana y dos terrazas." },
  { id: "V03", planta: "baja",    tipo: "2 dormitorios", m2: 58.57, terraza: 14.24,  precio: 243000, estado: "disponible", trastero: true, idealista: "", descripcion: "Salón-comedor-cocina, dos dormitorios con armario y terraza." },
  { id: "V04", planta: "baja",    tipo: "Estudio",       m2: 39.28, terraza: 11.06,  precio: 168000, estado: "disponible", trastero: true, idealista: "https://www.idealista.com/inmueble/112791847/", descripcion: "Salón-cocina-dormitorio, baño, solana y terraza." },
  { id: "V05", planta: "baja",    tipo: "1 dormitorio",  m2: 75.27, terraza: 13.13,  precio: 306000, estado: "disponible", trastero: true, idealista: "", descripcion: "Salón-comedor-cocina, dormitorio con vestidor, dos baños, trastero interior y dos terrazas." },
  { id: "V06", planta: "primera", tipo: "1 dormitorio",  m2: 44.46, terraza: 5.00,   precio: 192000, estado: "disponible", trastero: true, idealista: "", descripcion: "Hall, salón-cocina, dormitorio con armario, baño y terraza." },
  { id: "V07", planta: "primera", tipo: "1 dormitorio",  m2: 50.00, terraza: 5.00,   precio: 214000, estado: "disponible", trastero: true, idealista: "", descripcion: "Hall, salón-cocina, dormitorio con armario, baño y terraza." },
  { id: "V08", planta: "primera", tipo: "1 dormitorio",  m2: 42.64, terraza: 0,      precio: 181000, estado: "disponible", trastero: true, idealista: "", descripcion: "Salón-comedor-cocina, dormitorio con armario y baño." },
  { id: "V09", planta: "primera", tipo: "2 dormitorios", m2: 59.09, terraza: 0,      precio: 246000, estado: "disponible", trastero: true, idealista: "", descripcion: "Hall, salón-cocina, dos dormitorios con armario y baño." },
  { id: "V10", planta: "primera", tipo: "2 dormitorios", m2: 66.27, terraza: 0,      precio: 275000, estado: "disponible", trastero: true, idealista: "", descripcion: "Salón-comedor-cocina, vestidor, dos dormitorios con armario y baño." },
  { id: "V11", planta: "segunda", tipo: "1 dormitorio",  m2: 44.46, terraza: 5.00,   precio: 195000, estado: "disponible", trastero: true, idealista: "", descripcion: "Hall, salón-cocina, dormitorio con armario, baño y terraza." },
  { id: "V12", planta: "segunda", tipo: "1 dormitorio",  m2: 50.10, terraza: 5.06,   precio: 219000, estado: "disponible", trastero: true, idealista: "", descripcion: "Hall, salón-cocina, dormitorio con armario, baño y terraza." },
  { id: "V13", planta: "segunda", tipo: "2 dormitorios", m2: 55.67, terraza: 0,      precio: 237000, estado: "disponible", trastero: true, idealista: "", descripcion: "Salón-comedor-cocina, dos dormitorios y baño." },
  { id: "V14", planta: "segunda", tipo: "2 dormitorios", m2: 59.43, terraza: 52.23,  precio: 295000, estado: "disponible", trastero: true, idealista: "", descripcion: "Salón-comedor-cocina, dos dormitorios con armario, baño y gran terraza de 52 m²." },
  { id: "V15", planta: "tercera", tipo: "Estudio",       m2: 37.72, terraza: 11.23,  precio: 176000, estado: "disponible", trastero: true, idealista: "", descripcion: "Hall, salón-cocina-dormitorio, baño y terraza." },
  { id: "V16", planta: "tercera", tipo: "Estudio",       m2: 39.41, terraza: 11.39,  precio: 183000, estado: "disponible", trastero: true, idealista: "", descripcion: "Hall, salón-cocina-dormitorio, baño y terraza." },
  { id: "V17", planta: "tercera", tipo: "1 dormitorio",  m2: 51.44, terraza: 10.87,  precio: 233000, estado: "disponible", trastero: true, idealista: "", descripcion: "Salón-comedor-cocina, dormitorio con armario, baño y terraza." },
  { id: "V18", planta: "tercera", tipo: "1 dormitorio",  m2: 41.66, terraza: 10.73,  precio: 192000, estado: "disponible", trastero: true, idealista: "", descripcion: "Hall, salón-comedor-cocina, dormitorio con armario, baño y terraza." },
  { id: "V19", planta: "cuarta",  tipo: "2 dormitorios", m2: 54.19, terraza: 120.79, precio: 348000, estado: "disponible", trastero: true, idealista: "", descripcion: "Ático: salón-comedor-cocina, dos dormitorios con armario, baño y 121 m² de terrazas.", atico: true }
];
