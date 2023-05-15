let contactos = [
  {
    id: 1,
    nombres: "rodrigo",
    apellidos: "zabala",
    telefono: "555-1234",
    ubicaciones: ["Casa", "Oficina"],
    ciudad: "Bogota - Colombia",
    direccion: "Av. Reforma 123"
  },
  {
    id: 2,
    nombres: "Maria",
    apellidos: "Rodriguez",
    telefono: "555-5678",
    ubicaciones: ["Casa"],
    ciudad: "Medellin - Antioquia",
    direccion: "Calle 5 de Mayo 456"
  },
  {
    id: 3,
    nombres: "Pedro",
    apellidos: "Sanchez",
    telefono: "555-9876",
    ubicaciones: ["Oficina"],
    ciudad: "Leticia - Amazonas",
    direccion: "Av. Constitución 789"
  }
];

function agregarContacto() {
  let id = document.getElementById("id").value;
  let nombres = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let telefono = document.getElementById("telefono").value;
  let ubicaciones = document.getElementById("ubicaciones").value.split(",");
  let ciudad = document.getElementById("ciudad").value;
  let direccion = document.getElementById("direccion").value;

  if (id && nombres && apellidos && telefono && ubicaciones && ciudad && direccion) {
    let contacto = {
      id: id,
      nombres: nombres,
      apellidos: apellidos,
      telefono: telefono,
      ubicaciones: ubicaciones,
      ciudad: ciudad,
      direccion: direccion
    };
    contactos.push(contacto);
    document.getElementById("id").value = "";
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("ubicaciones").value = "";
    document.getElementById("ciudad").value = "";
    document.getElementById("direccion").value = "";
    actualizarLista();
  }
}

function borrarContacto(index) {
  contactos.splice(index, 1);
  actualizarLista();
}

function actualizarLista() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (let i = 0; i < contactos.length; i++) {
    let contacto = contactos[i];
    let div = document.createElement("div");
    div.className = "contact";
    div.innerHTML = `
      <div class="contact-id">${contacto.id}</div>
      <div class="contact-nombres">${contacto.nombres}</div>
      <div class="contact-apellidos">${contacto.apellidos}</div>
      <div class="contact-telefono">${contacto.telefono}</div>
      <div class="contact-ubicaciones">${contacto.ubicaciones.join(", ")}</div>
      <div class="contact-ciudad">${contacto.ciudad}</div>
      <div class="contact-direccion">${contacto.direccion}</div>
      <button onclick="borrarContacto(${i})">Borrar</button>
    `;
    lista.appendChild(div);
  }
}

actualizarLista();

function imprimirContactos() {
  for (let i = 0; i < contactos.length; i++) {
    console.log(contactos[i]);
  }
}

imprimirContactos();