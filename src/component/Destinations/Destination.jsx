import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import loadingImg from '../../asset/loading.gif'
import replacement from '../../asset/replacement.png'
import { AuthContext } from '../../UserContext/UserContext';
function Destination({ course }) {
    const { title, image, name, address, id } = course;
    const { isOnline } = useContext(AuthContext);
    const errImg = useRef();
    const replaceImage = () => {
        errImg.current.src = replacement;
    }
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a>
                {
                    isOnline ?
                        <img className="rounded-t-lg" src={image} ref={errImg} onError={() => { replaceImage() }} />
                        :
                        <img className="rounded-t-lg" src={loadingImg} alt="" />
                }
            </a>
            <div className="p-5">
                <div>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white min-h-[70px] lg:min-h-[100px]">{name}</h5>
                </div>
                <Link to={`../courses/${id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Details
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    )
}

export default Destination;