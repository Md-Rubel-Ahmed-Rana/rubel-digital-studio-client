import React from 'react';
import Banner from '../Banner/Banner';
import useTitle from '../hooks/useTitle';
import LimitedService from '../LimitedService/LimitedService';

const Home = () => {
    useTitle("Home")
    return (
        <div className='bg-black px-20 py-3'>
            <Banner />
            <LimitedService />
        </div>
    );
};

export default Home;