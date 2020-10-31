import react from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Nav } from 'react-bootstrap'

const Navbar = () => {

    return (
        <>
            <Nav className="jsutify-content-center" activeKey="/" >
                <Nav.Item>
                    <NavLink 
                        to="/"
                        className="mr-1">
                        Home
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink 
                        to="/personajes"
                        className="mr-1">
                        Personajes
                    </NavLink>
                </Nav.Item>
                
            </Nav>
        </>
    )
}

export default Navbar;
