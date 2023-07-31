import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getBreeds, getTemperaments, orderBreeds } from "../../redux/action";
import Loading from "../Loading/Loading";
import Errors from "../Errors/Errors";

export default function Home(props) {
    const dispatch = useDispatch(); //envía resul de ejecutar la acción al reducer, que combina con el state.
    const breeds = useSelector((state) => state.breeds); //est global es observado por useSelector.
    const temperaments = useSelector((state) => state.temperaments);

    const temperament = useSelector((state) => state.navBar.temperament);
    const order = useSelector((state) => state.navBar.order);
    const source = useSelector((state) => state.navBar.source);
    // const input = useSelector((state) => state.navBar.input)

    useEffect(() => {
        //ejecuta cod cuando estado de algun componente cambia
        dispatch(getBreeds(temperament, order, source)); //envio el result de enviar getBreed a la fn de dispatch, es un {type y payload}.
    }, [temperament, order, source]); // => el efecto se va a ejecutar cuando el compon cambie y cuando navBar cambie.

    useEffect(() => {
        dispatch(getTemperaments());
    }, []);

    function drawCardContainer() {
        if (breeds == null) {
            return <Loading />;
        } else {
            return <CardContainer breeds={breeds} />;
        }
    }

    return (
        <div>
            <NavBar temperaments={temperaments} />
            <div className={styles.container}>{drawCardContainer()}</div>
        </div>
    );
}
