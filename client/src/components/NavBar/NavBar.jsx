import styles from "./NavBar.module.css";
import Home from "../Home/Home";


export default function NavBar(props) {

    const { temperaments } = props
    
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
                        />
                    </li>
                    <li className={styles.searchButton}>
                        <button className={styles.navbarItem}>Buscar 🔍</button>
                    </li>
                    <li>
                        <label>Origen: </label>
                        <select
                            className={styles.navbarItem} 
                            name="breeds">
                            <option value="api">Todos</option>
                            <option value="api">API</option>
                            <option value="db">Base de datos</option>
                        </select>
                    </li>
                    <li>
                        <label>Temperamento: </label>
                        <select className={styles.navbarItem} name="temperament">
                        {temperaments.map((temp) => {
                            return <option key={temp.id} value={temp.name}>{temp.name}</option>
                        })}
                        </select>
                    </li>
                    <li>
                        <label>Ordenar: </label>
                        <select
                            className={styles.navbarItem} 
                            name="breeds">
                            <option value="alf-asc">Asc (A-Z)</option>
                            <option value="alf-desc">Desc (Z-A)</option>
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