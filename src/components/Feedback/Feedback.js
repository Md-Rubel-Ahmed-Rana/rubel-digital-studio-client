import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import salman_khan  from "../../image/salman_khan.png"
import shahrukh_khan  from "../../image/shahrukh_khan.png"
import Hrithik_Roshan  from "../../image/Hrithik_Roshan.png"

const Feedback = () => {
    return (
        <div className='py-10'>
            <h3 className='text-5xl text-white font-bold text-center my-5'>Customers Feedback</h3>
            <div className='flex gap-10'>
                <div className='bg-gray-800 p-4 text-center text-white rounded-xl'>
                    <img className='w-full h-60' src={salman_khan} alt="" />
                    <h3>Salman khan</h3>
                    <p>Hey, This is Salman Khan, I have taken so many services from this man and his sevice is very good.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <ul className='flex gap-1 text-yellow-500'>
                            <li> <FaStar /> </li> 
                            <li> <FaStar /> </li> 
                            <li> <FaStar /> </li> 
                            <li> <FaStarHalfAlt /> </li> 
                            <li> <FaStarHalfAlt /> </li> 
                        </ul>
                        <p className='text-yellow-500'>Ratings: 4.5</p>
                    </div>
                </div>
                <div className='bg-gray-800 p-4 text-center text-white rounded-xl'>
                    <img className='w-full h-60' src={shahrukh_khan} alt="" />
                    <h3>Shahrukh khan</h3>
                    <p>Hey, This is Shahrukh khan, I have taken so many services from this man and his sevice is very good.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <ul className='flex gap-1 text-yellow-500'>
                            <li> <FaStar /> </li> 
                            <li> <FaStar /> </li> 
                            <li> <FaStar /> </li> 
                            <li> <FaStarHalfAlt /> </li> 
                            <li> <FaStarHalfAlt /> </li> 
                        </ul>
                        <p className='text-yellow-500'>Ratings: 3.9</p>
                    </div>
                </div>
                <div className='bg-gray-800 p-4 text-center text-white rounded-xl'>
                    <img className='w-full h-60' src={Hrithik_Roshan} alt="" />
                    <h3>Hrithik Roshan</h3>
                    <p>Hey, This is Hrithik Roshan, I have taken so many services from this man and his sevice is very good.</p>
                    <div className='flex justify-between items-center mt-4'>
                        <ul className='flex gap-1 text-yellow-500'>
                            <li> <FaStar /> </li> 
                            <li> <FaStar /> </li> 
                            <li> <FaStar /> </li> 
                            <li> <FaStarHalfAlt /> </li> 
                            <li> <FaStarHalfAlt /> </li> 
                        </ul>
                        <p className='text-yellow-500'>Ratings: 4.2</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;