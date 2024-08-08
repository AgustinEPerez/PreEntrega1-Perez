const searchBtn = document.getElementById("btn");
const countryInp = document.getElementById("country-input");
const countryInfo = document .getElementById("country-info");

// Agregar un evento de clic al botón de búsqueda
searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let apiURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    // Realizar la solicitud a la API
    fetch(apiURL).then((response) => response.json()).then((data) => {
        let countryData = {
            // Extraer la información del país de la respuesta de la API
            name: data[0].name.common,
            flag: data[0].flags.svg,
            capital: data[0].capital[0],
            continent: data[0].continents[0],
            population: data[0].population,
            currency: `${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}`,
            languages: Object.values(data[0].languages).toString().split(",").join(", ")
        };

        // Obtener la lista de países almacenada en localStorage o crear una nueva si no existe
        let countries = JSON.parse(localStorage.getItem('countries')) || [];
        // Agregar la información del nuevo país a la lista
        countries.push(countryData);
        // Guardar la lista actualizada en localStorage
        localStorage.setItem('countries', JSON.stringify(countries));
        
        // Actualizar el contenido del elemento 'countryInfo' con la información del país solicitado
        countryInfo.innerHTML = `
        <img src="${data[0].flags.svg}" 
        class="flag-img">
        <h2>${data[0].name.common}<h2>
        <div class="wrapper"
            <div class="info-container">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper"
            <div class="info-container">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper"
            <div class="info-container">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper"
            <div class="info-container">
                <h4>Currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
        <div class="wrapper"
            <div class="info-container">
                <h4>Languages:</h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
            </div>
        </div>
        `;
    }).catch(() => { // Manejar errores en la solicitud a la API
        if(countryName == 0){
            Swal.fire({
                title: 'Error!',
                text: 'The input field cannot be empty.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Please enter a valid country name.',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
    })
});
