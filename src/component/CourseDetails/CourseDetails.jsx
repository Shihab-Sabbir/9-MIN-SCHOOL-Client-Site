import { Button, Tooltip } from 'flowbite-react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLoaderData, useNavigate, useOutletContext } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { BsDownload } from 'react-icons/bs';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { jsPDF } from "jspdf";
import Pdf from "react-to-pdf";
import logo from '../../asset/logo.png'
import replacement from '../../asset/replacement.png'
import toast from 'react-hot-toast';

function CourseDetails() {
    const data = useLoaderData();
    const { name, image, cost, details, id } = data;
    const { user } = useContext(AuthContext);
    const { isMenuOpen } = useOutletContext();
    const [wishColor, setWishColor] = useState({});
    const navigate = useNavigate();
    // const doc = new jsPDF('p', 'px', 'letter');
    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem(`${user?.uid}-course`));
        if (localData && user?.uid) {
            const isDataExist = localData?.find(item => item.id === id);
            if (isDataExist) {
                setWishColor('text-red-600 dark:text-white')
            }
        }
        else {
            setWishColor('text-black dark:text-white')
        }
    }, [user?.uid])

    function handleWishList() {
        const localStoreData = (JSON.parse(localStorage.getItem(`${user?.uid}-course`)));
        if (user?.uid) {
            if (localStoreData?.length > 0) {
                if (localStoreData?.find(item => item.id === data.id)) {
                    toast.error('Removed from wish list');
                    let remaining = localStoreData?.filter(item => item.id !== data.id);
                    if (remaining === undefined) {
                        localStorage.setItem(`${user.uid}-course`, JSON.stringify([]));
                        setWishColor('text-black dark:text-white')
                    }
                    else {
                        localStorage.setItem(`${user.uid}-course`, JSON.stringify(remaining));
                        setWishColor('text-black dark:text-white')
                    }
                }
                else {
                    toast.success('Added in wish list');
                    const newData = [...localStoreData, data]
                    localStorage.setItem(`${user.uid}-course`, JSON.stringify(newData));
                    setWishColor('text-red-600 dark:text-white')
                }
            }
            else {
                toast.success('Added in wish list');
                localStorage.setItem(`${user.uid}-course`, JSON.stringify([data]));
                setWishColor('text-red-600 dark:text-white')
            }
        }
        else {
            toast.error('Please Login to use this feature');
        }
    }

    const ref = useRef();
    const errImg = useRef(); // this is required for js pdf
    function replaceImage() {
        errImg.current.src = replacement;
    }
    // function handleDownload() {  this was for js pdf but managing is tough
    //     doc.setFontSize(12);
    //     doc.setLineHeightFactor(1.5)
    //     doc.addImage(logo, 'PNG', 180, 20, 100, 40);
    //     doc.addImage(image, 'PNG', 100, 90, 250, 200);
    //     doc.text(name, 20, 320);
    //     doc.text(`Course Details : ${details}`, 20, 350, { maxWidth: 420 });
    //     doc.text(`Price : $${cost}`, 20, 420);
    //     doc.text('Thank you for visiting us !', 20, 460);
    //     doc.output('datauri');
    //     doc.save(`${name}.pdf`);
    // }
    return (
        <div className={isMenuOpen ? 'pt-[400px] mb-3 px-3 min-h-screen' : 'mb-3 p-3 min-h-screen'} ref={ref} >
            {data.id ? <div className='flex justify-center gap-6 md:gap-10 lg:gap-14 xl:gap-16' >
                <p className='text-center dark:text-white py-2 pb-6 text-sm uppercase font-bold'>Details of {name}</p>
                <Pdf targetRef={ref} filename={`${name}.pdf`} scale='.5'>
                    {({ toPdf }) =>
                        <BsDownload className='text-4xl cursor-pointer max-h-fit font-bold border p-1 rounded-md hover:bg-black hover:text-white' title='Download pdf' onClick={toPdf} />}
                </Pdf>
            </div> : ''}
            {data.id ? <div className="min-h-screen bg-base-200 lg:max-w-[1100px] mx-auto p-2" >
                <div className="flex flex-col md:flex-row relative" >
                    <img src={image} ref={errImg} onError={() => replaceImage} className="max-w-full  bg-white md:min-w-[50%] shadow md:max-h-[500px]" />
                    <p className='cursor-pointer absolute top-0 right-0 px-2 text-black font-bold text-2xl'>{<Tooltip
                        content="Wish List"
                        style="dark"
                        placement='bottom'
                    >
                        <BiMessageSquareAdd title='Wish List' className={wishColor} onClick={handleWishList} />
                    </Tooltip>}</p>
                    <div className='flex flex-col justify-between items-start min-w-full md:min-w-[50%] px-3 pb-1 md:pt-0 pt-5 md:max-h-[500px]'>
                        <div>
                            <h1 className="text-2xl font-bold">{name}</h1>
                            <p className="py-4"><span className='font-bold text-sm'>Course Details : </span>{details}</p>
                            <p className="py-4"><span className='font-bold text-sm'>Course Price : </span><span className='text-lg'>$</span>{cost}</p>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <Link to={`/payment/${id}`} className="p-2 bg-lime-500 shadow-md rounded-md border hover:border-lime-600 hover:bg-white hover:text-lime-600 text-xs uppercase font-bold text-white">Get premium access</Link>
                            <button className="p-2 bg-slate-800 rounded-md dark:border-white dark:border hover:bg-slate-200 hover:text-black text-xs uppercase shadow-lg font-bold text-white " onClick={() => navigate(-1)}>Back</button>
                        </div>
                    </div>
                </div>
            </div> : ''}
            {!data.id ?
                <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
                    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 dark:text-gray-600">
                            <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                            <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
                            <polygon fill="currentColor" points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"></polygon>
                            <polygon fill="currentColor" points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"></polygon>
                        </svg>
                        <p className="text-3xl">Sorry No Course Found , Please try again</p>
                        <Link rel="noopener noreferrer" to='/' className="px-8 py-3 border font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
                    </div>
                </section> : ''
            }
        </div>
    )
}

export default CourseDetails;