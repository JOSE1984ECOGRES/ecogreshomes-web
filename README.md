# Ecogres Homes · web

Web estática (HTML, CSS y JavaScript, sin instalar nada) de **Ecogres Homes**, con su primera promoción: **Edificio Tucanito by Ecogres Homes** (Carretera General Bajamar 123, Bajamar, La Laguna, Tenerife).

## Cómo verla

Haz doble clic en `index.html` y se abre en el navegador. No hace falta servidor.

En VS Code, si instalas la extensión **Live Server**, botón derecho sobre `index.html` → *Open with Live Server* y la web se recarga sola cada vez que guardas.

## Qué hay en cada carpeta

```
EcogresHomes-web/
├── index.html                      Portada de Ecogres Homes (promociones, quiénes somos, contacto)
├── css/estilos.css                 Colores, letras y diseño de todas las páginas
├── js/portada.js                   Pinta las tarjetas de promociones de la portada
├── js/promocion.js                 Pinta viviendas, planos, calculadora y formulario
├── datos/promociones.js            ← LISTA DE PROMOCIONES (editar aquí)
├── datos/viviendas-tucanito.js     ← VIVIENDAS, PRECIOS Y ESTADOS (editar aquí)
└── promociones/
    └── edificio-tucanito/
        ├── index.html              Página del Edificio Tucanito
        ├── img/                    Fotos antes/después, planos por planta y portadas de vídeo
        └── vid/                    Vídeos (3D, tour, reforma, Bajamar desde el aire)
```

## Las tareas más habituales

### Marcar una vivienda como reservada o vendida

Abre `datos/viviendas-tucanito.js`, busca la línea de la vivienda (por ejemplo `V07`) y cambia:

```js
estado: "disponible"
```

por `"reservado"` o `"vendido"`. Guarda (Cmd + S) y recarga el navegador.

- **Reservado**: sale una etiqueta naranja "Reservado".
- **Vendido**: la tarjeta se ve apagada, con el precio tachado, y desaparece del formulario.
- El contador ("X disponibles · Y reservadas · Z vendidas") y el precio "Desde" se recalculan solos.

### Cambiar un precio

En el mismo archivo cambia `precio: 214000`. Los precios van **sin impuestos y con el trastero incluido** (precio del business plan + 10.000 €). En la web siempre se muestran como "+ impuestos".

### Vivienda sin trastero

Pon `trastero: false` en esa vivienda. En su tarjeta saldrá "Sin trastero".

### Plazo de obra y fecha de entrega

Arriba del archivo `datos/viviendas-tucanito.js`:

```js
plazoObra: "8 meses",
entrega: "",          // por ejemplo "Diciembre de 2027"
```

Mientras `entrega` esté vacío, la web pone "Por confirmar".

### Enlazar un anuncio de Idealista

Pega el enlace en `idealista: "https://www.idealista.com/inmueble/..."` de esa vivienda. Aparece el botón "Ver anuncio en Idealista".

### Añadir una promoción nueva

1. Copia la carpeta `promociones/edificio-tucanito` con el nombre nuevo (por ejemplo `promociones/edificio-nuevo`) y cambia sus fotos, vídeos y textos.
2. Copia `datos/viviendas-tucanito.js` como `datos/viviendas-edificio-nuevo.js` y pon sus viviendas.
3. En el `index.html` de la carpeta nueva, cambia la línea `<script src="../../datos/viviendas-tucanito.js">` por el archivo nuevo.
4. En `datos/promociones.js` añade un bloque nuevo con el nombre, la foto y el enlace a la carpeta.

## Pendiente de confirmar

- Qué vivienda no tiene trastero (ahora todas lo tienen).
- Fecha de entrega (ahora "Por confirmar").
- Distancias en coche a Punta del Hidalgo, La Laguna y Santa Cruz (puestas como aproximadas: 5, 20 y 30 min).
- Dominio (por ejemplo `ecogreshomes.com`).

## Publicarla en internet

Al ser una web estática se puede subir tal cual a cualquier hosting: Netlify o Cloudflare Pages (gratis, se arrastra la carpeta), GitHub Pages, o el hosting que venga con el dominio. Cuando haya dominio, se apunta a ese hosting.

El formulario de contacto no necesita servidor: abre WhatsApp con el mensaje del cliente ya escrito para el 618 762 481.
