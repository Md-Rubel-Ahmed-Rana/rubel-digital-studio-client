import React from 'react';
import bkash from "../../image/bkash.png"
import rocket from "../../image/rocket.png"
import paypal from "../../image/paypal.png"
import asia_bank from "../../image/asia_bank.png"
import g_pay from "../../image/g_pay.png"
import apple_pay from "../../image/apple_pay.png"
import bitcoin from "../../image/bitcoin.png"
import visa from "../../image/visa.png"

const Payments = () => {
    return (
        <div className='bg-gray-800 p-5 rounded-xl'>
            <h2 className='text-4xl font-bold text-white text-center mb-3'>Payment Methods</h2>
            <div className="grid grid-cols-4 gap-3">
                <div>
                    <img className='h-20 w-full'  src={bkash} alt="" />
                </div>
                <div>
                    <img className='h-20 w-full' src={rocket} alt="" />
                </div>
                <div>
                    <img className='h-20 w-full' src={paypal} alt="" />
                </div>
                <div>
                    <img className='h-20 w-full' src={asia_bank} alt="" />
                </div>
                <div>
                    <img className='h-20 w-full' src={g_pay} alt="" />
                </div>
                <div>
                    <img className='h-20 w-full' src={apple_pay} alt="" />
                </div>
                <div>
                    <img className='h-20 w-full' src={bitcoin} alt="" />
                </div>
                <div>
                    <img className='h-20 w-full' src={visa} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Payments;