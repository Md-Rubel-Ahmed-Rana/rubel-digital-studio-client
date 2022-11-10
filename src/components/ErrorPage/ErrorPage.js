import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from '../../image/notFound.png';

const ErrorPage = () => {
    return (
        <div className='bg-black py-10 h-screen'>
            <div className='w-1/2 mx-auto text-center bg-red-600 rounded-xl p-10'>
                <img className='w-1/2 rounded text-center mx-auto' src={ErrorImg} alt="" />
                <p className='lg:w-3/5 mx-auto my-4 text-white'>Oops!, The page you are looking is not exist or deleted or you are not a authorized user. Please try with correct url.</p>
                <button className='bg-blue-900 rounded mt-4 px-10 py-3 text-white'> <Link to="/">Go Back</Link> </button>
            </div>
        </div>
    );
};

export default ErrorPage;