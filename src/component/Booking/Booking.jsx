import React, { useContext } from 'react'
import { useOutletContext } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

function Booking() {
    const { user, price } = useContext(AuthContext);
    const { isMenuOpen, totalStay } = useOutletContext();
    return (
        <div className={isMenuOpen ? 'pt-[250px] bg-blue-300' : 'bg-blue-300'}>
            <div className="flex justify-center items-center min-h-screen ">
                <div className="h-auto w-80 bg-white p-3 rounded-lg shadow-2xl">
                    <p className="text-xl font-semibold">Payment Details</p>
                    <div className="input_text mt-6 relative"> <input type="text" className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder={user?.displayName} /> <span className="absolute left-0 text-sm -top-5">Cardholder Name</span> <i className="absolute left-2 top-4 text-gray-400 fa fa-user"></i> </div>
                    <div className="input_text mt-8 relative"> <input type="text" className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d" size="19" /> <span className="absolute left-0 text-sm -top-5">Card Number</span> <i className="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i> </div>
                    <div className="mt-8 flex gap-5 ">
                        <div className="input_text relative w-full"> <input type="text" className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="mm/yyyy" data-slots="my" /> <span className="absolute left-0 text-sm -top-5">Expiry</span> <i className="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i> </div>
                        <div className="input_text relative w-full"> <input type="text" className="h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="000" data-slots="0" data-accept="\d" size="3" /> <span className="absolute left-0 text-sm -top-5">CVV</span> <i className="absolute left-2 top-4 text-gray-400 fa fa-lock"></i> </div>
                    </div>
                    <p className="text-lg text-center mt-4 text-gray-600 font-semibold">Payment amount:${price*totalStay}</p>
                    <div className="flex justify-center mt-4"> <button type="button" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                        <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
                        PAY NOW
                    </button> </div>
                </div>
            </div>
        </div>
    )
}

export default Booking;