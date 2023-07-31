import styles from "./Errors.module.css";
import Lottie from "lottie-react";
import error from "./images/error.json";
import { useEffect, useRef } from "react";

export default function Errors(props) {
    const lottie = useRef();

    const { message } = props;

    useEffect(() => {
        lottie.current.setSpeed(1);
    }, []);

    return (
        <div className={styles.errorContainer}>
            <Lottie className={styles.errorImage} animationData={error} lottieRef={lottie} loop={true} />
            <div className={styles.errorTitle}>{message}</div>
        </div>
    );
}
