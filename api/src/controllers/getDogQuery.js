// -  Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// -  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// -  Si no existe la raza, debe mostrar un mensaje adecuado.
// -  Debe buscar tanto los de la API como los de la base de datos.

const axios = require('axios');
const { Breed, Temperament } = require("../db.js");
const { Op } = require("sequelize");
const { mapAPIBreedToBreed, mapDatabaseBreedToBreed } = require("./../utils/breedUtils")

module.exports = async function (request, response) {

    const name = request._parsedUrl.query.substring(1) //
  try {
    // Busco en la API
    const apiBreeds = (await axios.get("https://api.thedogapi.com/v1/breeds/search?q=" + name)).data
    .map(mapAPIBreedToBreed);

    // Busco en la base de datos
    const dbBreeds = (await Breed.findAll({
      where: {
        name: {
          [Op.iLike]: "%" + name + "%"
        }
      },
      include: Temperament
    }))
    .map(mapDatabaseBreedToBreed)

    if (apiBreeds.length > 0 || dbBreeds.length > 0) {
      const allBreeds = apiBreeds.concat(dbBreeds);
      return response.status(200).json(allBreeds);
    } else {
      return response.status(404).send("No hay coincidencias con la búsqueda :(");
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
