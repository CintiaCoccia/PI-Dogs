import styles from "./NewBreed.module.css";
import validation from "./Validation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createBreed, getTemperaments, clearBreedCreated } from "../../redux/action";
import MultiSelect from "../MultiSelect/MultiSelect";
import backg from "../../assets/backg.jpeg";

export default function NewBreed() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const temperaments = useSelector((state) => state.temperaments);
    const breedCreated = useSelector((state) => state.breedCreated);
    
    const [newBreedData, setNewBreedData] = useState({
        name: null,
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span_min: "",
        life_span_max: "",
        temperaments: null,
        image: null,
    });

    const [errors, setErrors] = useState({
        name: null,
        height: null,
        weight: null,
        life_span: null,
        temperaments: null,
        image: null,
    });

    useEffect(() => {
        dispatch(getTemperaments());
    }, []);

    useEffect(() => {
        if(breedCreated) {
            goToHome()
            dispatch(clearBreedCreated())
        }
    },[breedCreated]);

    function goToHome() {
        navigate("/home");
    }

    function handleTemperamentChange(newTemperaments) {
        setNewBreedData({
            ...newBreedData,
            temperaments: newTemperaments,
        });
        setErrors(
            validation({
                ...newBreedData,
                temperaments: newTemperaments,
            }),
        );
    }

    function buttonDisable() {
        return errors.name || errors.height || errors.weight || errors.life_span || errors.temperaments || errors.image;
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewBreedData({
            ...newBreedData,
            [name]: value,
        });

        setErrors(
            validation({
                ...newBreedData,
                [name]: value,
            }),
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(createBreed({
            name: newBreedData.name,
            weight: newBreedData.weight_min + " - " + newBreedData.weight_max,
            height: newBreedData.height_min + " - " + newBreedData.height_max,
            life_span: newBreedData.life_span_min + " - " + newBreedData.life_span_max,
            temperaments: newBreedData.temperaments,
            image: newBreedData.image,
        }))
    };

    return (
        <div
            className={styles.background}
            style={{
                background: `url(${backg})`,
            }}>
            <div className={styles.container}>
                <form onSubmit={handleSubmit}>
                    <h2> -- Create new breed -- </h2>

                    <label>Name: </label>
                    <br />
                    <input type="text" name="name" onChange={handleInputChange} />
                    <p className={styles.errors}>{errors.name}</p>
                    <br />

                    <label>Height: </label>
                    <br />
                    <input
                        type="text"
                        name="height_min"
                        placeholder="Minimum value in cm"
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="height_max"
                        placeholder="Maximum value in cm"
                        onChange={handleInputChange}
                    />
                    <p className={styles.errors}>{errors.height}</p>

                    <br />

                    <label>Weight: </label>
                    <br />
                    <input
                        type="text"
                        name="weight_min"
                        placeholder="Minimum value in kg"
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="weight_max"
                        placeholder="Maximum value in kg"
                        onChange={handleInputChange}
                    />
                    <p className={styles.errors}>{errors.weight}</p>

                    <br />

                    <label>Life span: </label>
                    <br />
                    <input name="life_span_min" placeholder="Minium value" onChange={handleInputChange} />
                    <input name="life_span_max" placeholder="Maxium value" onChange={handleInputChange} />
                    <p className={styles.errors}>{errors.life_span}</p>
                    <br />

                    <label>Temperament: </label>
                    <br />

                    <MultiSelect options={temperaments.map((item) => item.name)} onChange={handleTemperamentChange} />
                    <p className={styles.errors}>{errors.temperaments}</p>

                    <br />
                    <label>Image: </label>
                    <br />
                    <input
                        name="image"
                        placeholder="Insert url here"
                        src={newBreedData.image}
                        onChange={handleInputChange}
                    />
                    <p className={styles.errors}>{errors.image}</p>
                    <div>
                        <button
                            className={styles.createButton}
                            type="submit"
                            disabled={buttonDisable()}
                            onClick={handleSubmit}>
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
