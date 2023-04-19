/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)

  return data;
}

const filtercities = (arr, filtro) =>{
  let filtered = arr.filter (element => `${element.city}` === filtro);
  return filtered;
}

const getCities = (data) => {
  let Cities = data.map ((element) => `${element.city}`);
  console.log(Cities);
  Cities = new Set(Cities);
  Cities = ['All Places', ...Cities]
  return Cities; 
}



export default {
  getData, 
  getCities,
  filtercities,
}



