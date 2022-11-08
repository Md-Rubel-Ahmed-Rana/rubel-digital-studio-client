import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';
import ReviewTable from './ReviewTable';
import swal from 'sweetalert';
import { AuthContext } from '../../contexts/UserContext';

const Reviews = () => {
    useTitle("Reviews")
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    // get reviews with email
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
    }, [user?.email])


    // Delete review
    const handleDeleteReview  = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then(() => {
            const remainingReviews = reviews.filter((review) => review._id !== id);
            setReviews(remainingReviews)
            swal("Done!", "Review deleted successfully", "warning");
        })
        .catch((err) => console.log(err))
    }


    return (
        <div className="px-20 py-10">
            <div>
                {
                    reviews.length === 0 ? <h4 className='text-2xl text-center'>No reviews were added</h4>
                    : <table className="table w-full border-2">
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
                }
            </div>
        </div>
    );
};

export default Reviews;