import styles from "./CardContainer.module.css";
import Card from "../Card/Card";

export default function CardContainer(props) {
    const { breeds } = props;

    return (
        <div className={styles.container}>
            {breeds.map((breed) => {
                return (
                    <Card
                        id={breed.id}
                        key={breed.id}
                        name={breed.name}
                        image={breed.image}
                        temperament={breed.temperament}
                        weight={breed.weight}
                    />
                );
            })}
        </div>
    );
}
