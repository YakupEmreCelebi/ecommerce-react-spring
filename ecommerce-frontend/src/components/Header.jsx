import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Header() {
    // text-primary ve font-display zaten index.css'deki @theme içinde tanımlı
    const navLinkClass = "font-semibold text-primary font-display transition-all duration-300";

    return (
        <header className="sticky top-0 z-20 text-[18px] bg-white">
            <div className="flex flex-row items-center justify-between mx-auto py-5 px-[20%] border-b-2 border-[var(--border-color)] rounded-[5px] shadow-md">
                
                <Link to="/" className="flex gap-[10px] items-center no-underline text-[var(--primary-color)] font-bold">
                    <FontAwesomeIcon icon={faTags}/>
                    <span className="font-display">Celebi Shop</span>
                </Link>

                <nav className="flex flex-row items-center justify-center gap-5">
                    {/* isActive durumunda !underline kullanarak diğer tüm kuralları eziyoruz */}
                    <NavLink to="/home" className={({isActive}) => isActive ? `underline! decoration-2 underline-offset-8 ${navLinkClass}` : `no-underline ${navLinkClass}`}>Home</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? `underline! decoration-2 underline-offset-8 ${navLinkClass}` : `no-underline ${navLinkClass}`}>About</NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? `underline! decoration-2 underline-offset-8 ${navLinkClass}` : `no-underline ${navLinkClass}`}>Contact</NavLink>
                    <NavLink to="/login" className={({isActive}) => isActive ? `underline! decoration-2 underline-offset-8 ${navLinkClass}` : `no-underline ${navLinkClass}`}>Login</NavLink>
                    <NavLink to="/cart" className={({isActive}) => isActive ? `underline! decoration-2 underline-offset-8 ${navLinkClass}` : `no-underline ${navLinkClass}`}>
                        <FontAwesomeIcon icon={faShoppingBasket}/>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;