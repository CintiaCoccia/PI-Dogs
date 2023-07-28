import styles from './NewBreed.module.css';
import validation from './Validation';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function NewBreed() {
    const navigate = useNavigate();

    function goToHome() {
        navigate("/home");
    }

    function buttonDisable() {
        return (errors.name || errors.height || errors.weight || errors.life_span || errors.temperament);
    }

    const [newBreedData, setNewBreedData] = useState({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: "",
        temperament: "",

    });

    const [errors, setErrors] = useState({
        name: null,
        height: null,
        weight: null,
        life_span: null,
        temperament: null,
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNewBreedData({
            ...newBreedData,
            [name]: value
        });
        console.log(name)
        console.log(value)
        setErrors(
            validation({
                ...newBreedData,
                [name]: value
            })
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/dogs", {
                name: newBreedData.name,
                weight: newBreedData.weight_min + " - " + newBreedData.weight_max,
                height: newBreedData.height_min + " - " + newBreedData.height_max,
                life_span: newBreedData.life_span_min + " - " + newBreedData.life_span_max,
                temperaments: [newBreedData.temperament],
                image: "mm"
            });
            goToHome();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h2>Crear nueva raza</h2>

                <label>Nombre: </label>
                <br />
                <input type="text" name="name" onChange={handleInputChange} />
                <p className={styles.errors}>{errors.name}</p>
                <br />

                <label>Altura: </label>
                <br />
                <input type="text" name="height_min" placeholder='Valor mínimo en kg' onChange={handleInputChange} />
                <input type="text" name="height_max" placeholder='Valor máximo en kg' onChange={handleInputChange} />
                <p className={styles.errors}>{errors.height}</p>

                <br />

                <label>Peso: </label>
                <br />
                <input type="text" name="weight_min" placeholder='Valor mínimo en cm' onChange={handleInputChange} />
                <input type="text" name="weight_max" placeholder='Valor máximo en cm' onChange={handleInputChange} />
                <p className={styles.errors}>{errors.weight}</p>

                <br />

                <label>Años de vida: </label>
                <br />
                <input name="life_span_min" placeholder='Valor mínimo' onChange={handleInputChange} />
                <input name="life_span_max" placeholder='Valor máximo' onChange={handleInputChange} />
                <p className={styles.errors}>{errors.life_span}</p>
                <br />

                <label>Temperamento: </label>
                <br />
                <input name="temperament" placeholder='aqui va temperament' onChange={handleInputChange} />
                <p className={styles.errors}>{errors.temperament}</p>

                <br />
                <div>
                    <button type="submit" disabled={buttonDisable()}>Crear</button>
                </div>
            </form>
        </div>
    )
}


