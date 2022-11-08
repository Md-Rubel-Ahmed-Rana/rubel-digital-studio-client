import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import {AuthContext} from '../../contexts/UserContext';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const { createUser, logout } = useContext(AuthContext)

    const onSubmit = (value) => {
        const { email, password } = value;
        createUser(email, password)
        .then(() =>{
            logout()
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className='bg-black px-20 py-10'>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 w-1/2 h-60 mx-auto py-10 text-center rounded-xl">
                <input className='py-1 px-2 w-1/2'  type="email" {...register("email", { required: true })} />
                <br />
                <br />
                <input className='py-1 px-2 w-1/2'  type="password" {...register("password", { required: true })} />
                <br />
                <br />
                <input type="submit" className='bg-blue-800 text-xl w-1/2 cursor-pointer text-white px-10 py-2 rounded' value="Register" />
            </form>
        </div>
    );
};

export default Register;