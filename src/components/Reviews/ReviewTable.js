import React from 'react';

const ReviewTable = ({ review, handleDeleteReview }) => {
    const {_id, customer_name, email, service_name, service_price, photo, customer_review } = review
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img  src={photo} alt="ServicePicture" />
                    </div>
                </div>
            </td>
            <td>
                <span className="text-md font-bold">{customer_name}</span>
            </td>
            <td>
                <span className="text-md font-bold">{email}</span>
            </td>
            <td>
                <span className="text-md font-bold">{service_name}</span>
            </td>
            <td>
                <span className="text-md font-bold"> {service_price}TK </span>
            </td>
            <td>
                <span className="text-md font-bold"> {customer_review} </span>
            </td>
            <td>
                <span className="text-md bg-blue-500 text-white px-2 py-1 rounded cursor-pointer">Edit</span>
            </td>
            <td>
                <span onClick={() => handleDeleteReview(_id)} className="text-md bg-red-500 text-white px-2 py-1 rounded cursor-pointer">Delete</span>
            </td>
        </tr>
    );
};

export default ReviewTable;