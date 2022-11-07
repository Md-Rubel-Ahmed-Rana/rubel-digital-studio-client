import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../image/logo.png"

const Header = () => {
    return (
        <div className='flex justify-between items-center py-3 px-20 bg-blue-900'>
            <div className='flex items-center gap-3'>
                <img className='w-12 h-12 rounded-full' src={logo} alt="" />
                <h3 className='text-3xl text-white font-bold'>Rubel Digital Studio</h3>
            </div>
            <div>
                <ul className='flex text-white gap-4 text-xl'>
                    <li> <Link>Home</Link> </li>
                    <li> <Link>My Reviews</Link></li>
                    <li> <Link>Add Service</Link></li>
                    <li> <Link>Blog</Link> </li>
                    <li> <Link to="/login">Login</Link> </li>
                    <li> <Link>Logout</Link> </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;