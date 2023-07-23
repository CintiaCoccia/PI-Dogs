function mapAPIBreedToBreed(apiBreed) {
    const { id, name, height, weight, life_span, image, reference_image_id, temperament } = apiBreed;
    return { 
      id, 
      name, 
      height: height.metric + " cm", 
      weight: weight.metric + " kg", 
      temperament, 
      life_span: life_span.replace("years", "años"),
      image: image ? image.url : (reference_image_id ? "https://cdn2.thedogapi.com/images/" + reference_image_id + ".jpg" : undefined),
      source: "api"
    };
}

function mapDatabaseBreedToBreed(dbBreed) {
  const { id, name, height, weight, life_span, image, temperaments } = dbBreed;
  return { 
      id, 
      name, 
      height: height + " cm", 
      weight: weight + " kg", 
      temperament: temperaments ? temperaments.map(temp => temp.name).join(", ") : undefined, 
      life_span: life_span + " años", 
      image,
      source: "db"
  };
}

module.exports = {
    mapAPIBreedToBreed: mapAPIBreedToBreed,
    mapDatabaseBreedToBreed: mapDatabaseBreedToBreed
}