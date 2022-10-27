import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useOutletContext } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import toast from 'react-hot-toast';

function Payment() {
    const { user } = useContext(AuthContext);
    const { isMenuOpen } = useOutletContext();
    const data = useLoaderData();
    const { name, image, cost, details, id } = data;

    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        toast.success('Successfully Purchased');
    }
    
    return (
        <div className={isMenuOpen ? 'pt-[400px] dark:bg-slate-500 bg-slate-200' : 'dark:bg-slate-500 bg-slate-200'}>
            {(cost) ?
                <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full min-h-screen flex lg:flex-row flex-col">
                    <div className="max-w-xl mx-auto lg:max-w-screen-xl">
                        <div className="mb-16 lg:max-w-lg lg:mb-0">
                            <div className="max-w-xl mb-6">
                                <div>
                                    <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 dark:text-teal-200 uppercase rounded-full bg-teal-accent-400">
                                        Premium course of 9 min school
                                    </p>
                                </div>
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl sm:leading-none">
                                    {name}
                                </h2>
                                <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
                                    {details}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center h-full p-3 overflow-hidden lg:w-2/3 xl:w-1/2 lg:items-end lg:pb-3 pb-10">
                        <form onSubmit={handleSubmit} className="h-auto w-80 bg-white dark:bg-slate-300 p-3 rounded-lg shadow-2xl">
                            <p className="text-xl dark:text-black font-semibold">Payment Details</p>
                            <div className="input_text mt-6 relative"> <input required type="text" className="bg-white dark:bg-gray-200 h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder={user?.displayName} /> <span className="absolute left-0 text-sm -top-5 dark:text-black">Cardholder Name</span> <i className="absolute left-2 top-4 text-gray-400 fa fa-user"></i> </div>
                            <div className="input_text mt-8 relative"> <input required type="tel" inputmode="numeric" pattern="[0-9\s]{16}" autocomplete="cc-number" maxlength="16" title='16 digit number' placeholder="xxxx xxxx xxxx xxxx" className="bg-white dark:bg-gray-200 h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " data-slots="0" data-accept="\d" size="19" /> <span className="absolute left-0 text-sm -top-5 dark:text-black">Card Number</span> <i className="absolute left-2 top-[14px] text-gray-400 text-sm fa fa-credit-card"></i> </div>
                            <div className="mt-8 flex gap-5 ">
                                <div className="input_text relative w-full"> <input required type="date" className="bg-white dark:bg-gray-200 h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " placeholder="mm/yyyy" data-slots="my" /> <span className="absolute left-0 text-sm -top-5 dark:text-black">Expiry</span> <i className="absolute left-2 top-4 text-gray-400 fa fa-calendar-o"></i> </div>
                                <div className="input_text relative w-full"> <input required className="bg-white dark:bg-gray-200 h-12 pl-7 outline-none px-2 focus:border-blue-900 transition-all w-full border-b " type="tel" inputmode="numeric" pattern="[0-9\s]{3}" autocomplete="cc-number" maxlength="3" title='3 digit number' placeholder="xxx" /> <span className="absolute left-0 text-sm -top-5 dark:text-black">CVV</span> <i className="absolute left-2 top-4 text-gray-400 fa fa-lock"></i> </div>
                            </div>
                            <p className="text-lg text-center mt-4 text-gray-600 font-semibold">Payment amount:${cost || 0}</p>
                            <div className="flex justify-center mt-4"> <button type="submit" className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                                <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
                                PAY NOW
                            </button> </div>
                        </form>
                    </div>
                </div>
                :
                <div className='flex flex-col pt-32 justify-start items-center min-h-screen'>
                    <p className='text-center font-bold uppercase'>Sorry , you have not add any course to purcase, please add one .</p>
                    <button className="p-2 bg-amber-400 rounded-md hover:bg-slate-200 hover:text-slate-500 text-xs uppercase shadow-lg font-bold text-black mt-10" onClick={() => navigate('/courses')}>Explore Courses</button>
                </div>
            }
        </div>
    )
}

export default Payment;