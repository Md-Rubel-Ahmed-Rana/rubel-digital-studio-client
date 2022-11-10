import React from 'react';
import Banner from '../Banner/Banner';
import Feedback from '../Feedback/Feedback';
import useTitle from '../hooks/useTitle';
import LimitedService from '../LimitedService/LimitedService';
import Payments from '../Payments/Payments';

const Home = () => {
    useTitle("Home")
    return (
        <div className='bg-black lg:px-20 py-3'>
            <Banner />
            <LimitedService />
            <Feedback />
            <Payments />
        </div>
    );
};

export default Home;