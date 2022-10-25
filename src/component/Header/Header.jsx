import { Avatar } from 'flowbite-react';
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import logo from '../../asset/logo.png'
import './Header.css'
function Header({ setSearch, toggle }) {
    const { isMenuOpen, setIsMenuOpen } = toggle;
    const [location, setLocation] = useState('');
    const { user,dark,setDark } = useContext(AuthContext);
    const navigate = useNavigate();
    function handleSearchInput(event) {
        event.preventDefault();
        const data = event.target.search.value;
        if (data.length > 0) { setSearch(data); navigate(`../search/${data}`); setIsMenuOpen(false) }
        else { toast.error("Search field is empty... !!") }
    }

    return (
        <div className={(window.location.pathname !== '/') ? 'bg-gray-900 z-[200] min-h-fit' : 'bg-gray-900 z-[200] min-h-fit absolute min-w-full bg-opacity-0'}>
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'inline-flex items-center font-extrabold' : undefined
                        }
                    >
                        <span className="ml-2 text-xl font-['Montserrat'] font-bold tracking-wide text-gray-100 uppercase">
                            <span className='text-3xl'>9</span> <span>m<span className='text-red-600'>i</span>n sch<span className='text-red-600'>oo</span>l</span>
                        </span>
                    </NavLink>
                    <ul className="items-center hidden space-x-8 lg:flex">
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-class" : "non-active-class")}
                                to="/payment"
                                end
                            >
                                Payment
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/courses"
                                className={({ isActive }) => (isActive ? "active-class" : "non-active-class")}
                            >
                                Couses
                            </NavLink>
                        </li>
                        <li>
                           <button onClick={()=>{setDark(!dark)}}>Dark Mode</button>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) => (isActive ? "active-class" : "non-active-class")}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) => (isActive ? "active-class" : "non-active-class")}
                            >
                                {(!user?.uid) ? 'Log in' : 'Log out'}
                            </NavLink>
                        </li>
                        <li>
                            <form className="relative min-w-[280px]" onSubmit={handleSearchInput}>
                                <input type="search" id="default-search"
                                    name='search'
                                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Courses..." required />
                                <button type="submit" className=" absolute right-2.5 bottom-2.5 bg-black rounded-lg text-sm px-4 py-2 hover:scale-105">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                            </form>
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <div className='flex justify-around items-center'>
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg className="w-5 text-white" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    />
                                </svg>
                            </button>
                            <div className="inline-flex items-center mx-2 sm:mx-4 md:mx-8">
                            </div>
                            {user?.uid && <div className="hidden sm:flex items-center p-2 space-x-4" title={user.displayName}>
                                <img src={user?.photoURL} className="w-12 h-12 rounded-full dark:bg-gray-500" />
                                <div>
                                    <span className="flex items-center space-x-1">
                                        <NavLink to='/profile' className="text-xs hover:underline dark:text-gray-400">View profile</NavLink>
                                    </span>
                                </div>
                            </div>}
                        </div>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <NavLink
                                                to="/"
                                                aria-label="World Tour"
                                                title="World Tour"
                                                className="inline-flex items-center"
                                            >
                                                <svg
                                                    className="w-8 text-deep-purple-accent-400"
                                                    viewBox="0 0 24 24"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeMiterlimit="10"
                                                    stroke="currentColor"
                                                    fill="none"
                                                >
                                                    <rect x="3" y="1" width="7" height="12" />
                                                    <rect x="3" y="17" width="7" height="6" />
                                                    <rect x="14" y="1" width="7" height="6" />
                                                    <rect x="14" y="11" width="7" height="12" />
                                                </svg>
                                                <span className="ml-2 text-xl font-mono font-bold tracking-wide text-gray-800 uppercase">
                                                    <span className='text-3xl'>9</span> <span>m<span className='text-red-600'>i</span>n sch<spna className='text-red-600'>oo</spna>l</span>
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li onClick={() => setIsMenuOpen(false)}>
                                                <NavLink
                                                    to="/payment"
                                                    className={({ isActive }) => (isActive ? "active-class" : "non-active-class-sm")}
                                                >
                                                    Payment
                                                </NavLink>
                                            </li>
                                            <li onClick={() => setIsMenuOpen(false)}>
                                                <NavLink
                                                    to="/courses"
                                                    className={({ isActive }) => (isActive ? "active-class" : "non-active-class-sm")}
                                                >
                                                    Courses
                                                </NavLink>
                                            </li>
                                            <li onClick={() => setIsMenuOpen(false)}>
                                                <NavLink
                                                    to="/blog"
                                                    className={({ isActive }) => (isActive ? "active-class" : "non-active-class-sm")}
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            {user?.uid && <li onClick={() => setIsMenuOpen(false)} className='sm:hidden'>
                                                <NavLink
                                                    to="/profile"
                                                    className={({ isActive }) => (isActive ? "active-class" : "non-active-class-sm")}
                                                >
                                                    User Profile
                                                </NavLink>
                                            </li>}
                                            <li>
                                                <form className="relative" onSubmit={handleSearchInput}>
                                                    <input type="search" id="default-search"
                                                        name='search'
                                                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Courses..." required />
                                                    <button type="submit" className=" absolute right-2.5 bottom-2.5 bg-black rounded-lg text-sm px-4 py-2 hover:scale-105">
                                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                    </button>
                                                </form>
                                            </li>
                                            <li onClick={() => setIsMenuOpen(false)}>
                                                <NavLink
                                                    to="/login"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                    aria-label="Sign up"
                                                    title="Sign up"
                                                >
                                                    {!user?.uid ? 'Log-In' : 'Log out'}
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                    {user?.uid &&
                        <div className="hidden lg:flex items-center space-x-4 pl-2 " title={user?.displayName}>
                            <img src={user?.photoURL} className="w-12 h-12 rounded-full dark:bg-gray-500" />
                            <div>
                                <h2 className="hidden xl:block text-sm text-blue-600 font-semibold">{user?.email || 'No Email'}</h2>
                                <span className="flex items-center space-x-1">
                                    <NavLink to='/profile' className="text-xs hover:underline text-blue-600 dark:text-gray-400">View profile</NavLink>
                                </span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;