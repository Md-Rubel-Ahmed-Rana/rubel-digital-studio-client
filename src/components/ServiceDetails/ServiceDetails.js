import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div className='px-20 bg-black flex gap-10 py-10'>
           <div className='w-full bg-gray-800 p-4 rounded text-white'>
                <h3 className='text-4xl'>Service Section</h3>
                <div>
                    <img className='w-full h-40' src={service.img} alt="" />
                    <h4 className='text-2xl font-bold text-center mb-2'>{service.name}</h4>
                    <div className='flex justify-between text-xl'>
                        <p>Price: {service.price}TK</p>
                        <p>Rating: {service.rating}</p>
                    </div>
                    <p>{service.desc}</p>
                </div>
           </div> 
            <div className='w-full bg-gray-800 p-4 rounded text-white'>
            <h3 className='text-4xl'>Review Section</h3>
            <div>
                <h4>Viewer Image</h4>
                <h3>Viewer Name</h3>
                <p>Viewer comment</p>
                <p>Viewer Rating</p>
            </div>
           </div>
        </div>
    );
};

export default ServiceDetails;