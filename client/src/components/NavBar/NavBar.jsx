import styles from "./NavBar.module.css";
import Home from "../Home/Home";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSource, filterTemperaments, orderBreeds } from "../../redux/action";


export default function NavBar(props) {

    const dispatch = useDispatch();
    const { temperaments } = props
    const [ input, setInput ] = useState("");
    const temperament = useSelector((state) => state.navBar.temperament)
    
    const order = useSelector((state) => state.navBar.order);
    const source = useSelector((state) => state.navBar.source);


    function inputChange(event) {
        setInput(event.target.value)
    }
    function handleTemperamentChange(event) {
        dispatch(filterTemperaments(event.target.value))
    }
    function handleBreedsChange(event) {
        dispatch(orderBreeds(event.target.value))
    }
    function handleSourceChange(event) {
        dispatch(filterSource(event.target.value))
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <ul>
                    <li className={styles.logo}>
                        <div>🐶</div>
                    </li>
                    <li>
                        <input 
                        className={styles.navbarItem}
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Ingresa el nombre de la raza..."
                        onChange={inputChange}
                        />
                    </li>
                    <li className={styles.searchButton}>
                        <button className={styles.navbarItem}>Buscar 🔍</button>
                    </li>
                    <li>
                        <label>Origen: </label>
                        <select
                            defaultValue={source}
                            className={styles.navbarItem} 
                            name="breeds"
                            onChange={handleSourceChange}>
                            <option value="todos">Todos</option>
                            <option value="api">API</option>
                            <option value="db">Base de datos</option>
                        </select>
                    </li>
                    <li>
                        <label>Temperamento: </label>
                        <select className={styles.navbarItem} name="temperament" onChange={handleTemperamentChange} defaultValue={temperament}>
                        <option key="todos" value="todos">Todos</option>
                        {temperaments.map((temp) => {
                            return <option key={temp.id} value={temp.name}>{temp.name}</option>
                        })}
                        </select>
                    </li>
                    <li>
                        <label>Ordenar: </label>
                        <select
                            defaultValue={order}
                            onChange={handleBreedsChange}
                            className={styles.navbarItem} 
                            name="breeds">
                            <option value="asc">Asc (A-Z)</option>
                            <option value="desc">Desc (Z-A)</option>
                        </select>
                    </li>
                    <li className={styles.searchButton}>
                        <button>Agregar  🐾</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}