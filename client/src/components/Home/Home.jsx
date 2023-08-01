import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getBreeds, getTemperaments, orderBreeds } from "../../redux/action";
import Loading from "../Loading/Loading";
import Errors from "../Errors/Errors";
import Paging from "../Paging/Paging";

export default function Home(props) {
    const dispatch = useDispatch(); //envía resul de ejecutar la acción al reducer, que combina con el state.
    const breeds = useSelector((state) => state.breeds); //est global es observado por useSelector.
    const temperaments = useSelector((state) => state.temperaments);

    const temperament = useSelector((state) => state.navBar.temperament);
    const order = useSelector((state) => state.navBar.order);
    const source = useSelector((state) => state.navBar.source);
    const search = useSelector((state) => state.navBar.search);
    const page = useSelector((state) => (state.breeds.paging ? state.breeds.paging.page : 0));

    useEffect(() => {
        //ejecuta cod cuando estado de algun componente cambia
        dispatch(getBreeds(temperament, order, source, search, page)); //envio el result de enviar getBreed a la fn de dispatch, es un {type y payload}.
    }, [temperament, order, source, search, page]); // => el efecto se va a ejecutar cuando el compon cambie y cuando navBar cambie.

    useEffect(() => {
        dispatch(getTemperaments());
    }, []);

    function drawCardContainer() {
        if (breeds.error) {
            return <Errors message={breeds.error} />;
        } else if (breeds.breeds == null) {
            return <Loading />;
        } else if (breeds.breeds.length == 0) {
            return <Errors message={"No hay resultados para la búsqueda"} />;
        } else {
            return (
                <div>
                    <CardContainer breeds={breeds.breeds} />
                    <Paging />
                </div>
            );
        }
    }

    return (
        <div>
            <NavBar temperaments={temperaments} />
            <div className={styles.container}>{drawCardContainer()}</div>
        </div>
    );
}
