import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import { ColorRing } from 'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading){
        return <div className='text-center'>
            <h3 className='text-2xl'>Data Loading...</h3>
            <div className='w-20 mx-auto'>
                <ColorRing
                    visible={true}
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            </div>
        </div>
    }
    

    if (!user?.email){
        return <Navigate to="/forcToLogin" />
    }else{
        return children
    }
};

export default PrivateRoute;