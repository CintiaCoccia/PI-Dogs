import styles from "../src/App.module.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import NewBreed from "./components/NewBreed/NewBreed";
import Detail from "./components/Detail/Detail";
import Notification from "./components/Notification/Notification";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearMessage } from "./redux/action";

function App() {
    
    const dispatch = useDispatch();
    const message = useSelector((state) => state.alertMessage)

    useEffect(() => {
        if(message) {
        setTimeout(() => {
        dispatch(clearMessage())
        },4000)
    }
    },[message])
    
    return (
        <div className={styles.container}>
            { message ? <Notification message={message}/> : null}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/dogs/new" element={<NewBreed />} />
                <Route path="/dogs/:id" element={<Detail />} />
            </Routes>
        </div>
    );
}

export default App;
