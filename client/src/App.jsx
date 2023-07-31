import styles from "../src/App.module.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import NewBreed from "./components/NewBreed/NewBreed";
import Detail from "./components/Detail/Detail";

function App() {
    return (
        <div className={styles.container}>
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
