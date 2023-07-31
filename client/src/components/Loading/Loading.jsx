import styles from "./Loading.module.css";

export default function Loading(props) {
    return (
        <div className={styles.container}>
            <span className={styles.loader}></span>
        </div>
    );
}
