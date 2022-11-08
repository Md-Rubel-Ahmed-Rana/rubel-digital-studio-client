import React, { useEffect, useState } from 'react';
// import ReviewTable from './ReviewTable';
import "./Reviews.css"
import ReviewTable from './ReviewTable';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data))
    }, [])

    return (
        <div className="overflow-x-auto px-20 py-10 w-full">
            <div >
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
                            reviews.map((review) => <ReviewTable review={review} key={review._id} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;