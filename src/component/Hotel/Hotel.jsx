import { Button } from 'flowbite-react';
import React, { useContext } from 'react'
import { Link, useLoaderData, useNavigate, useOutletContext } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

function Hotel() {
    const data = useLoaderData();
    const { name, activity, address, checkin, content, email, price, geo, directions, phone, tollfree, type, url, checkout } = data;
    const { isMenuOpen, totalStay } = useOutletContext();
    const { setPrice } = useContext(AuthContext);
    const navigate = useNavigate();
    function handleOnclick() {
        setPrice(price);
        navigate('/booking');
    }
    return (
        <div className={isMenuOpen ? 'pt-[270px] mb-3 px-3 min-h-screen' : 'mb-3 px-3 min-h-screen'}>
            <div className="hero min-w-[full] bg-base-200 flex justify-center items-center">
                <div className="hero-content flex flex-col xl:flex-row lg:justify-between p-2">
                    <div className='p-2'>
                        <h1 className="text-5xl font-bold mb-3">{name}</h1>
                        Visit Website: <a href={url} target="_blank" className="my-2 mt-2 text-blue-600">{url}</a>
                        <p className="py-2">Address :{address}</p>
                        <p className="py-2">Per Night : ${price}</p>
                        <p className="py-2 max-w-[700px]">Direction :{directions ? directions : "From Penderyn, follow Cwm Cadlan road from Lamb Hotel for 1.5 miles, you'll see sign and yellow grit bin at the gate on your left."}</p>
                        <p className="py-2 max-w-[700px]">{content}</p>
                        <p className="py-2">Chech-In Time : {checkin ? checkin : '11:00'}</p>
                        <p className="py-2">Check-Out Time: {checkout ? checkout : '12:30'}</p>
                        <p className="py-2">Phone : {phone ? phone : "+44 0 1685 813609"}</p>
                        <p className="py-2">Email : {email ? email : "willow.walks@hotmail.co.uk"}</p>
                        <p className="py-2">Per Night Cost : ${price ? price : '$10'}</p>
                        <p className="py-2">Tax : {tollfree ? tollfree : 'No Tax'}</p>
                        <p className="py-2">Total Cost : ${totalStay * price} for {totalStay} Nights</p>
                        <div className='max-w-fit' onClick={handleOnclick}>
                            <Button outline={true}>Ready to Book</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel;