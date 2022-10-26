import { Button, Tooltip } from 'flowbite-react';
import React, { useContext, useRef } from 'react'
import { Link, useLoaderData, useNavigate, useOutletContext } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { BsDownload } from 'react-icons/bs';
import { jsPDF } from "jspdf";
import logo from '../../asset/logo.png'
import replacement from '../../asset/replacement.png'
function CourseDetails() {
    const data = useLoaderData();
    const { name, image, cost, details } = data;
    const { user } = useContext(AuthContext);
    const { isMenuOpen } = useOutletContext();
    const navigate = useNavigate();
    const doc = new jsPDF('p', 'px', 'letter');
    const input = useRef()
    const { setProduct } = useContext(AuthContext);
    function handleOnclick() {
        if (user?.uid) {
            localStorage.setItem(`${user.uid}-course`, JSON.stringify(data));
        }
        setProduct(data);
        navigate('/payment');
        console.log('clicked')
    }
    const errImg = useRef();
    const replaceImage = () => {
        errImg.current.src = replacement;
    }
    function handleDownload() {
        doc.setFontSize(12);
        doc.setLineHeightFactor(1.5)
        doc.addImage(logo, 'PNG', 180, 20, 100, 40);
        doc.addImage(replacement, 'PNG', 100, 90, 250, 200);
        doc.text(name, 20, 320);
        doc.text(`Course Details : ${details}`, 20, 350, { maxWidth: 420 });
        doc.text(`Price : $${cost}`, 20, 420);
        doc.text('Thank you for visiting us !', 20, 460);
        doc.output('datauri');
        doc.save(`${name}.pdf`);
    }
    return (
        <div className={isMenuOpen ? 'pt-[400px] mb-3 px-3 min-h-screen' : 'mb-3 p-3 min-h-screen'}>
            {data && <div className="min-h-screen bg-base-200 lg:max-w-[1100px] mx-auto p-2" ref={input}>
                <div className="flex flex-col md:flex-row" >
                    <img src={image} ref={errImg} onError={() => { replaceImage() }} onLoad={replaceImage} className="max-w-full bg-white md:min-w-[50%] shadow md:max-h-[500px]" />
                    <div className='flex flex-col justify-between items-start min-w-full md:min-w-[50%] px-3 pb-1 md:pt-0 pt-5 md:max-h-[500px]'>
                        <div className='w-full'>
                            <div className='flex justify-between gap-2 md:gap-3 lg:gap-4 xl:gap-6'>
                                <h1 className="text-2xl font-bold">{name}</h1>
                                <Tooltip
                                    content="Download pdf"
                                    style="dark"
                                    placement='bottom'
                                >
                                    <BsDownload className='text-4xl cursor-pointer max-h-fit font-bold border p-1 rounded-md hover:bg-black hover:text-white' onClick={handleDownload} />
                                </Tooltip>
                            </div>
                        </div>
                        <p className="py-6"><span className='font-bold text-sm'>Course Details : </span>{details}</p>
                        <p className="py-6"><span className='font-bold text-sm'>Course Price : </span><span className='text-lg'>$</span>{cost}</p>
                        <div className='w-full flex items-center justify-between'>
                            <button className="p-2 bg-lime-500 shadow-md rounded-md border hover:border-lime-600 hover:bg-white hover:text-lime-600 text-xs uppercase font-bold text-white" onClick={handleOnclick}>Get premium access</button>
                            <button className="p-2 bg-slate-800 rounded-md hover:bg-slate-200 hover:text-black text-xs uppercase shadow-lg font-bold text-white " onClick={() => navigate(-1)}>Back</button>
                        </div>
                    </div>
                </div>
            </div>}
            {data || <>
                <p className="text-3xl">Sorry No Course Found , Please try again</p>
                <Link rel="noopener noreferrer" to='/' className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
            </>}
        </div>
    )
}

export default CourseDetails;