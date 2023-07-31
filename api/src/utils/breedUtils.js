function mapAPIBreedToBreed(apiBreed) {
    const { id, name, height, weight, life_span, image, reference_image_id, temperament } = apiBreed;
    return {
        id,
        name,
        height: height.metric + " cm",
        weight: weight.metric + " kg",
        temperament,
        life_span: life_span.replace("years", "años"),
        image: image
            ? image.url
            : reference_image_id
            ? "https://cdn2.thedogapi.com/images/" + reference_image_id + ".jpg"
            : undefined,
        source: "api",
    };
}

function mapDatabaseBreedToBreed(dbBreed) {
    const { id, name, height, weight, life_span, image, temperaments } = dbBreed;
    return {
        id,
        name,
        height: height + " cm",
        weight: weight + " kg",
        temperament: temperaments ? temperaments.map((temp) => temp.name).join(", ") : undefined,
        life_span: life_span + " años",
        image,
        source: "db",
    };
}

function applyOrderingFilter(breeds, request) {
    const order = request.query.order;
    const temperament = request.query.temperament;
    let allDogs = breeds;
    //filter por temperaments
    if (temperament)
        allDogs = allDogs.filter((dog) => {
            if (dog.temperament) {
                return dog.temperament.includes(temperament);
            }
        });

    // Order ASC / DESC
    if (order === "asc") {
        allDogs.sort((a, b) => a.name.localeCompare(b.name)); // de "A" a "Z"
    } else if (order === "desc") {
        allDogs.sort((a, b) => b.name.localeCompare(a.name)); // de "Z" a "A"
    }
    return allDogs;
}

module.exports = {
    mapAPIBreedToBreed: mapAPIBreedToBreed,
    mapDatabaseBreedToBreed: mapDatabaseBreedToBreed,
    applyOrderingFilter: applyOrderingFilter,
};
