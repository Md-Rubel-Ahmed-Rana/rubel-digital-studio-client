import React, { useEffect, useState } from 'react';
// import ReviewTable from './ReviewTable';
import "./Reviews.css"

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data))
    }, [])

    return (
        <div className='px-20 py-10 bg-black'>
            <table id='table' className='bg-gray-800  text-white mx-auto rounded'>
                <thead>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>Price</th>
                    <th>Review</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </thead>
                <hr />
                <tbody>
                    {/* {
                        reviews.map((review) => <ReviewTable
                            key={review._id}
                            review={review}
                        />)
                    } */}
                    {
                        reviews.map((review) => <tr className='m-2 p-5'>
                            <td> <img className='w-12 h-12' src={review.photo} alt="" /> </td>
                            <td>{review.customer_name}</td>
                            <td>{review.email}</td>
                            <td>{review.service_name}</td>
                            <td>{review.service_price}</td>
                            <td>{review.customer_review}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
    );
};

export default Reviews;