export default function Validation(input) {

    const errors = {};

    const { life_span_min, life_span_max } = formData;


    if (isNaN(life_span_min) || isNaN(life_span_max)) {
        errors.life_span = 'Los valores deben ser numéricos';
    } else if (Number(life_span_min) > Number(life_span_max)) {
        errors.life_span = 'El valor mínimo no puede ser mayor que el valor máximo';
    }
    if(!input.name) {
        errors.name = "El nombre es obligatorio";
    }
    if(input.height == 0) {
        errors.difficulty = "La altura no puede ser 0"
    }
    if(input.weight == 0) {
        errors.weight = "El peso no puede ser 0"
    }
    if(input.life_span == 0) {
        errors.duration = "La duración no puede ser 0"
    }
    if(!temperament) {
        errors.temperament = "El temperamento es obligatorio"
    }
    return errors;
}