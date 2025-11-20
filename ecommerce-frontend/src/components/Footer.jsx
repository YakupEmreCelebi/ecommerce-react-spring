import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; 

import styles from './css/Footer.module.css';

function Footer() {

    return(

        <footer className={styles.footer}>
            <div className={styles.container}>
                <span>Built with</span>
                <FontAwesomeIcon icon={faHeart} className={styles.icon}/>
                <span>by</span>
                <a href="">Celebi</a>
            </div>
        </footer>
        
    );
}
export default Footer