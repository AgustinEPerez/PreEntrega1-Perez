// Variables
let elementos = [];
let contador = 0;

// Funciones
function agregarElemento() {
    const elemento = {
        id: contador,
        nombre: `Elemento ${contador}`,
        activo: true
    };
    elementos.push(elemento);
    contador++;
    actualizarLista();
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

function toggleActivo(id) {
    const elemento = elementos.find((elemento) => elemento.id === parseInt(id));
    elemento.activo = !elemento.activo;
    actualizarLista();
}

function borrarElementos() {
    elementos = [];
    contador = 0;
    actualizarLista();
}


// Eventos
document.getElementById('btn-agregar').addEventListener('click', agregarElemento);
document.getElementById('btn-borrar').addEventListener('click', borrarElementos);

document.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        toggleActivo(event.target.id);
    }
});

// Ciclos
elementos.forEach((elemento) => {
    console.log(elemento.nombre);
});

// Objetos y arrays
const objeto = {
    nombre: 'Objeto',
    edad: 30
};
console.log(objeto.nombre);

const array = [1, 2, 3, 4, 5];
console.log(array.filter((numero) => numero > 3));

// Funciones superiores
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.find((numero) => numero > 3));
console.log(numeros.forEach((numero) => console.log(numero)));
console.log(numeros.filter((numero) => numero > 3));

// Funciones avanzadas
const esPar = (numero) => numero % 2 === 0;
console.log([1, 2, 3, 4, 5].filter(esPar));

const sumar = (...numeros) => numeros.reduce((a, b) => a + b, 0);
console.log(sumar(1, 2, 3, 4, 5));

// LocalStorage
localStorage.setItem('elementos', JSON.stringify(elementos));
const elementosGuardados = JSON.parse(localStorage.getItem('elementos'));
console.log(elementosGuardados);