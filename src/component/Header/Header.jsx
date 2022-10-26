import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import logo from '../../asset/logo.png'
import './Header.css'
import { Dropdown } from 'flowbite-react';
function Header({ setSearch, toggle }) {
    const { isMenuOpen, setIsMenuOpen } = toggle;
    const [location, setLocation] = useState('');
    const { user, dark, setDark } = useContext(AuthContext);
    const navigate = useNavigate();
    function handleSearchInput(event) {
        event.preventDefault();
        const data = event.target.search.value;
        if (data.length > 0) { setSearch(data); navigate(`../search/${data}`); setIsMenuOpen(false) }
        else { toast.error("Search field is empty... !!") }
    }
    function handleDarkMode() {
        sessionStorage.setItem(`9minschool-theme`, JSON.stringify(!dark));
        setDark(!dark)
    }
    useEffect(() => {
        if (localStorage.getItem(`9minschool-theme`) !== null) {
            setDark(JSON.parse(sessionStorage.getItem(`9minschool-theme`)));
        }
    }, [])
    return (
        <div className={(window.location.pathname !== '/') ? 'dark:bg-gray-900 bg-gray-500 z-[200] min-h-fit' : ' bg-transparent dark:bg-transparent min-h-fit absolute min-w-full bg-opacity-0'}>
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
                    <ul className="items-center hidden space-x-8 lg:flex font-mono">
                        <li>
                            <NavLink
                                to="/courses"
                                className={({ isActive }) => (isActive ? "active-class" : "non-active-class")}
                            >
                                Couses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/popular"
                                className={({ isActive }) => (isActive ? "active-class" : "non-active-class")}
                            >
                                Popular
                            </NavLink>
                        </li>
                        <li className='xl:hidden font-mono hover:text-red-500 text-white z-50'>
                            <Dropdown
                                label="More"
                                inline={true}
                            >
                                <Dropdown.Item>
                                    <NavLink
                                        to="/blog"
                                        className={({ isActive }) => (isActive ? "active-class" : "non-active-class non-active-class-drop-down")}
                                    >
                                        Blog
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink
                                        className={({ isActive }) => (isActive ? "active-class" : "non-active-class non-active-class-drop-down")}
                                        to="/payment"
                                        end
                                    >
                                        Payment
                                    </NavLink>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive }) => (isActive ? "active-class" : "non-active-class non-active-class-drop-down")}
                                    >
                                        About us
                                    </NavLink>
                                </Dropdown.Item>
                            </Dropdown>
                        </li>
                        <li className='hidden xl:flex'>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) => (isActive ? "active-class" : "non-active-class")}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className='hidden xl:flex'>
                            <NavLink
                                className={({ isActive }) => (isActive ? "active-class" : "non-active-class")}
                                to="/payment"
                                end
                            >
                                Payment
                            </NavLink>
                        </li>
                        <li className='hidden xl:flex'>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? "active-class" : "non-active-class")}
                            >
                                About us
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
                            <form className='rounded-lg lg:min-w-[280px]' onSubmit={handleSearchInput}>
                                <div className="flex rounded-lg">
                                    <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                                    <div className="relative w-full">
                                        <input type="search" id="search-dropdown" name='search' className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg rounded-l-lg border-l-gray-50 border-l-2 border border-gray-300 ring ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-500" placeholder="Search Courses..." required="" />
                                        <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-white rounded-r-lg border border-gray-300 hover:bg-blue-800 focus:none focus:outline-none focus:ring-gray-300 dark:bg-black dark:hover:bg-blue-700 dark:focus:none">
                                            <svg aria-hidden="true" className="w-5 h-5 dark:stroke-white stroke-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            <span className="sr-only">Search</span>
                                        </button>
                                    </div>
                                </div>
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
                                <NavLink to='/profile'><img src={user?.photoURL} className="w-12 h-12 rounded-full dark:bg-gray-500" /></NavLink>
                                <div>
                                </div>
                            </div>}
                        </div>

                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white dark:bg-gray-300 border rounded shadow-sm">
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
                                        <ul className="space-y-4 font-mono">

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
                                                    to="/popular"
                                                    className={({ isActive }) => (isActive ? "active-class" : "non-active-class-sm")}
                                                >
                                                    Popular
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
                                                    to="/about"
                                                    className={({ isActive }) => (isActive ? "active-class" : "non-active-class-sm")}
                                                >
                                                    About us
                                                </NavLink>
                                            </li>
                                            {user?.uid && <li onClick={() => setIsMenuOpen(false)} className='lg:hidden'>
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
                            <NavLink to='/profile'><img src={user?.photoURL} className="w-12 h-12 rounded-full dark:bg-gray-500" /></NavLink>

                        </div>
                    }
                    <div className='hidden lg:block cursor-pointer'>
                        <label className="swap swap-rotate">
                            <input type="checkbox" className='hidden' onClick={handleDarkMode} />
                            {dark || <svg className=" fill-white w-10 h-10 border-2 px-1 rounded-md " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>}
                            {dark && <svg className=" fill-white cursor-pointer w-10 h-10 border-2 px-1 rounded-md " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>}
                        </label>
                    </div>
                    <div className={(user?.uid) ? "swap swap-rotate absolute top-[65px] right-[15px] z-50 sm:top-[14px]  sm:-right-[50px] md:top-[16px] md:right[0px] md:-right-[0px] md:-mr-[80px] lg:top-[100px] lg:hidden " : "swap swap-rotate absolute top-[65px] right-[15px] z-50 sm:top-[0px] sm:-right-[50px] md:top-[10%] md:right[0px] md:-right-[0px] md:-mr-[80px] lg:top-[100px] lg:hidden "}>
                        <label className={isMenuOpen ? '' : 'hidden sm:block'}>
                            <input type="checkbox" className='hidden' onClick={handleDarkMode} />
                            {dark && <svg className=" fill-current sm:fill-white  !w-8 !h-8 sm:w-10 sm:h-10 border-2 px-1 rounded-md " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>}
                            {dark || <svg className=" fill-current sm:fill-white !w-8 !h-8 sm:w-10 sm:h-10 border-2 px-1 rounded-md " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;