import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from "../../image/logo.png"

const Header = () => {
    const { user, logout } = useContext(AuthContext)
    console.log(user);
    return (
        <div className='flex justify-between items-center py-3 px-20 bg-blue-900'>
            <div className='flex items-center gap-3'>
                <img className='w-12 h-12 rounded-full' src={logo} alt="" />
                <h3 className='text-3xl text-white font-bold'>Rubel Digital Studio</h3>
            </div>
            <div>
                <ul className='flex text-white gap-4 text-xl'>
                    <li> <Link to="/home">Home</Link> </li>
                    {
                        user?.email ? 
                        <>
                            <li> <Link to="/reviews">My Reviews</Link></li>
                            <li> <Link>Add Service</Link></li>
                        </>
                        : <li> <Link to="/login">Login</Link> </li>
                    }
                    <li> <Link to="/blogs">Blog</Link> </li>
                    {
                        user && user?.email ? <li onClick={logout}> <Link>Logout</Link> </li> : ""
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;