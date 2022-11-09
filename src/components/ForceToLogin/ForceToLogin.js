import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const ForceToLogin = () => {
    useTitle("Force to login")
    return (
        <div className='bg-black px-20 py-10'>
            <div className='w-2/5 bg-gray-800 rounded py-10 px-5 text-white mx-auto text-center'>
                <h4>Sorry, you can't do some actions without login</h4>
                <p> Please login to do</p>
                <button className='bg-pink-500 px-10 py-1 font-bold mt-4 rounded'> <Link to="/login">Login</Link> </button>
            </div>
        </div>
    );
};

export default ForceToLogin;