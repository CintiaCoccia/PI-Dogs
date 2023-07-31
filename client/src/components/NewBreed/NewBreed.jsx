import styles from "./NewBreed.module.css";
import validation from "./Validation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments } from "../../redux/action";

export default function NewBreed() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const temperaments = useSelector((state) => state.temperaments);

    const [newBreedData, setNewBreedData] = useState({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: "",
        temperament: [],
        image: "",
    });

    const [errors, setErrors] = useState({
        name: null,
        height: null,
        weight: null,
        life_span: null,
        temperament: null,
        image: null,
    });

    useEffect(() => {
        dispatch(getTemperaments());
    }, []);

    function goToHome() {
        navigate("/home");
    }

    function handleTemperamentChange(event) {
        const newNewBreedData = {
            ...newBreedData,
        };

        setNewBreedData();
    }

    function buttonDisable() {
        return errors.name || errors.height || errors.weight || errors.life_span || errors.temperament || errors.image;
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBreedData({
            ...newBreedData,
            [name]: value,
        });
        console.log(name);
        console.log(value);
        setErrors(
            validation({
                ...newBreedData,
                [name]: value,
            }),
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
                image: newBreedData.image,
            });
            goToHome();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <h2>Crear nueva raza</h2>

                <label>Name: </label>
                <br />
                <input type="text" name="name" onChange={handleInputChange} />
                <p className={styles.errors}>{errors.name}</p>
                <br />

                <label>Height: </label>
                <br />
                <input type="text" name="height_min" placeholder="Valor mínimo en kg" onChange={handleInputChange} />
                <input type="text" name="height_max" placeholder="Valor máximo en kg" onChange={handleInputChange} />
                <p className={styles.errors}>{errors.height}</p>

                <br />

                <label>Weight: </label>
                <br />
                <input type="text" name="weight_min" placeholder="Valor mínimo en cm" onChange={handleInputChange} />
                <input type="text" name="weight_max" placeholder="Valor máximo en cm" onChange={handleInputChange} />
                <p className={styles.errors}>{errors.weight}</p>

                <br />

                <label>Life span: </label>
                <br />
                <input name="life_span_min" placeholder="Valor mínimo" onChange={handleInputChange} />
                <input name="life_span_max" placeholder="Valor máximo" onChange={handleInputChange} />
                <p className={styles.errors}>{errors.life_span}</p>
                <br />

                <label>Temperament: </label>
                <br />

                <select name="temperament">
                    <option key="todos" value="todos">
                        ---
                    </option>
                    {temperaments.map((temp) => {
                        return (
                            <option key={temp.id} value={temp.name}>
                                {temp.name}
                            </option>
                        );
                    })}
                </select>

                <br />
                <label>Image: </label>
                <br />
                <input name="image" placeholder="insertar url" src={newBreedData.image} onChange={handleInputChange} />
                <p className={styles.errors}>{errors.image}</p>
                <div>
                    <button type="submit" disabled={buttonDisable()}>
                        Crear
                    </button>
                </div>
            </form>
        </div>
    );
}
