import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import useTitle from '../hooks/useTitle';

import useToken from '../hooks/useToken';


const Login = () => {
    useTitle("Login");
    const storeToken = useToken();
    const { userLogin, setUser, googeLogin } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = (value) => {
        const {email, password} = value;

        userLogin(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            const currentUser = { email: user.email}

            // get jwt token and save it localStorage
            storeToken(currentUser); 
        })
        .catch((error) => console.log(error))
    }

    const handleGoogleLogin = () => {
        googeLogin()
        .then((result) => {
            const user = result.user;
            setUser(user)
            const currentUser = {email: user.email}

            // get jwt token and save it localStorage
            storeToken(currentUser)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className='bg-black lg:px-20 py-10 '>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 lg:w-1/2  mx-auto py-10 text-center rounded-xl">
                <input className='py-1 px-2 lg:w-1/2' type="email" {...register("email", { required: true })} />
                <br />
                <br />
                <input className='py-1 px-2 lg:w-1/2' type="password" {...register("password", { required: true })} />
                <br />
                <br />
                <input type="submit" className='bg-blue-800 text-xl lg:w-1/2 cursor-pointer text-white px-10 py-2 rounded' value="Login" />
                <p className='text-white mt-2'>Don't have account?  <Link to="/register" className='text-blue-300'>Register</Link> </p>
                <p onClick={handleGoogleLogin} className='border-2 lg:w-2/5 w-1/2 mx-auto cursor-pointer rounded-xl text-white bg-gray-600 hover:bg-blue-600 hover:border-gray-600 lg:px-4 py-1 my-2 border-blue-500'>Login with Google</p>
            </form>
        </div>
    );
};

export default Login;