import React from 'react';

const ReviewTable = ({ review }) => {
    const { customer_name, email, service_name, service_price, photo, customer_review } = review
    return (
            <tr className='flex p-5'>
                <td> <img className='h-14 w-14' src={photo} alt="" /> </td>
                <td>{customer_name}</td>
                <td>{email}</td>
                <td>{service_name}</td>
                <td>{service_price}</td>
                <td>{customer_review}</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr> 
    );
};

export default ReviewTable;