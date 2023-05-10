let contactos = [
	{nombre: 'Juan Perez'},
	{nombre: 'Maria Rodriguez'},
	{nombre: 'Pedro Sanchez'}
   
];

function agregarContacto() {
	let nombre = document.getElementById('nombre').value;
	let apellido = document.getElementById('apellido').value;

	if (nombre && apellido) {
		let contacto = {nombre: `${nombre} ${apellido}`};
		contactos.push(contacto);
		document.getElementById('nombre').value = '';
		document.getElementById('apellido').value = '';
		actualizarLista();
	}
}

function borrarContacto(index) {
	contactos.splice(index, 1);
	actualizarLista();
}

function actualizarLista() {
	let lista = document.getElementById('lista');
	lista.innerHTML = '';

	for (let i = 0; i < contactos.length; i++) {
		let contacto = contactos[i];
		let div = document.createElement('div');
		div.className = 'contact';
		div.innerHTML = `
			<div class="contact-name">${contacto.nombre}</div>
			<button onclick="borrarContacto(${i})">Borrar</button>
		`;
		lista.appendChild(div);
	}
}

actualizarLista();

function imprimirContactos() {
  for (let i = 0; i < contactos.length; i++) {
    console.log(contactos[i].nombre);
  }
}

imprimirContactos();



