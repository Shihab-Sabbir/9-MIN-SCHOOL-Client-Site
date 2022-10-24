import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../UserContext/UserContext';
import toast from 'react-hot-toast';

function Register() {
    const [newUser, setNewUser] = useState(false);
    const [terms, setTerms] = useState(false);
    const { isMenuOpen } = useOutletContext();
    const active = useRef();
    const warning = useRef();
    const navigate = useNavigate();
    const auth = getAuth(app);
    const { setUser, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (!terms) {
            warning.current.classList.add('text-red-600', 'font-bold');
        }
        else {
            warning.current.classList.remove('text-red-600', 'font-bold');
            warning.current.classList.add('text-green-500');
        }
    }, [terms])
    function handleSubmit(event) {
        event.preventDefault();
        if (terms) {
            setLoading(true);
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const photo = form.photo.value;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photo
                    }).then(() => {
                        auth.currentUser.photoURL = photo;
                        setUser(auth.currentUser);
                        navigate(from, { replace: true });
                        toast.success('Successfully registered');
                    }).catch((error) => {
                        console.log(error)
                    });
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                });
        }
        else {
            toast.error('Please accept terms and policy !');
        }
    }
    return (
        <div className={isMenuOpen ? 'p-8 lg:w-1/2 mx-auto pt-[300px]' : 'p-8 lg:w-1/2 mx-auto'}>
            <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input required className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="username" type="text" name='name' placeholder="Name" />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor">  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input required className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="photoURL" type="url" name='photo' placeholder="Photo URL" />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input required className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="email" name='email' type="email" placeholder="Email" />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative mt-3">
                        <input className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="password" name='password' type="password" placeholder="Password" />
                        <div className="absolute left-0 inset-y-0 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor"            >
                                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                            </svg>
                        </div>
                    </div>
                    <p className="mt-4 italic text-gray-500 font-light text-xs">Password strength: <span className="font-bold text-green-400">strong</span>
                    </p>
                    <div className="mt-4 flex items-center text-gray-500"  >
                        <input type="checkbox" id="remember" name="remember" className="mr-2" readOnly checked={terms} onClick={() => setTerms(!terms)} />
                        <label ref={warning} className="text-sm" htmlFor="remember">I agree with the
                            <span className="text-indigo-400 hover:text-indigo-500"> Privacy Policy</span>
                        </label>
                    </div>
                    <div className="mt-4 flex items-center text-gray-500">
                        <input type="checkbox" id="remember" name="remember" readOnly className="mr-3 cursor-pointer" checked={newUser} onClick={() => {
                            setNewUser(!newUser);
                            newUser || navigate('/login');
                        }} />
                        <label className='text-sm' htmlFor="remember">Already have an account ?</label>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5" ref={active} type='submit'> Create Account </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register