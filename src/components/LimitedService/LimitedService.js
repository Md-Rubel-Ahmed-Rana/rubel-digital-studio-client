import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LimitedService = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/limited-service")
        .then((res) => res.json())
        .then((data) => setServices(data))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className='my-3 bg-gray-800 text-white rounded-xl'>
            <h3 className='text-4xl py-2 text-white text-center'>My Services</h3>
            <div className='flex gap-5 p-2'>
                {
                    services.map((service) => <div className='bg-gray-700 p-3 rounded ' key={service._id}>
                        <img className='w-full h-40 rounded' src={service.img} alt="" />
                        <h4 className='text-2xl font-bold text-center mb-2'>{service.name}</h4>
                        <div className='flex justify-between text-xl'>
                            <p>Price: {service.price}TK</p>
                            <p>Rating: {service.rating}</p>
                        </div>
                        <p>{service.desc.slice(0, 100)}...</p>
                        <p className='text-center'><button className='bg-pink-500 text-xl w-1/2 font-semibold px-5 py-2 rounded'>Details</button></p>
                    </div>)
                }
            </div>
            <div className='text-center py-6'>
                <button className='bg-pink-500 rounded font-bold text-3xl px-4 py-2'> <Link to="/services">See All</Link> </button>
            </div>
        </div>
    );
};

export default LimitedService;