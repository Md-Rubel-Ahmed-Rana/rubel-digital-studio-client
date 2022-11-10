import React from 'react';
import bannerImg from "../../image/banner.png"

const Banner = () => {
    return (
        <div className='bg-gray-800 lg:flex items-center gap-10 justify-between rounded-xl  p-5'>
            <div>
                <img className='lg:w-96 h-60' src={bannerImg} alt="" />
            </div>
            <div className='text-white lg:w-2/4'>
                <h3 className='text-2xl font-semibold mb-3'>Welcome to Rubel Digital Studio</h3>
                <p className=''>Hi dear customer. You are visiting a world class Digital Studio. This is the best studio where you can make video or photo with highest quality. If you are thinking to hire a good photographer or video maker to take your photo or make a reasonable, dymandable video of your any type of events like, Wdding ceromony, Birthday Party, Marriage anniversary ot others you want this studio is the best option for you. so select your event below.</p>
            </div>
        </div>
    );
};

export default Banner;