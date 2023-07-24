// Filtering.js

// const { mapAPIBreedToBreed, mapDatabaseBreedToBreed } = require("./../utils/breedUtils");

// async function Filtering(source, dogsFromAPI, dogsFromDatabase) {
//   let filteredDogs;

//   if (source === "api") {
//     filteredDogs = dogsFromAPI.map(breed => mapAPIBreedToBreed(breed));
//   } else if (source === "db") {
//     filteredDogs = dogsFromDatabase.map(breed => mapDatabaseBreedToBreed(breed));
//   } else {
//     const allDogs = dogsFromDatabase.concat(dogsFromAPI);
//     filteredDogs = allDogs.map(breed => (source === "db" ? mapDatabaseBreedToBreed(breed) : mapAPIBreedToBreed(breed)));
//   }

//   return filteredDogs;
// }

// module.exports = Filtering;
