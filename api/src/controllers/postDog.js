// -  Esta ruta recibirá todos los datos necesarios para crear una nueva raza de perro y relacionarlo con los temperamentos asociados.
// -  Toda la información debe ser recibida por body.
// -  Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados (al menos uno).


// const { Dog } = require("../db")

// module.exports = async function (request, response) {

//     const { name, height, weight, life_span, image, temperament } = request.body;
  
//     if (!name || !height || !weight || !temperament || !life_span || !image) {
//       return response.status(400).send("Faltan datos para crear el perro/RAZA?");
//     }
    
//     try {
//       const newDog = await Dog.create({
//         name: name,
//         height: height,
//         weight: weight,
//         life_span: life_span,
//         image: image
//       });
    
//       return response.status(201).json(newDog);
//     } catch (error) {
//       response.status(500).json({ error: error.message });
//     }
//   };

const { Breed, Temperament } = require("../db");

module.exports = async function (request, response) {
  const { name, height, weight, life_span, image, temperaments } = request.body;

  if (!name || !height || !weight || !temperaments || !life_span || !image) {
    return response.status(400).send("Faltan datos para crear la raza");
  }

  try {
    // Obtener temperaments de db
    const matchingTemperaments = await Temperament.findAll({
        where: {
            name: temperaments
        }
    });

    if (matchingTemperaments.length == 0) {
      return response.status(400).send("El temperamento no coincide con un temperamento existentes");
    }

    const newBreed = await Breed.create({
      name: name,
      height: height,
      weight: weight,
      life_span: life_span,
      image: image
    });

    matchingTemperaments.map((temperament) => {
        return newBreed.addTemperaments(temperament) // retorna una promesa
    })

    return response.status(201).send();
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};


