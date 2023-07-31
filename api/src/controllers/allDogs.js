// Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.

const axios = require("axios");
const { Breed, Temperament } = require("../db.js");
const { mapAPIBreedToBreed, mapDatabaseBreedToBreed, applyOrderingFilter } = require("./../utils/breedUtils");
const { applyPaging } = require("../utils/pagingUtils.js");

module.exports = async function (request, response) {
    const source = request.query.source;

    try {
        const dogsFromDatabase = (
            await Breed.findAll({
                include: Temperament,
            })
        ).map((breed) => mapDatabaseBreedToBreed(breed));

        // Consulta a API
        const dogsFromAPI = (await axios.get("https://api.thedogapi.com/v1/breeds")).data.map((breed) =>
            mapAPIBreedToBreed(breed),
        );

        let allDogs;
        if (source === "api") {
            allDogs = dogsFromAPI; // Devuelve las razas de la API
        } else if (source === "db") {
            allDogs = dogsFromDatabase; // Devuelve las razas de la base de datos
        } else {
            allDogs = dogsFromDatabase.concat(dogsFromAPI); // Devuelve todas las razas
        }

        allDogs = applyOrderingFilter(allDogs, request);
        allDogs = applyPaging(allDogs, request);

        response.status(200).json(allDogs); // resp con razas ordenadas
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};
