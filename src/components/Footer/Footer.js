import React from 'react';
import { FaFacebook, FaYoutube, FaLinkedinIn,  FaGithub,FaMapMarkerAlt, FaEnvelope,FaPhoneAlt
} from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="flex justify-around gap-5 py-5 bg-gray-700 text-white">
                <div>
                    <h5>Contact Details</h5>
                    <p>Websile: https://rubel-digital-studio.web.app</p>
                    <p className='flex gap-3 items-center my-2'><FaMapMarkerAlt />  Office: Haji Market-20, Companigonj, Sylhet.</p>
                    <p className='flex gap-3 items-center my-2'> <small><FaEnvelope /></small> Official:<small>mdrubelahmedrana521@gmail.com</small> </p>
                    <p className='flex gap-3 items-center my-2'><FaPhoneAlt /> Phone: 01758-049882</p>
                </div>
                <div>
                    <h5>Social Links</h5>
                    <div>
                        <div>
                            <p className='m-0'>Blog</p>
                            <p className='m-0'>Success</p>
                            <p className='m-0'>About us</p>
                            <p className='m-0'>Terms and Conditions</p>
                            <p className='m-0'>Privacy & App Privacy Policy</p>
                        </div>
                        <ul className='flex gap-3 mt-3 list-unstyled'>
                            <li className='rounded-circle text-2xl'> <FaFacebook /> </li>
                            <li className='rounded-circle text-2xl'> <FaYoutube /> </li>
                            <li className='rounded-circle text-2xl'> <FaLinkedinIn /> </li>
                            <li className='rounded-circle text-2xl'> <FaGithub /> </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-center py-5 bg-gray-700 text-2xl text-white'>&copy; All rights are reserved by Rubel Digital Studio. </p>
        </div>
    );
};

export default Footer;