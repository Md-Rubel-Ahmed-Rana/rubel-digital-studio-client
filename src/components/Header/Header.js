import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from "../../image/logo.png"
import swal from 'sweetalert';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogOut = () => {
        logout();
        swal("Done", "Logged out successfully", "success");
        navigate("/")
    }
    return (
        <div className='lg:flex justify-between items-center py-3 px-4 lg:px-20 bg-blue-900'>
            <div className='flex items-center gap-3'>
                <img className='w-12 h-12 rounded-full' src={logo} alt="" />
                <h3 className='lg:text-3xl text-white font-bold'>Rubel Digital Studio</h3>
            </div>
            <div>
                <ul className='lg:flex text-white gap-4 text-xl'>
                    <li> <Link to="/home">Home</Link> </li>
                    {
                        user?.email ? 
                        <>
                            <li> <Link to="/reviews">My Reviews</Link></li>
                            <li> <Link to="/addService">Add Service</Link></li>
                        </>
                        : <li> <Link to="/login">Login</Link> </li>
                    }
                    <li> <Link to="/blogs">Blog</Link> </li>
                    {
                        user && user?.email ? <li onClick={handleLogOut}> <Link>Logout</Link> </li> : ""
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;