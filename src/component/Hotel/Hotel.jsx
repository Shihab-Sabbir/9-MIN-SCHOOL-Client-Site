import { Button, Tooltip } from 'flowbite-react';
import React, { useContext } from 'react'
import { Link, useLoaderData, useNavigate, useOutletContext } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { BsDownload } from 'react-icons/bs';
function Hotel() {
    const data = useLoaderData();
    const { name, image, cost, details } = data;
    const { isMenuOpen} = useOutletContext();
    const navigate = useNavigate();
    function handleOnclick() {
        navigate('/booking');
    }
    return (
        <div className={isMenuOpen ? 'pt-[270px] mb-3 px-3 min-h-screen' : 'mb-3 p-3 min-h-screen'}>
            <div className="hero min-h-screen bg-base-200 lg:max-w-[1100px] mx-auto">
                <div className="hero-content flex flex-col md:flex-row">
                    <img src={image} className="max-w-full md:min-w-[50%] shadow md:max-h-[500px]" />
                    <div className='flex flex-col justify-between items-start min-w-full md:min-w-[50%] px-3 pb-1 md:pt-0 pt-5 md:max-h-[500px]'>
                        <div className='flex justify-between gap-2'>
                            <h1 className="text-2xl font-bold">{name}</h1>
                            <Tooltip
                                content="Download pdf"
                                style="dark"
                                placement='bottom'
                            >
                                <BsDownload className='text-4xl cursor-pointer max-h-fit' />
                            </Tooltip>
                        </div>
                        <p className="py-6"><span className='font-bold text-sm'>Course Details : </span>{details}</p>
                        <p className="py-6"><span className='font-bold text-sm'>Course Price : </span><span className='text-lg'>$</span>{cost}</p>
                        <button className="p-2 bg-lime-500 shadow-md rounded-md border hover:border-lime-600 hover:bg-white hover:text-lime-600 text-xs uppercase font-bold text-white">Enroll Now</button>
                        <br />
                        <button className="p-2 bg-slate-800 rounded-md hover:bg-slate-200 hover:text-black text-xs uppercase shadow-lg font-bold text-white mt-10">Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel;