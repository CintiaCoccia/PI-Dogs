import styles from "./Button.module.css";

export default function Button(props) {
    const { name, onClick } = props;

    return (
        <div className={styles.container}>
            <button onClick={onClick}>{name}</button>
        </div>
    );
}
