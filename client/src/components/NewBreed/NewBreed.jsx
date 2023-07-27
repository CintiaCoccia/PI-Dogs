import styles from './NewBreed.module.css';
import Validation from './Validation';
import { useNavigate } from 'react-router-dom';


export default function NewBreed() {

    const navigate = useNavigate()

    function goToHome() {
        navigate("/home")
    }

    function buttonDisable() {
        return (errors.name || errors.height || errors.weight || errors.life_span || errors.temperament)
    }

    const [ newBreedData, setnewBreedData ] = useState({ 
        name:"",
        height:"",
        weight:"",
        life_span:"",
        temperament:"",
     });

    const [errors, setErrors] = useState({
        name:null,
        height:null,
        weight:null,
        life_span:null,
        temperament:null,
    }); 

    const handleinputChange = event => { 
        const {name, value} = event.target;
        setnewBreedData({
            ...newBreedData,
            [name]:value
        }) 
        setErrors(
            Validation({
                ...newBreedData, 
                [name]:value
        })
    )
    };
    
    return (
        <div className={styles.container}>

            <form>

                <h2>Crear nueva raza</h2>
                
                <label>Nombre: </label>
                <input type="text" name="name" onChange={handleinputChange}/>
                <p className={styles.errors}>{errors.name}</p>
                <br />
                
                <label>Altura: </label>
                <input type="text" name="height" placeholder='Valor minimo'onChange={handleinputChange}/>
                <input type="text" name="height" placeholder='Valor máximo'/>
                <p className={styles.errors}>{errors.name}</p>

                <br />

                <label>Peso: </label>
                <input type="text" name="weight" placeholder='Valor mínimo'onChange={handleinputChange}/>
                <input type="text" name="weight" placeholder='Valor máximo'/>
                <p className={styles.errors}>{errors.name}</p>

                <br />

                <label>Años de vida: </label>
                <input name="life_span" placeholder='Valor mínimo'onChange={handleinputChange}/>
                <input name="life_span" placeholder='Valor máximo'/>
                <p className={styles.errors}>{errors.name}</p>
                <br />

                <label>Temperamento: </label>
                <option value="temperament">temperamentos</option>
                <p className={styles.errors}>{errors.name}</p>

                <br />
                <div>
                <button type="submit" disabled={buttonDisable()}>Crear</button>
                </div>

            </form>
        </div>
    )  
}
