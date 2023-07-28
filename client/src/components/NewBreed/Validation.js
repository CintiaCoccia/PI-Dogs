export default function validation(input) {
    
    const {name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max, temperament } = input
    const errors = {};
 
    // name
    if(!name || name.length == 0) {
        errors.name = "Este campo es obligatorio";
    }
    // height
    if (isNaN(height_min) || isNaN(height_max)) {
        errors.life_span = 'Los valores deben ser numéricos';
    } else if (Number(height_min) > Number(height_max)) {
        errors.life_span = 'El valor mínimo no puede ser mayor que el valor máximo';
    }
    // weight
    if (isNaN(weight_min) || isNaN(weight_max)) {
        errors.life_span = 'Los valores deben ser numéricos';
    } else if (Number(weight_min) > Number(weight_max)) {
        errors.life_span = 'El valor mínimo no puede ser mayor que el valor máximo';
    }
    // life_span
    if (isNaN(life_span_min) || isNaN(life_span_max)) {
        errors.life_span = 'Los valores deben ser numéricos';
    } else if (Number(life_span_min) > Number(life_span_max)) {
        errors.life_span = 'El valor mínimo no puede ser mayor que el valor máximo';
    }
    // temperament
    if(!temperament || temperament.length == 0) {
        errors.temperament = "Este campo es obligatorio";
    }
    // image
  
    return errors;
}