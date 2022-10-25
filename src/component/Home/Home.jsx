import React, { useContext, useState } from 'react'
import { Link, useLoaderData, useOutletContext } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import bg from './home_bg.jpg';

function Home() {
    const { isMenuOpen } = useOutletContext();
    const { dark } = useContext(AuthContext)
    return (
        <div  style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className={isMenuOpen ? 'pt-[350px] dark:hero-overlay' : 'pt-[120px] dark:hero-overlay'}>
                <div >
                    <div className="flex min-w-full justify-center px-2 py-16 lg:pt-0  lg:pb-0 ">
                        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                            <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
                                NO MORE WAITING
                            </p>
                            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                <span className='lg:pb-3'> A broad selection of courses</span>
                            </h2>
                            <p className="pr-5 mb-5 text-justify text-base text-white md:text-lg">
                                The world of web development is as wide as the internet itself. Much of our social and vocational lives play out on the internet, which prompts new industries aimed at creating, managing, and debugging the websites and applications that we increasingly rely on.
                            </p>
                            <div className="flex items-center">
                                <Link
                                    to="/courses"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black bg-opacity-10 hover:bg-opacity-50 focus:shadow-outline focus:outline-none"
                                >
                                    EXPLORE COURSES
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;