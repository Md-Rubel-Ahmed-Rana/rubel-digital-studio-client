import React from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const UpdateReview = () => {
    const review = useLoaderData();

    const handleUpdateReview = (event) => {
        event.preventDefault();

        const form = event.target;
        const newReview = { customer_review: form.review.value };

        fetch(`http://localhost:5000/reviews/${review._id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            swal("Good Job!", "Review updated successfully", "success");
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className='bg-black py-10'>
            <form onSubmit={handleUpdateReview} className='text-center w-2/5 mx-auto rounded bg-gray-800 px-4 py-10'>
                <h4 className='text-2xl text-white mb-4 text-center'>Update your review</h4>
                <p className='text-xl text-white mb-3'>Your old review: <small className='font-bold text-xl '>{review.customer_review}</small> </p>
                <p>
                    <label  htmlFor="">
                        <small className="text-white text-xl">Update review:</small>
                    <input className='px-4 py-1 mx-1 text-black' type="text" name="review" id="" />
                    </label>
                </p>
                <button className='bg-pink-500 px-5 py-2 text-white font-bold mt-6 rounded' type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateReview;