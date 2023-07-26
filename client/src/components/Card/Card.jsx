import styles from "./Card.module.css";
//import { Link } from "react-router-dom";

function Card(props) {

const { name, image, temperament, weight } = props   

    return (
        <div>
            <div className={styles.container}>
                <img className={image} src={image} alt={name} />
                <div className={styles.textContainer}>
                    <div className={styles.center}>
                        <div className={styles.title}>{name}</div>
                        <div className={styles.subtitle}>{temperament}</div>
                        <div className={styles.subtitle}>{weight}</div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Card;