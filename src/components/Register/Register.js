import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import {AuthContext} from '../../contexts/UserContext';
import useTitle from '../hooks/useTitle';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    useTitle("Register")
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const { createUser, logout, updateUserProfile, googeLogin, setUser } = useContext(AuthContext)

    const onSubmit = (value) => {
        const { name, photoURL,  email, password } = value;
      
        createUser(email, password)
        .then(() =>{
            handleProfileUpdate(name, photoURL )
            logout();
            swal("Good job!", "Registered in successfully", "success");
            navigate("/")
        })
        .catch((err) => console.log(err))
    }

    const handleProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() =>{})
        .catch((error) => console.log(error))
    }

    const handleGoogleLogin = () => {
        googeLogin()
            .then((result) => {
                const user = result.user;
                setUser(user)
                swal("Good job!", "Login successfully", "success");
                navigate("/")
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='bg-black px-20 py-10'>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 w-1/2 mx-auto py-10 text-center rounded-xl">
                <input className='py-1 px-2 w-1/2' type="text" {...register("name", { required: true })} placeholder="Name" />
                
                <br />
                <br />
                <input className='py-1 px-2 w-1/2' type="email" {...register("email", { required: true })} placeholder="Email" />
                <br />
                <br />
                <input className='py-1 px-2 w-1/2' type="text" {...register("photoURL", { required: true })} placeholder="PhotoURL" />
                <br />
                <br />
                <input className='py-1 px-2 w-1/2' type="password" {...register("password", { required: true })} placeholder="Password" />
                <br />
                <br />
                <input type="submit" className='bg-blue-800 text-xl w-1/2 cursor-pointer text-white px-10 py-2 rounded' value="Register" />

                <p onClick={handleGoogleLogin} className='border-2 w-2/5 mx-auto cursor-pointer rounded-xl text-white bg-gray-600 hover:bg-blue-600 hover:border-gray-600 px-4 py-1 my-2 border-blue-500'>Login with Google</p>
            </form>
        </div>
    );
};

export default Register;