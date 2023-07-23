// Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.

const axios = require('axios');
const { Breed, Temperament } = require("../db.js");
const { mapAPIBreedToBreed, mapDatabaseBreedToBreed } = require("./../utils/breedUtils")

module.exports = async function (request, response) {
  
    try {
      const dogsFromDatabase = (await Breed.findAll({
        include: Temperament
      }))
      .map(breed => {
        return mapDatabaseBreedToBreed(breed)
      })

      // Consulta a API
      const dogsFromAPI = (await axios.get('https://api.thedogapi.com/v1/breeds')).data
      .map(breed => {
        return mapAPIBreedToBreed(breed)
      });

      const allDogs = dogsFromDatabase.concat(dogsFromAPI); //concateno arrays

      response.status(200).json(allDogs);
  } catch (error) {
      response.status(500).json({ error: error.message });
  }
};




