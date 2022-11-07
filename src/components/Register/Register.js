import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />

            <input {...register("exampleRequired", { required: true })} />

            <input type="Register" />
        </form>
    );
};

export default Register;