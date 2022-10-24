import React, { useState } from 'react'
import { Link, useLoaderData, useOutletContext } from 'react-router-dom';
import bg from './home_bg.jpg';

function Home() {
    const { isMenuOpen } = useOutletContext();
    const { backGroung } = useOutletContext();
    const data = useLoaderData();
    return (
        <div style={{ backgroundImage: `url(${backGroung})`,backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
            <div className={isMenuOpen ? 'pt-[350px]' : 'pt-[120px]'}>
               
                <div>
                    <div className="flex min-w-full justify-center px-2 py-16 lg:pt-0  lg:pb-0 ">
                        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                            <p className="inline-block py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
                                NO MORE WAITING
                            </p>
                            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                <span className='lg:pb-3'> The Entire World</span>
                                <br className="hidden md:block py-2" />
                                {' '} is Waiting {' '}
                                <span className="inline-block text-white">
                                    for You
                                </span>
                            </h2>
                            <p className="pr-5 mb-5 text-justify text-base text-white md:text-lg">
                                In general terms, tourism is the movement of a person from one place to another to visit and mesmerize the beauty of that place or to have fun. Moreover, the concept of traveling is considered a most enjoyable event for a human being.
                            </p>
                            <div className="flex items-center">
                                <Link
                                    to="/destinations"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 bg-opacity-30 hover:bg-opacity-50 focus:shadow-outline focus:outline-none"
                                >
                                    Get started
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