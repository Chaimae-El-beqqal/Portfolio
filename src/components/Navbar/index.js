import './index.css';
import { NavLink } from 'react-router-dom';



const Navbar = ()=> (
         <nav className='nav'>
            <NavLink className="bounce" to="#About">00.About</NavLink>
            <NavLink className="bounce" to="#Projects">01.Projects</NavLink>
            <NavLink className="bounce" to="#Contact">10.Contact</NavLink>
         </nav>
    );

export default Navbar;