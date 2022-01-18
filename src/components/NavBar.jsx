import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <React.Fragment>
            <NavLink to="/transferir">Transferir</NavLink>
        </React.Fragment>
    );
}

export default NavBar;