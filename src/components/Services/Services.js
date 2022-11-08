import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ColorRing } from 'react-loader-spinner'

const Services = () => {
    const services = useLoaderData();

    // prevent from automatically scroll down 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className=' bg-gray-800 text-white px-20 py-4'>
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
                        <div className='grid grid-cols-3 gap-5 p-2'>
                            {
                                services.map((service) => <div className='bg-gray-700 p-3 rounded ' key={service._id}>
                                    <PhotoProvider>
                                        <PhotoView src={service.img}>
                                            <img className='w-full h-40 rounded' src={service.img} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                    <h4 className='text-2xl font-bold text-center mb-2'>{service.name}</h4>
                                    <div className='flex justify-between text-xl'>
                                        <p className='text-yellow-500 font-bold'>Price: {service.price}TK</p>
                                        <p className='text-yellow-500 font-bold'>Rating: {service.rating}</p>
                                    </div>
                                    <p className='text-xl'>{service.desc.slice(0, 100)}...</p>
                                    <p className='text-center'><button className='bg-pink-500 text-xl w-1/2 font-semibold px-5 py-2 mt-2 rounded'> <Link to={`/services/${service._id}`}>Details</Link> </button></p>
                                </div>)
                            }
                        </div>
                </>
            }
            
        </div>
    );
};

export default Services;