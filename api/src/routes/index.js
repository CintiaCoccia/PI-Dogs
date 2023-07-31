const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const allDogs = require("../controllers/allDogs");
const getDogId = require("../controllers/getDogId");
const getDogQuery = require("../controllers/getDogQuery");
const getTemperaments = require("../controllers/getTemperaments");
const postDogs = require("../controllers/postDog");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", allDogs);
router.get("/dogs/name", getDogQuery);
router.get("/dogs/:id", getDogId);
router.get("/temperaments", getTemperaments);
router.post("/dogs", postDogs);

module.exports = router;
