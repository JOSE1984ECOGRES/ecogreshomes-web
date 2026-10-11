// Página de promoción: pinta las viviendas a partir de datos/viviendas-tucanito.js
(function () {
  const VIV = window.VIVIENDAS || [];
  const D = window.DATOS_PROMOCION || {};
  const WA = D.whatsapp || "34618762481";

  const PL = { baja: "Planta baja", primera: "Planta primera", segunda: "Planta segunda", tercera: "Planta tercera", cuarta: "Planta cuarta" };
  const ORD = { baja: 0, primera: 1, segunda: 2, tercera: 3, cuarta: 4 };
  const EST = { disponible: "Disponible", reservado: "Reservado", vendido: "Vendido" };
  const eur = n => n.toLocaleString("es-ES", { maximumFractionDigits: 0 }) + " €";
  const m2 = n => n.toLocaleString("es-ES", { maximumFractionDigits: 0 }) + " m²";
  const est = v => EST[v.estado] ? v.estado : "disponible";
  const titulo = v => v.atico ? "Ático 2 dormitorios" : v.tipo;
  function cuota(p, ent = .2, anos = 30, tipo = 3) {
    const P = p * (1 - ent), r = tipo / 1200, n = anos * 12;
    return r ? P * r / (1 - Math.pow(1 + r, -n)) : P / n;
  }

  // ---- datos generales (desde, entrega, plazo...) ----
  const disponibles = VIV.filter(v => est(v) === "disponible");
  const desde = Math.min(...(disponibles.length ? disponibles : VIV).map(v => v.precio));
  const pon = (sel, txt) => document.querySelectorAll(sel).forEach(el => el.textContent = txt);
  pon("[data-desde]", eur(desde));
  pon("[data-certificado]", D.certificado || "A+");
  if (D.plazoObra) pon("[data-plazo]", D.plazoObra);
  pon("[data-entrega]", D.entrega || "Por confirmar");
  pon("[data-con-terraza]", VIV.filter(v => v.terraza > 0).length);

  // ---- tarjetas de viviendas ----
  const minPr = {};
  VIV.forEach(v => { const k = v.atico ? "atico" : v.tipo; minPr[k] = Math.min(minPr[k] ?? 1e9, v.precio); });
  let filtro = "todas";

  function pinta() {
    const l = VIV.filter(v => filtro === "todas" || (filtro === "disp" ? est(v) === "disponible" : filtro === "terraza" ? v.terraza > 0 : v.tipo === filtro));
    const o = document.getElementById("orden").value;
    l.sort((a, b) => o === "precio" ? a.precio - b.precio : o === "m2" ? b.m2 - a.m2 : o === "terraza" ? b.terraza - a.terraza : ORD[a.planta] - ORD[b.planta] || a.id.localeCompare(b.id));
    const n = e => VIV.filter(v => est(v) === e).length;
    document.getElementById("cuenta").textContent = `Mostrando ${l.length} de ${VIV.length} · ${n("disponible")} disponibles` + (n("reservado") ? ` · ${n("reservado")} reservadas` : "") + (n("vendido") ? ` · ${n("vendido")} vendidas` : "");
    document.getElementById("unidades").innerHTML = l.map(v => {
      const e = est(v);
      const etq = e !== "disponible" ? "" : v.atico ? "Ático" : v.terraza >= 40 ? "Gran terraza" : v.precio === minPr[v.tipo] ? "Mejor precio" : "";
      const badge = e === "disponible" ? (etq ? `<span class="etq">${etq}</span>` : "") : `<span class="est ${e}">${EST[e]}</span>`;
      return `<article class="uni${etq ? " top" : ""} ${e}">
        <div class="fila1"><span class="id">${v.id} · ${PL[v.planta]}</span>${badge}</div>
        <h3>${titulo(v)}</h3>
        <div class="specs"><span><b>${m2(v.m2)}</b> construidos</span><span>${v.terraza ? `<b>${m2(v.terraza)}</b> terraza` : "Sin terraza"}</span><span>${v.trastero === false ? "Sin trastero" : "Trastero"}</span></div>
        <div><div class="precio">${eur(v.precio)} <span class="nota">+ impuestos</span></div><div class="cuota">Desde ${eur(Math.round(cuota(v.precio)))}/mes*</div></div>
        <div class="acc"><button class="btn peq" type="button" data-plano="${v.id}">Ver plano</button><a class="btn lleno peq" href="#contacto" data-quiero="${v.id}">Me interesa</a></div>
        ${v.idealista ? `<a class="ide" href="${v.idealista}" target="_blank" rel="noopener">Ver anuncio en Idealista</a>` : ""}
      </article>`;
    }).join("");
  }
  document.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
    filtro = c.dataset.f;
    document.querySelectorAll(".chip").forEach(x => x.setAttribute("aria-pressed", x === c));
    pinta();
  }));
  document.getElementById("orden").addEventListener("change", pinta);

  // ---- ficha con plano ----
  const ficha = document.getElementById("ficha");
  let ultimoFoco = null;
  function abre(id) {
    const v = VIV.find(x => x.id === id); if (!v) return;
    ultimoFoco = document.activeElement;
    document.getElementById("fPlanta").textContent = v.id + " · " + PL[v.planta] + (est(v) !== "disponible" ? " · " + EST[est(v)] : "");
    document.getElementById("fTit").textContent = titulo(v);
    document.getElementById("fM2").textContent = m2(v.m2);
    document.getElementById("fTe").textContent = v.terraza ? m2(v.terraza) : "—";
    document.getElementById("fPr").textContent = eur(v.precio);
    document.getElementById("fCu").textContent = eur(Math.round(cuota(v.precio))) + "/mes";
    document.getElementById("fDesc").textContent = v.descripcion + (v.trastero === false ? "" : " Trastero incluido en el sótano.") + " Certificado energético " + (D.certificado || "A+") + ".";
    const img = document.getElementById("fImg");
    img.src = "img/plano-" + v.planta + ".jpg";
    img.alt = "Plano de la " + PL[v.planta].toLowerCase() + " con la vivienda " + v.id;
    document.getElementById("fNota").textContent = "Plano de la " + PL[v.planta].toLowerCase() + ". Busca la etiqueta " + v.id.replace("V", "V.") + " junto a la puerta de entrada. Desliza para ver el plano completo.";
    document.getElementById("fQuiero").dataset.quiero = v.id;
    const fi = document.getElementById("fIde"); fi.hidden = !v.idealista; if (v.idealista) fi.href = v.idealista;
    ficha.hidden = false; document.getElementById("fCerrar").focus();
  }
  function cierra() { ficha.hidden = true; if (ultimoFoco) ultimoFoco.focus(); }
  document.addEventListener("click", e => {
    const p = e.target.closest("[data-plano]"); if (p) abre(p.dataset.plano);
    const q = e.target.closest("[data-quiero]"); if (q) { document.getElementById("vivSel").value = q.dataset.quiero; if (!ficha.hidden) ficha.hidden = true; }
  });
  document.getElementById("fCerrar").addEventListener("click", cierra);
  ficha.addEventListener("click", e => { if (e.target === ficha) cierra(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !ficha.hidden) cierra(); });

  // ---- desplegables y calculadora ----
  const vs = document.getElementById("vivSel"), cv = document.getElementById("cViv");
  VIV.forEach(v => {
    const t = `${v.id} · ${v.atico ? "Ático" : v.tipo} · ${eur(v.precio)}`;
    if (est(v) !== "vendido") vs.add(new Option(t, v.id));
    cv.add(new Option(t, v.precio));
  });
  cv.value = String(desde);
  function calc() {
    const p = +cv.value, e = +document.getElementById("cEnt").value / 100, a = +document.getElementById("cAnos").value, t = +document.getElementById("cTipo").value || 0;
    document.getElementById("cEntV").textContent = Math.round(e * 100) + " % (" + eur(p * e) + ")";
    document.getElementById("cAnosV").textContent = a + " años";
    document.getElementById("cCuota").textContent = eur(Math.round(cuota(p, e, a, t)));
    document.getElementById("cPrecio").textContent = eur(p);
    document.getElementById("cEntrada").textContent = eur(p * e);
    document.getElementById("cPrest").textContent = eur(p * (1 - e));
  }
  ["cViv", "cEnt", "cAnos", "cTipo"].forEach(id => document.getElementById(id).addEventListener("input", calc));
  pinta(); calc();

  // ---- antes / después ----
  const comp = document.getElementById("comp"), slider = document.getElementById("slider");
  slider.addEventListener("input", () => comp.style.setProperty("--pos", slider.value + "%"));
  document.querySelectorAll(".vistas button").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".vistas button").forEach(x => x.setAttribute("aria-pressed", x === b));
    document.getElementById("imgA").src = "img/" + b.dataset.v + "-antes.jpg";
    document.getElementById("imgD").src = "img/" + b.dataset.v + "-despues.jpg";
    slider.value = 50; comp.style.setProperty("--pos", "50%");
  }));

  // ---- formulario: abre WhatsApp con el mensaje preparado ----
  document.getElementById("form").addEventListener("submit", e => {
    e.preventDefault();
    const a = document.getElementById("aviso");
    const g = id => (document.getElementById(id).value || "").trim();
    if (!g("nombre") || !g("tel")) { a.textContent = "Falta tu nombre o tu teléfono."; return; }
    if (!document.getElementById("rgpd").checked) { a.textContent = "Marca la casilla de datos para poder enviarte la información."; return; }
    const v = g("vivSel"), m = g("msg");
    const txt = "Hola, soy " + g("nombre") + " (tel. " + g("tel") + "). Quiero planos y precios del Edificio Tucanito" + (v ? " (" + v + ")" : "") + ". Lo busco para: " + g("interes").toLowerCase() + "." + (m ? " " + m : "");
    window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(txt), "_blank", "noopener");
    a.textContent = "Se abre WhatsApp con tu mensaje listo. Pulsa enviar y te contestamos.";
  });
})();
