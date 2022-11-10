import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/UserContext';
import swal from 'sweetalert';
import useTitle from '../hooks/useTitle';

const ServiceDetails = () => {
    useTitle("Service Details")
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    const service = useLoaderData();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()


    
    // prevent from automatically scroll down 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const onSubmit = (value) => {

        if (user && user?.email){
            const review = {
                review_id: service._id,
                customer_name: value.name,
                avatar: value.avatar,
                email: value.email,
                service_name: service.name,
                service_price: service.price,
                photo: service.img,
                customer_review: value.reviw,
                time: new Date().getTime()
            }

            // create review and send it to database
            fetch("https://assignment-11-server-two-theta.vercel.app/reviews", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(review)
            })
                .then((res) => res.json())
                .then(() => {
                    swal("Good job!", "Review added successfully", "success");
                })
                .catch((error) => console.log(error))
        }else{
            navigate("/forcToLogin")
        }
    }

        // get the current service review
        useEffect(() => {
            fetch(`https://assignment-11-server-two-theta.vercel.app/reviewsById?review_id=${service?._id}`)
                .then((res) => res.json())
                .then((data) => setReviews(data))
                .catch((error) => console.log(error))
        }, [service?._id])


    return (
        <div className='px-20 bg-black flex  py-10'>
            <div className='w-1/2'>
                <div className='w-full mx-auto bg-gray-800 p-4 mb-4 rounded text-white'>
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

                    {
                    user && user?.email ? <div className='w-full mx-auto bg-gray-800 p-4 rounded text-white'>
                        <h3 className='text-3xl font-bold text-center'>Give Review Here</h3>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800  mx-auto py-10 text-center rounded-xl">
                                <input className='py-1 px-2 w-full text-black' defaultValue={user?.displayName} type="text" {...register("name", { required: true })} placeholder="Name" />
                                <br />
                                <br />
                                <input defaultValue={user?.email} className='py-1 px-2 w-full text-black' type="email" {...register("email", { required: true })} placeholder="Email" />
                                <br />
                                <br />
                                <input defaultValue={user?.photoURL } className='py-1 px-2 w-full text-black' type="text" {...register("avatar", { required: true })} placeholder="PhotoURL" />
                                <br />
                                <br />
                                <textarea className='py-1 px-2 w-full text-black' type="text" {...register("reviw", { required: true })} placeholder="Your review" />
                                <br />
                                <br />
                                <input type="submit" className='bg-blue-800 text-xl   cursor-pointer text-white px-10 py-2 rounded' value="Add Review" />
                            </form>
                        </div>
                    </div>
                        : <div className='w-full text-center mx-auto bg-gray-800 p-4 rounded text-white'>
                            <h3 className='text-xl my-1'>Please login to add your review</h3>
                            <button className='bg-pink-500 px-10 py-2 rounded my-3'> <Link to="/login">Login</Link> </button>
                        </div>
                    }

                    </div>
                    <div className='text-white w-1/2 py-3 px-10 text-center'>
                        <h2 className='text-4xl text-center mb-4'>Reviews of this service: {reviews.length}</h2>
                        <div>
                            {
                                reviews.length === 0 ? <h4 className='text-2xl text-center'>No reviews were added</h4>
                                    : <div>
                                        <div className='flex px-5 justify-between bg-blue-400 mx-3 py-2 rounded'>
                                            <h5 className='text-2xl'>Avatar</h5>
                                            <h5 className='text-2xl'>Viewers</h5>
                                            <h5 className='text-2xl'>Review</h5>
                                        </div>
                                        {
                                    reviews.map((review) => <div key={review._id} className='flex m-3 p-3 bg-gray-800 justify-between rounded items-center text-center'>
                                        <img className='h-12 w-12 rounded-full border-2 border-blue-400 m-1' src={review.avatar} alt="" />
                                                <h3>{review.customer_name}</h3>
                                                <p>{review.customer_review}</p>
                                            </div>)
                                        }
                                    </div>
                            }
                        </div>
                    </div>
        </div>
    );
};

export default ServiceDetails;