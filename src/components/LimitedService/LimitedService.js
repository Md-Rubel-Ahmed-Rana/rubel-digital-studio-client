import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ColorRing } from 'react-loader-spinner';
import { FaArrowRight } from "react-icons/fa";

const LimitedService = () => {
    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch("https://assignment-11-server-two-theta.vercel.app/limited-service")
        .then((res) => res.json())
        .then((data) => setServices(data))
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className='my-3 bg-gray-800 text-white rounded-xl'>
            {
                services.length === 0 ? <div className='text-center'>
                    <h3 className='text-2xl'>Data Loading...</h3>
                    <div className='w-20 mx-auto'>
                        <ColorRing 
                            visible={true}
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                    </div>
                </div>
                : <>
                        <h3 className='text-4xl py-2 text-white text-center'>My Services</h3>
                        <div className='lg:flex gap-5 p-2'>
                            {
                                services.map((service) => <div className='bg-gray-700 p-3 rounded m-2 animate__animated animate__backInRight' key={service._id}>
                                    <PhotoProvider>
                                        <PhotoView src={service.img}>
                                            <img className='w-full h-40 rounded' src={service.img} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                    <h4 className='text-2xl font-bold text-center my-2'>{service.name}</h4>
                                    <div className='flex  justify-between mb-3'>
                                        <p>Price: {service.price}TK</p>
                                        <p>Rating: {service.rating}</p>
                                    </div>
                                    <p>{service.desc.slice(0, 100)}...</p>

                                    <p className='text-center mt-2'><button className='bg-pink-500 text-xl w-1/2 font-semibold px-5 py-2 rounded'><Link to={`/services/${service._id}`}>Details</Link></button></p>
                                </div>)
                            }
                        </div>
                        <div className='text-center py-6'>
                            <button className='bg-pink-500 rounded font-bold text-3xl px-4 py-2'> <Link to="/services"> <p className='flex items-center gap-3'> <small>See All </small><FaArrowRight /></p> </Link> </button>
                        </div>
                </> 
            }
            
        </div>
    );
};

export default LimitedService;