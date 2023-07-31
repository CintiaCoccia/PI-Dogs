import styles from "./NavBar.module.css";
import Home from "../Home/Home";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSource, filterTemperaments, orderBreeds, searchInput } from "../../redux/action";

export default function NavBar(props) {
    const dispatch = useDispatch();
    const { temperaments } = props;
    const temperament = useSelector((state) => state.navBar.temperament);

    const order = useSelector((state) => state.navBar.order);
    const source = useSelector((state) => state.navBar.source);

    const [input, setInput] = useState("");

    function handleInputChange(event) {
        setInput(event.target.value);
    }
    function handleSearch() {
        dispatch(searchInput(input))
    }

    function handleTemperamentChange(event) {
        dispatch(filterTemperaments(event.target.value));
    }
    function handleBreedsChange(event) {
        dispatch(orderBreeds(event.target.value));
    }
    function handleSourceChange(event) {
        dispatch(filterSource(event.target.value));
    }

    return (
        <div className={styles.container}>
            <div>
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
                            onChange={handleInputChange}
                        />
                    </li>
                    <li className={styles.searchButton}>
                        <button className={styles.navbarItem} onClick={handleSearch}>Buscar 🔍</button>
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
                        <label>Temperament: </label>
                        <select
                            className={styles.navbarItem}
                            name="temperament"
                            onChange={handleTemperamentChange}
                            defaultValue={temperament}>
                            <option key="todos" value="todos">
                                Todos
                            </option>
                            {temperaments.map((temp) => {
                                return (
                                    <option key={temp.id} value={temp.name}>
                                        {temp.name}
                                    </option>
                                );
                            })}
                        </select>
                    </li>
                    <li>
                        <label>Order: </label>
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
                        <button>Agregar 🐾</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
