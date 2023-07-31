import styles from "./Detail.module.css";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Errors from "../Errors/Errors";
import Loading from "../Loading/Loading";

export default function Detail(props) {
    const { id } = useParams(); //devuelve obj cuyas keys son param que usé en las rutas

    const [breedById, setBreedById] = useState(null);

    async function loadBreedById() {
        try {
            const { data } = await axios("http://localhost:3001/dogs/" + id);
            setBreedById(data);
        } catch (error) {
            setBreedById(error.response.data)
        }
    }
    useEffect(() => {
        loadBreedById();
    }, []);

    function drawDetail() {
        
        if(breedById == null) {
            return <Loading />
        } else if(breedById.error) {
            return <Errors message={breedById.error}/>
        } else  {
            return (
                <div className={styles.container}>
                    
                    <img src={breedById.image} />
                    <h1>Nombre: {breedById.name}</h1>
                    <h2>Id: {breedById.id}</h2>
                    <h2>Altura: {breedById.height}</h2>
                    <h2>Peso: {breedById.weight}</h2>
                    <h2>Temperamento: {breedById.temperament}</h2>
                    <h2>Años de vida: {breedById.life_span}</h2>
                    
                </div>
            )
        }
    }

    return (
        <div>
            {drawDetail()}
        </div>
    );
}
