// -  Obtiene todos los temperamentos existentes.
// -  Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
const { Temperament } = require("../db.js");

module.exports = async function (request, response) {
    try {
        const temperaments = await Temperament.findAll({
            order: [ //traer datos de base de datos ordenados
                ['name', 'ASC']
            ]
        });
        response.status(200).json(temperaments);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
};
