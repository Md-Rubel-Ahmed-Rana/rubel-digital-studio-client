import React from 'react';
import { useForm } from "react-hook-form";
import useTitle from '../hooks/useTitle';
import swal from 'sweetalert';

const AddService = () => {
    useTitle("Add Service")
    const { register, handleSubmit } = useForm();

    const onSubmit = (value) => {
        fetch("https://assignment-11-server-two-theta.vercel.app/services", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(value)
        })
            .then((res) => res.json())
            .then(() => {
                swal("Good job!", "Service successfully", "success");
            })
            .catch((error) => console.log(error))

    }

    

    return (
        <div className='bg-black lg:px-20  p-2'>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 lg:w-3/5 mx-auto p-5 text-center rounded-xl">
                <input className='py-1 px-2 lg:w-1/2 w-full rounded' type="text" {...register("name", { required: true })} placeholder="Service Name" />
                <br />
                <br />
                <input className='py-1 px-2 lg:w-1/2 w-full rounded' type="text" {...register("price", { required: true })} placeholder="Price" />
                <br />
                <br />
                <input className='py-1 px-2 lg:w-1/2 w-full rounded' type="text" {...register("imageURL", { required: true })} placeholder="Image URL" />
                <br />
                <br />
                <input className='py-1 px-2 lg:w-1/2 w-full rounded' type="text" {...register("rating", { required: true })} placeholder="Rating" />
                <br />
                <br />
                <textarea className='py-1 px-2 lg:w-1/2 w-full rounded' type="text" {...register("desc", { required: true })} placeholder="Description: must be 100 charecters or more" />
                <br />
                <br />
                <input type="submit" className='bg-blue-800 text-xl lg:w-1/2 w-full cursor-pointer text-white px-10 py-2 rounded' value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;