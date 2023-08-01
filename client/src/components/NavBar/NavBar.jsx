import styles from "./NavBar.module.css";
import Home from "../Home/Home";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSource, filterTemperaments, orderBreeds, searchInput } from "../../redux/action";
import { Link } from "react-router-dom";

export default function NavBar(props) {
    const dispatch = useDispatch();
    const { temperaments } = props;
    const temperament = useSelector((state) => state.navBar.temperament);

    const order = useSelector((state) => state.navBar.order);
    const source = useSelector((state) => state.navBar.source);
    const search = useSelector((state) => state.navBar.search);

    const [input, setInput] = useState("");

    function handleInputChange(event) {
        setInput(event.target.value);
    }
    function handleSearch() {
        dispatch(searchInput(input));
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
                            defaultValue={search}
                            placeholder="Ingresa el nombre de la raza..."
                            onChange={handleInputChange}
                        />
                    </li>
                    <li className={styles.searchButton}>
                        <button onClick={handleSearch}>Search</button>
                    </li>
                    <li>
                        <label>Origen: </label>
                        <select
                            defaultValue={source}
                            className={styles.navbarItem}
                            name="breeds"
                            onChange={handleSourceChange}>
                            <option value="todos">All</option>
                            <option value="api">API</option>
                            <option value="db">Database</option>
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
                                All
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
                        <Link to="/dogs/new">
                            <button className={styles.addButton}>Add new breed </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
