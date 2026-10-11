// Portada: pinta las tarjetas de promociones a partir de datos/promociones.js
(function () {
  const eur = n => n.toLocaleString("es-ES", { maximumFractionDigits: 0 }) + " €";
  const claseEstado = e => e === "Próximamente" ? "proximamente" : e === "Vendida" ? "vendida" : "";

  const tarjetas = (window.PROMOCIONES || []).map(p => `
    <a class="promo" href="${p.pagina}">
      <img src="${p.imagen}" alt="${p.nombre}">
      <div class="pi">
        <span class="estado ${claseEstado(p.estado)}">${p.estado}</span>
        <h3>${p.nombre}</h3>
        <p class="zona">${p.zona}</p>
        <div class="pdat"><span><b>${p.viviendas}</b> viviendas</span><span>${p.tipos}</span><span>${p.extra}</span></div>
        <p class="pp">Desde ${eur(p.desde)} <span class="nota">+ impuestos</span></p>
      </div>
    </a>`).join("");

  const proximamente = window.MOSTRAR_PROXIMAMENTE ? `
    <div class="promo prox">
      <p class="eyebrow">Próximamente</p>
      <h3>Nueva promoción</h3>
      <p>Estamos preparando nuestro próximo proyecto. Escríbenos para enterarte antes que nadie.</p>
      <a class="btn peq" href="#contacto" style="justify-self:center;margin-top:8px">Avisadme</a>
    </div>` : "";

  document.getElementById("promos").innerHTML = tarjetas + proximamente;
  document.getElementById("anio").textContent = new Date().getFullYear();
})();
