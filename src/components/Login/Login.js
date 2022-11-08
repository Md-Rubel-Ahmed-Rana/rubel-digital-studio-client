import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = (value) => {
        const {email, password} = value;
        userLogin(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user)
        })
        .catch((error) => console.log(error))
    }

    return (
        <div className='bg-black px-20 py-10 '>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 w-1/2 h-60 mx-auto py-10 text-center rounded-xl">
                <input className='py-1 px-2 w-1/2' type="email" {...register("email", { required: true })} />
                <br />
                <br />
                <input className='py-1 px-2 w-1/2' type="password" {...register("password", { required: true })} />
                <br />
                <br />
                <input type="submit" className='bg-blue-800 text-xl w-1/2 cursor-pointer text-white px-10 py-2 rounded' value="Login" />
                <p className='text-white mt-2'>Don't have account?  <Link to="/register" className='text-blue-300'>Register</Link> </p>
                <button>Login with Google</button>
            </form>
        </div>
    );
};

export default Login;