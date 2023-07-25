import styles from './Landing.module.css'
import Button from '../Button/button';
import { useNavigate } from 'react-router-dom';
import backg from "../../assets/backg.jpeg"

export default function Landing(props) {
    const navigate = useNavigate();
    function goToHome() {
        navigate("/home")
    }

    return (
        <div className={styles.container}>
            <Button name="Ingresar" onClick={goToHome}></Button>
            <img src={backg} alt=""/> 
        </div>
    ) 

}

