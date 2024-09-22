import { useState } from "react";
import { navLinks } from "../constants";

// taking common navItems to use both mobile and desktop responsiveness
const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() => { }}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);


    return (
        <header className='fixed left-0 right-0 z-50 bg-black/90 text-white'>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href={''} className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>Ashik</a>

                    <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-level='Toggle Menu'>
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt='toggle' className='w-6 h-6' />
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <NavItems />
            </div>
        </header>
    );
};

export default Navbar;