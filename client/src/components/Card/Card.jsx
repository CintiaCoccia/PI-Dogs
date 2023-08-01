import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import placeholder from "../../assets/placeholder.png";

function Card(props) {
    const { name, image, temperament, weight, id } = props;
    
    function handleErrorImage(error) {
        error.target.src = placeholder
    } 

    return (
        <div>
            <Link to={"/dogs/" + id}>
                <div className={styles.container}>
                    <img className={image} src={image ? image:placeholder} alt={name} onError={handleErrorImage}/>
                    <div className={styles.textContainer}>
                        <div className={styles.center}>
                            <div className={styles.title}>{name}</div>
                            <div className={styles.subtitle}>{temperament}</div>
                            <div className={styles.subtitle}>{weight}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
