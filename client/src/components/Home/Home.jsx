import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import NavBar from '../NavBar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { getBreeds, getTemperaments } from '../../redux/action';


export default function Home(props) {
    
    const dispatch = useDispatch(); //envía resul de ejecutar la acción al reducer, que combina con el state.
    const breeds = useSelector((state) => state.breeds); //est global es observado por useSelector.
    const temperaments = useSelector((state) => state.temperaments);
    // const breedById = useSelector((state) => state.breedById)
    const temperament = useSelector((state) => state.navBar.temperament);

    useEffect(() => { //ejecuta cod cuando estado de algun componente cambia
        dispatch(getBreeds(temperament)); //envio el result de enviar getBreed a la fn de dispatch, es un {type y payload}.
        // dispatch(getBreedById())
    },[temperament]); // => el efecto se va a ejecutar cuando el compon cambie y cuando navBar cambie.

    useEffect(() => {
        dispatch(getTemperaments());
    },[])


    return(
        <div>
            <NavBar temperaments={temperaments}/>
            <CardContainer breeds={breeds} className={styles.container}/>
        </div>
    )
}
