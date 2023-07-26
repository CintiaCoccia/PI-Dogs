import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

export default function Home(props) {

    const [ breeds, setBreeds ] = useState([])
    const [ temperaments, setTemperaments] = useState([]);

    async function getAllBreeds() {
        try {
            const result = await axios("http://localhost:3001/dogs");
            setBreeds(result.data);
        } catch(error) {
            console.log(error)
        }
    }

    async function getAllTemperaments() {
        try {
            const result = await axios("http://localhost:3001/temperaments");
            setTemperaments(result.data);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllBreeds()
        getAllTemperaments();
    },[]); 


    return(
        <div>
            <NavBar temperaments={temperaments}/>
            <CardContainer breeds={breeds} className={styles.container}/>
        </div>
    )
}
