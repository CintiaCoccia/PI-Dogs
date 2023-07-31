// -  Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// -  Si no existe la raza, debe mostrar un mensaje adecuado.
// -  Debe buscar tanto los de la API como los de la base de datos.

const axios = require("axios");
const { Breed, Temperament } = require("../db.js");
const { Op } = require("sequelize");
const { mapAPIBreedToBreed, mapDatabaseBreedToBreed, applyOrderingFilter } = require("./../utils/breedUtils");
const { applyPaging } = require("../utils/pagingUtils.js");

module.exports = async function (request, response) {
    const { name, source } = request.query;

    try {
        // Busco en la API
        const apiBreeds = (await axios.get("https://api.thedogapi.com/v1/breeds/search?q=" + name)).data.map(
            mapAPIBreedToBreed,
        );

        // Busco en la base de datos
        const dbBreeds = (
            await Breed.findAll({
                where: {
                    name: {
                        [Op.iLike]: "%" + name + "%",
                    },
                },
                include: Temperament,
            })
        ).map(mapDatabaseBreedToBreed);

        if (apiBreeds.length > 0 || dbBreeds.length > 0) {
            let allDogs;
            if (source === "api") {
                allDogs = apiBreeds; // Devuelve las razas de la API
            } else if (source === "db") {
                allDogs = dbBreeds; // Devuelve las razas de la base de datos
            } else {
                allDogs = dbBreeds.concat(apiBreeds); // Devuelve todas las razas
            }

            allDogs = applyOrderingFilter(allDogs, request);
            allDogs = applyPaging(allDogs, request);
            return response.status(200).json(allDogs);
        } else {
            return response.status(404).send("No hay coincidencias con la búsqueda :(");
        }
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};
