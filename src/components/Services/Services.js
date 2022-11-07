import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData()
    return (
        <div className=' bg-gray-800 text-white px-20 py-4'>
            <h3 className='text-4xl py-2 text-white text-center'>My Services</h3>
            <div className='grid grid-cols-3 gap-5 p-2'>
                {
                    services.map((service) => <div className='bg-gray-700 p-3 rounded ' key={service._id}>
                        <img className='w-full h-40 rounded' src={service.img} alt="" />
                        <h4 className='text-2xl font-bold text-center mb-2'>{service.name}</h4>
                        <div className='flex justify-between text-xl'>
                            <p>Price: {service.price}TK</p>
                            <p>Rating: {service.rating}</p>
                        </div>
                        <p>{service.desc.slice(0, 100)}...</p>
                        <p className='text-center'><button className='bg-pink-500 text-xl w-1/2 font-semibold px-5 py-2 rounded'> <Link to={`/services/${service._id}`}>Details</Link> </button></p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;