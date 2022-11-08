import { useLoaderData } from 'react-router-dom';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/UserContext';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { register, handleSubmit } = useForm();

    const onSubmit = (value) => {
        const review = {
            customer_name: value.name,
            email: value.email,
            service_name: service.name,
            service_price: service.price,
            photo: service.img,
            customer_review: value.reviw
        }


        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(review)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
    }

    return (
        <div className='px-20 bg-black  py-10'>
           <div className='w-1/2 mx-auto bg-gray-800 p-4 mb-4 rounded text-white'>
                <h3 className='text-4xl text-center font-bold my-2'>Service you have chosen!!</h3>
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
            <div className='w-1/2 mx-auto bg-gray-800 p-4 rounded text-white'>
                <h3 className='text-3xl font-bold text-center'>Give Review Here</h3>
                <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800  mx-auto py-10 text-center rounded-xl">
                            <input className='py-1 px-2 w-full text-black' defaultValue={user?.displayName} type="text" {...register("name", { required: true })} placeholder="Name" />
                            <br />
                            <br />
                            <input defaultValue={user?.email} className='py-1 px-2 w-full text-black' type="email" {...register("email", { required: true })} placeholder="Email" />
                            <br />
                            <br />
                            <input defaultValue={user?.photoURL ? user?.photoURL : "PhototURL not added"} className='py-1 px-2 w-full text-black' type="text" {...register("photoURL", { required: true })} placeholder="PhotoURL" />
                            <br />
                            <br />
                            <textarea className='py-1 px-2 w-full text-black' type="text" {...register("reviw", { required: true })} placeholder="Your review" />
                            <br />
                            <br />
                            <input type="submit" className='bg-blue-800 text-xl   cursor-pointer text-white px-10 py-2 rounded' value="Add Review" />
                        </form>
                </div>
           </div>
        </div>
    );
};

export default ServiceDetails;