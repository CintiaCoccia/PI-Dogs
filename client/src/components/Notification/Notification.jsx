import styles from "./Notification.module.css";

export default function Notification(props) {
    return (
        <div className={styles.container}>
            {props.message}
        </div>
    )
}