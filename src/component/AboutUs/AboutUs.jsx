import React from 'react'

import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet'

function AboutUs() {
    return (
        <div>
            <div className='py-5'>
                <p className="ml-2 text-3xl font-['Montserrat'] font-bold tracking-wide text-gray-100 uppercase text-center">
                    <span className='text-5xl text-black dark:text-white'>9</span> <span className='text-black dark:text-white'>m<span className='text-red-600'>i</span>n sch<span className='text-red-600'>oo</span>l</span>
                </p>
                <p className='text-center uppercase text-black dark:text-white font-bold py-3 font-mono'>We share knowledge with the world</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 text-black dark:text-white">
                    <div className="grid gap-10 row-gap-8 grid-cols-3">
                        <div>
                            <div className="flex">
                                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                                    86K
                                </h6>
                                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                                    <svg
                                        className="text-teal-900 w-7 h-7"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className="mb-2 font-bold md:text-lg">Downloads</p>

                        </div>
                        <div>
                            <div className="flex">
                                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                                    1.3K
                                </h6>
                                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                                    <svg
                                        className="text-teal-900 w-7 h-7"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className="mb-2 font-bold md:text-lg">Subscribers</p>

                        </div>
                        <div>
                            <div className="flex">
                                <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                                    52M
                                </h6>
                                <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                                    <svg
                                        className="text-teal-900 w-7 h-7"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <p className="mb-2 font-bold md:text-lg">Cookies</p>

                        </div>
                    </div>

                </div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-black dark:text-white">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 dark:text-slate-200">
                                Dream Team
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto dark:text-slate-200">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Welcome</span>
                            </span>{' '}
                            our talented team of professionals
                        </h2>
                        <p className="text-base text-gray-700 dark:text-slate-200 md:text-lg">
                            Here are some of the most popular course supervisor in our core team.
                        </p>
                    </div>
                    <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Oliver Aguilerra</p>
                                <p className="text-sm text-gray-800">Product Manager</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Marta Clermont</p>
                                <p className="text-sm text-gray-800">Design Team Lead</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Anthony Geek</p>
                                <p className="text-sm text-gray-800">CTO, Lorem Inc.</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Alice Melbourne</p>
                                <p className="text-sm text-gray-800">Human Resources</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Martin Garix</p>
                                <p className="text-sm text-gray-800">Bad boy</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Andrew Larkin</p>
                                <p className="text-sm text-gray-800">Backend Developer</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Sophie Denmo</p>
                                <p className="text-sm text-gray-800">Designer UI/UX</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Benedict Caro</p>
                                <p className="text-sm text-gray-800">Frontend Developer</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img
                                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                                src="https://images.pexels.com/photos/3783255/pexels-photo-3783255.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                            <div className="flex flex-col justify-center">
                                <p className="text-lg font-bold">Adam Molly</p>
                                <p className="text-sm text-gray-800">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center h-fit w-fit md:pt-2 pt-5'>
                    <p className='text-center text-xs font-bold'>OUR LOCATION</p>
                    <MapContainer center={[23.777176, 90.399452]} zoom={13} scrollWheelZoom={false}
                        className='h-[500px] w-[99vw] max-w-[90vw] lg:max-w-[1200px] m-4 rounded-xl border-2 border-black'
                    >

                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[23.777176, 90.399452]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

        </div>
    )
}

export default AboutUs;