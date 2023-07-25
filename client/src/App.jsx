import styles from '../src/App.module.css'
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';

function App() {
  
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App;

{/* <Routes>
{/* <Route path="/" element={<Landing />}/>
<Route path="/home" element={<Home />}/> */}
//</Routes> */}

{/* <Route path="/home" element={<Home />}/>
<Route path="/dogs/:id" element={<Detail />}/>
<Route path="/dogs/new" element={<NewDog/>}/> */}
