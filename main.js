let elementos = [];
let contador = 0;

function agregarElemento() {
    const elemento = {
        id: contador,
        nombre: `Elemento ${contador}`,
        activo: true
    };
    elementos.push(elemento);
    contador++;
    actualizarLista();
    guardarElementos();
}

function actualizarLista() {
    const lista = document.getElementById('lista-elementos');
    lista.innerHTML = '';
    elementos.forEach((elemento) => {
        const li = document.createElement('li');
        li.textContent = elemento.nombre;
        li.textContent = elemento.nombre;
        lista.appendChild(li);
    });
}

function borrarElementos() {
    elementos = [];
    contador = 0;
    actualizarLista();
    guardarElementos();
}

// Funcion para alternar el estado de activación de un elemento en la lista
function toggleActivo(id) {
    const elemento = elementos.find((elemento) => elemento.id === parseInt(id));
    elemento.activo = !elemento.activo;
    actualizarLista();
}

// Funciones para guardar elementos en el LocalStorage
function guardarElementos() {
    localStorage.setItem('elementos', JSON.stringify(elementos));
}

function cargarElementosGuardados() {
    const elementosGuardados = JSON.parse(localStorage.getItem('elementos'));
    elementosGuardados ? (elementos = elementosGuardados, contador = elementos.length, actualizarLista()) : null;
}

// Eventos
document.getElementById('btn-agregar').addEventListener('click', agregarElemento);
document.getElementById('btn-borrar').addEventListener('click', borrarElementos);

document.addEventListener('click', (event) => {
    event.target.tagName === 'LI' ? toggleActivo(event.target.id) : null;
});