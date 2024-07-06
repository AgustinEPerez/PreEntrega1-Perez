const ropa = [
    { nombre: "Camisa", tipo: "Hombre", precio: 3200 },
    { nombre: "Vestido", tipo: "Mujer", precio: 4500 },
    { nombre: "Pantalon", tipo: "Hombre", precio: 2800 },
    { nombre: "Jean", tipo: "Mujer", precio: 3150 }
];

const mostrarDescripcion = (prenda) => {
    alert(`Nombre: ${prenda.nombre}\nTipo: ${prenda.tipo}\nPrecio: $${prenda.precio}`);
};

const buscarPrendaPorNombre = (nombre) => {
    return ropa.find((prenda) => prenda.nombre === nombre);
};

const filtrarPorTipo = (tipo) => {
    return ropa.filter((prenda) => prenda.tipo === tipo);
};

for (let i = 0; i < 4; i++) {
    const nombreBuscado = prompt("Ingresa el nombre de una prenda:");
    const prendaEncontrada = buscarPrendaPorNombre(nombreBuscado);

    if (prendaEncontrada) {
        mostrarDescripcion(prendaEncontrada);
    } else {
        alert("No se encontró ninguna prenda con ese nombre.");
    }
}