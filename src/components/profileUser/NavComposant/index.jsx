import React from 'react';
import { Link } from 'react-router-dom';

const NavComposant = () => {
    const userId = localStorage.getItem('userId');

    return (
        <div>
            <Link to={`/user/${userId}`}>
            </Link>
        </div>
    );
};

export default NavComposant;