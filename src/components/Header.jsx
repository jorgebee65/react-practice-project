import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <NavLink to="/">Home</NavLink>
        </React.Fragment>
    );
}

export default Header;