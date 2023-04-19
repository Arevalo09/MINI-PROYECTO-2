/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/

const $ = selector => document.querySelector(selector);


const createCard = obj => {

    const article = document.createElement('article')

    article.innerHTML = `
    <div class="image rounded EU1">
        <img class="IMG w-100 overflow h-100 rounded" src="${obj.photo}" alt="${obj.title}">
    </div>

    <p> <span class=" bottom border border-black rounded-pill px-2 B1"> SUPER HOST </span> <span class="st text-secondary B2"> Entire apartment . 2 beds </span> <span class="material-symbols-outlined ES1"> star </span> <span class="st1 text-secondary ST1"> 4.40 </span> </p>

    <p class="fw-bolder D1"> Stylist apartment in center of the city </p> 
    `

    return article;
}


//Función para mostrar las locaciones Ciudad, País disponibles
const ArrCities = (where, cities) => {

    const citiesList = $(where);

    cities.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="material-symbols-outlined me-3">
        location_on</span><span>${element}<span>`;
        li.className += `ms-2 ps-2 list-group-item text-start w-100` ;
        citiesList.appendChild(li);
        return li;
    });
}

const showcards = (arr) => {
    let jaac = $('#jaac');
    jaac.innerHTML = '';
    arr.forEach(element => {
        const card = createCard(element);
        jaac.appendChild(card);
    });
  }

export default {
    $,
    createCard,
    ArrCities,
    showcards
}

