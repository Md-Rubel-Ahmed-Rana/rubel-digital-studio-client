import React, { useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';
import ReviewTable from './ReviewTable';

const Reviews = () => {
    useTitle("Reviews")
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data))
    }, [reviews])


    const handleDeleteReview  = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))
    }


    return (
        <div className="px-20 py-10">
            <div>
                <table className="table w-full border-2">
                    <thead className='text-center'>
                        <tr>
                            <th className="text-xl">Avatar</th>
                            <th className="text-xl">Name</th>
                            <th className="text-xl">Email</th>
                            <th className="text-xl">Service</th>
                            <th className="text-xl">Price</th>
                            <th className="text-xl">Review</th>
                            <th className="text-xl">Edit</th>
                            <th className="text-xl">Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            reviews.map((review) => <ReviewTable 
                            review={review}
                            handleDeleteReview={handleDeleteReview}
                            key={review._id} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;