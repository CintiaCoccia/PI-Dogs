import styles from "./Loading.module.css";
import Lottie from "lottie-react";
import loading from "./loading.json";

export default function Loading(props) {
    return (
        <div className={styles.container}>
            <Lottie className={styles.animation} animationData={loading} loop={true} />
        </div>
    );
}
