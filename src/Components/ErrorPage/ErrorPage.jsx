import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            OOps
            <NavLink to="/">Go Back HOme</NavLink>
        </div>
    );
};

export default ErrorPage;