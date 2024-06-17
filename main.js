function contadorInteractivo() {
    let continuar = true;
    while (continuar) {
        let usuarioInput = prompt("Introduce un número para multiplicar por 2, o 'salir' para terminar el simulador.");
        if (usuarioInput.toLowerCase() === 'salir') {
            alert("Simulador terminado.");
            continuar = false;
        } else {
            let numero = parseInt(usuarioInput);
            if (!isNaN(numero)) {
                let resultado = numero * 2;
                alert("El resultado es: " + resultado);
            } else {
                alert("Por favor, introduce un número válido.");
            }
        }
    }
}

contadorInteractivo();

