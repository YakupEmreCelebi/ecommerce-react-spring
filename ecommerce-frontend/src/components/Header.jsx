import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";
import styles from './css/Header.module.css'

function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="/" className={styles.logo}>
                    <FontAwesomeIcon icon={faTags}/>
                    <span>Celebi Shop</span>
                </a>

                <nav className={styles.nav}>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                    <a href="/login">Login</a>
                    <a href="/cart">
                        <FontAwesomeIcon icon={faShoppingBasket}/>
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
