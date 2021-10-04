import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png'

const Header = () => {
    return (
        <div>
            <img className="mt-4 mb-5 mx-10" src={logo} alt="" />

            <nav className="bg-black text-white text-2xl font-medium h-12">
                <Link className="mx-10" to="/home">Home</Link>
                <Link className="mx-10" to="/Class">Class</Link>
                <Link className="mx-10" to="/trainers">Trainers</Link>
                <Link className="mx-10" to="/about">About Us</Link>

            </nav>

        </div>
    );
};

export default Header;