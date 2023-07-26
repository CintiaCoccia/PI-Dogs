import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds } from '../../redux/action';

export default function Home(props) {
    
    const dispatch = useDispatch(); //envía resul de ejecutar la acción al reducer, que combina con el state.
    
    const breeds = useSelector((state) => state.breeds) //est global es observado por useSelector.
    const [ temperaments, setTemperaments] = useState([]); //est local

    async function getAllTemperaments() {
        try {
            const result = await axios("http://localhost:3001/temperaments");
            setTemperaments(result.data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => { //ejecuta cod cuando estado de algun componente cambia
        dispatch(getBreeds()); //envio el result de enviar getBreed a la fn de dispatch, es un {type y payload}.
        getAllTemperaments();
    },[]); 


    return(
        <div>
            <NavBar temperaments={temperaments}/>
            <CardContainer breeds={breeds} className={styles.container}/>
        </div>
    )
}
