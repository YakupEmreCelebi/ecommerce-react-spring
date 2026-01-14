import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTags } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const navLinkClass =
    "font-semibold text-primary font-display transition-all duration-300";

  return (
    <header className="sticky top-0 z-20 bg-white w-full border-b-2 border-[var(--border-color)]">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex gap-2 items-center no-underline text-[var(--primary-color)] font-bold whitespace-nowrap"
        >
          <FontAwesomeIcon icon={faTags} />
          <span className="font-display text-[14px] sm:text-[18px]">Celebi Shop</span>
        </Link>

       <nav className="
            flex justify-end items-center flex-nowrap
            gap-x-2 sm:gap-x-5
            text-[12px] sm:text-[18px]
            ">

          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? `underline! decoration-2 underline-offset-8 ${navLinkClass}`
                : `no-underline ${navLinkClass}`
            }
          >
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) =>
              isActive ? `underline! decoration-2 underline-offset-8 ${navLinkClass}` : `no-underline ${navLinkClass}`
            }>
            About
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) =>
              isActive ? `underline! decoration-2 underline-offset-8 ${navLinkClass}` : `no-underline ${navLinkClass}`
            }>
            Contact
          </NavLink>

          <NavLink to="/login" className={({ isActive }) =>
              isActive ? `underline! decoration-2 underline-offset-8 ${navLinkClass}` : `no-underline ${navLinkClass}`
            }>
            Login
          </NavLink>

          <NavLink to="/cart" className={({ isActive }) =>
              isActive ? `underline! decoration-2 underline-offset-8 ${navLinkClass}` : `no-underline ${navLinkClass}`
            }>
            <FontAwesomeIcon icon={faShoppingBasket} />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
