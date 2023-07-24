// Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.

const axios = require('axios');
const { Breed, Temperament } = require("../db.js");
const { mapAPIBreedToBreed, mapDatabaseBreedToBreed } = require("./../utils/breedUtils");

module.exports = async function (request, response) {
  const source = request.query.source;
  const order = request.query.order;
  const temperament = request.query.temperament;

  try {
    const dogsFromDatabase = (await Breed.findAll({
      include: Temperament
    })).map(breed => mapDatabaseBreedToBreed(breed));

    // Consulta a API
    const dogsFromAPI = (await axios.get('https://api.thedogapi.com/v1/breeds')).data
      .map(breed => mapAPIBreedToBreed(breed));

    let allDogs;
    if (source === "api") {
      allDogs = dogsFromAPI; // Devuelve las razas de la API
    } else if (source === "db") {
      allDogs = dogsFromDatabase; // Devuelve las razas de la base de datos
    } else {
      allDogs = dogsFromDatabase.concat(dogsFromAPI); // Devuelve todas las razas
    }

    //filter por temperaments va aca 
    if (temperament) 
      allDogs = allDogs.filter((dog) => {
    if (typeof dog.temperament === "string") { // Verifica si dog.temperament es una cadena antes de usar includes
      return dog.temperament.includes(temperament);
    }  
  });
    // Order ASC / DESC
    if (order === "asc") {
      allDogs.sort((a, b) => a.name.localeCompare(b.name)); // de "A" a "Z"
    } else if (order === "desc") {
      allDogs.sort((a, b) => b.name.localeCompare(a.name)); // de "Z" a "A"
    }

    response.status(200).json(allDogs); // resp con razas ordenadas
  }catch (error) {
    response.status(500).json({ error: error.message });
  }
};









