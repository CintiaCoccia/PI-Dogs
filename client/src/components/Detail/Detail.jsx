import styles from "./Detail.module.css";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Errors from "../Errors/Errors";
import Loading from "../Loading/Loading";
import backg from "../../assets/backg.jpeg";

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
                <div className={styles.background} style={{
                    background: `url(${backg})`, 
                  }}>
                    <div className={styles.container}>
                    <img src={breedById.image} className={styles.imgContainer}/>
                    <h1>Name: {breedById.name}</h1>
                    <h2>Id: {breedById.id}</h2>
                    <h2>Height: {breedById.height}</h2>
                    <h2>Weight: {breedById.weight}</h2>
                    <h2>Temperament: {breedById.temperament}</h2>
                    <h2>Life span: {breedById.life_span}</h2>
                    
                </div>
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
