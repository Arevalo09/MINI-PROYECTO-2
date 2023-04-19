import DATA from './data.js'
import DOM from './dom.js'

const objetos = await DATA.getData();
const getcitiesList = DATA.getCities(objetos);
console.log(getcitiesList);

DOM.ArrCities('#cities-list', getcitiesList)


objetos.forEach(element => {
    const New = DOM.createCard(element);
    jaac.appendChild(New);
});

let placeslist = DOM.$('#cities-list');
console.log(placeslist);
placeslist = [...placeslist.children]
console.log(placeslist);
let filteredLocations;
let chosencity=0;

placeslist.forEach((place, index) => {

    place.addEventListener('click', () => {
        console.log(place)
        if (place.classList.contains('chosencity')) return;
        place.classList.add('chosencity');
        placeslist[chosencity].classList.remove('chosencity');
        chosencity = index
        let filtro = place.children[1].textContent;
        console.log(place.children[1].textContent)
        filteredLocations = filtro === 'All places' ? datos : DATA.filtercities(objetos, filtro);
        console.log(filteredLocations)
        DOM.showcards(filteredLocations)
    })
})

let filterNum=[]
let counterAdults = 0
let plusAdults = DOM.$('#sumaAdultos')
let minusAdults = DOM.$('#restaAdultos')

let counterChildren = 0
let plusChildren = DOM.$('#sumaNiños')
let minusChildren = DOM.$('#restaNiños')

let counterTotal = 0

let Adults = DOM.$('#totalAdultos')
let Children = DOM.$('#totalNiños')
let Total = 0


plusAdults.addEventListener('click', () => {
    counterTotal ++
    counterAdults ++
    Adults.innerHTML = counterAdults
    objetos.forEach((card) => {
        jaac.innerHTML = '';
        if(card.maxGuests > counterTotal) {
          filterNum.push(card)
        };
        DOM.showcards(filterNum)
      })
})

minusAdults.addEventListener('click', () => {
    
    counterTotal --
    counterAdults --
    Adults.innerHTML = counterAdults
    objetos.forEach((card) => {
        jaac.innerHTML = '';
        if(card.maxGuests > counterTotal) {
          filterNum.push(card)
        };
        s<DOM.howcards(filterNum)
      })
})


plusChildren.addEventListener('click', () => {
    counterTotal ++
    counterChildren ++
    Children.innerHTML = counterChildren
    objetos.forEach((card) => {
        jaac.innerHTML = '';
        if(card.maxGuests > counterTotal) {
          filterNum.push(card)
        };
        s<DOM.howcards(filterNum)
      })
})

minusChildren.addEventListener('click', () => {
    counterTotal --
    counterChildren --
    Children.innerHTML = counterChildren
    objetos.forEach((card) => {
        jaac.innerHTML = '';
        if(card.maxGuests > counterTotal) {
          filterNum.push(card)
        };
        DOM.showcards(filterNum)
      })
})

