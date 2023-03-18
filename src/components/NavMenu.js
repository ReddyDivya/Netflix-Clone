import { NavLink } from 'react-router-dom';
import '../styles/NavMenu.css';

function NavMenu() {
    return (
        <div className="nav-items">
            <ul>
                <NavLink to="/Action" className="nav-item">
                    <li>Action</li>
                </NavLink>
                <NavLink to="/Comedy" className="nav-item">
                    <li>Comedy</li>
                </NavLink>
                <NavLink to="/Horror" className="nav-item">
                    <li>Horror</li>
                </NavLink>
                <NavLink to="/Romance" className="nav-item">
                    <li>Romance</li>
                </NavLink>
                <NavLink to="/Documentry" className="nav-item">
                    <li>Documentaries</li>
                </NavLink>
            </ul>
        </div>
    );
}

export default NavMenu