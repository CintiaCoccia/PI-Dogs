//import styles from './Home.module.css';
import Card from '../Card/Card';
import NavBar from '../NavBar/NavBar';

export default function(props) {

    return(
        <div>
            <NavBar />
            <Card name="Affenpinscher" image="https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg" temperament="Stubborn, Curious, Playful, Adventurous, Active, Fun-loving" weight="23 - 29 kg"/>
        </div>
    )
}
