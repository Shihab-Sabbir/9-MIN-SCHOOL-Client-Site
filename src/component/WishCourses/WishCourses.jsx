import React, { useContext, useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import Course from '../Courses/Course';

function WishCourses() {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { isMenuOpen } = useOutletContext();
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem(`${user?.uid}-course`)));
        if (user?.uid) {
            setLoading(false);
        }
    }, [user?.uid])
console.log(data)
    return (
        <div className={isMenuOpen ? 'pt-[400px] min-h-screen' : 'min-h-screen'}>
            {loading && <div className="mx-auto mt-[150px] w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-400 dark:border-red-400"></div>}
            {loading || <div className='flex flex-col justify-start items-center px-4 p-2 '>
                {data?.length > 0 && <p className='text-gray-400 pb-5 uppercase font-bold text-sm'>Total {data?.length} wished courses found</p>}
                {data===null && <p className='text-gray-400 pb-5 uppercase font-bold text-sm'>No course in wishlist , please add one </p>}
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {
                        data?.map(course => <Course
                            key={course.id}
                            course={course}
                        />)
                    }
                </div>
            </div>}
        </div>
    )
}

export default WishCourses;