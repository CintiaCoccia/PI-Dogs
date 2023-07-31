// -  Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
// -  La raza es recibida por parámetro (ID).
// -  Tiene que incluir los datos de los temperamentos asociadas a esta raza.
// -  Debe funcionar tanto para los perros de la API como para los de la base de datos.

const axios = require("axios");
const { Breed, Temperament } = require("../db.js");
const { mapAPIBreedToBreed, mapDatabaseBreedToBreed } = require("./../utils/breedUtils");

module.exports = async function (request, response) {
    const { id } = request.params;

    try {
        // Chequeo API para ver si hay raza con ese id

        const apiDog = await searchDogInAPI(id);

        if (apiDog) {
            return response.status(200).json(apiDog);
        }

        // Chequeo base de datos a ver si esta la raza con ese id

        const dbDog = await searchDogInDatabase(id);

        if (dbDog) {
            return response.status(200).json(dbDog);
        }

        // Muestro error porque la raza con id no esta ni en la db ni en la api

        return response.status(404).json({ error: "La raza " + id + " no fue encontrada."});
    } catch (error) {
        return response.status(500).json({ error: "¡Ups, algo salió mal!" });
    }
};

async function searchDogInDatabase(id) {
    const breed = await Breed.findOne({
        where: { id: id },
        include: Temperament,
    });
    return mapDatabaseBreedToBreed(breed);
}

async function searchDogInAPI(id) {
    const apiResponse = await axios.get("https://api.thedogapi.com/v1/breeds");
    const breed = apiResponse.data.filter((breed) => {
        return breed.id == id;
    });

    return breed[0] ? mapAPIBreedToBreed(breed[0]) : null;
}

//hago filter porque /breeds/:id no es un endpoint válido.
