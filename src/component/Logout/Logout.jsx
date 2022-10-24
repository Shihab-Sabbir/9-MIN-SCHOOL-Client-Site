import { signOut } from 'firebase/auth';
import React from 'react'

function Logout({ auth, setUser }) {

    function logout(auth, setUser) {
        signOut(auth).then(() => {
            setUser(null);
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2" onClick={() => logout(auth, setUser)}>
            <svg className='mx-3' width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z" />
                </g>
            </svg>
            Sign Out
        </button>
    )
}

export default Logout;