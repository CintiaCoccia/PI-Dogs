export default function validation(input) {
    
    const { name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max, temperaments, image } =
        input;
    const errors = {};
    const imageRegex = /\.(jpeg|jpg|png|gif)$/i;

    if (name != null && name.length == 0) {
        errors.name = "Este campo es obligatorio";
    }
    if (isNaN(height_min) || isNaN(height_max)) {
        errors.height = "Los valores deben ser numéricos";
    } else if (Number(height_min) > Number(height_max)) {
        errors.height= "El valor mínimo no puede ser mayor que el valor máximo";
    }
    if (isNaN(weight_min) || isNaN(weight_max)) {
        errors.weight = "Los valores deben ser numéricos";
    } else if (Number(weight_min) > Number(weight_max)) {
        errors.weight = "El valor mínimo no puede ser mayor que el valor máximo";
    }
    if (isNaN(life_span_min) || isNaN(life_span_max)) {
        errors.life_span = "Los valores deben ser numéricos";
    } else if (Number(life_span_min) > Number(life_span_max)) {
        errors.life_span = "El valor mínimo no puede ser mayor que el valor máximo";
    }
    if (temperaments != null && temperaments.length == 0) {
        errors.temperaments = "Este campo es obligatorio";
    }
    if (image != null && !image.match(imageRegex)) {
        errors.image = "La URL de la imagen no es válida o no es una imagen (jpeg, jpg, png, gif)";
    }
    return errors;
}
