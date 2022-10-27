import { Pagination, Sidebar } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom';
import Course from './Course';
import { FiMonitor } from 'react-icons/fi'
import toast from 'react-hot-toast';
function Courses() {
    let [page, setPage] = useState(1);
    const [allCourse, setAllCourse] = useState([]);
    const [locations, setLocations] = useState([]);
    const [spinner, setSpinner] = useState(true);

    // const destinations = useLoaderData();
    useEffect(() => {
        fetch(`https://9-min-school.vercel.app/courses/${page}`).then(res => res.json()).then(data => { setLocations(data); setSpinner(false) }).catch(err => console.log(err));
    }, [page]);

    useEffect(() => {
        fetch(`https://9-min-school.vercel.app/courses`).then(res => res.json()).then(data => { setAllCourse(data); }).catch(err => console.log(err));
    }, []);

    const { pages, data, start, end } = locations;
    const pageNumber = Math.ceil(pages / 6);
    const { isMenuOpen } = useOutletContext();
    const pagination = useRef();
    function handleClick(event) {
        const data = event.target.innerText;
        if (page < pageNumber && data === 'NEXT') {
            setPage(page + 1)
        }
        else if (page === pageNumber && data === 'NEXT') {
            toast.error('no more course to show')
        };

        if (page > 1 && data === 'PREV') {
            setPage(page - 1)
        };

        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <div className={isMenuOpen ? 'pt-[400px] min-h-screen' : 'min-h-screen'}>
            {spinner && <div className="mx-auto mt-[150px] w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-400 dark:border-red-400"></div>}
            <div className='lg:flex-row flex-col flex'>
                {spinner || <div className='flex flex-col justify-start items-center px-4 pt-2 '>
                    <p className='text-gray-400 pb-5 '>Showing courses {start} to {end - 1} out of {pages}</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                        {
                            data?.map(course => <Course
                                key={course.id}
                                course={course}
                            />)
                        }
                    </div>
                    <div className='w-full'>
                        <div className="flex items-center justify-center text-center my-8" onClick={handleClick}>
                            <Pagination ref={pagination}
                                onPageChange={() => { console.log('changed') }}
                                currentPage={page}
                                layout="pagination"
                                showIcons={false}
                                totalPages={pageNumber || 0}
                                previousLabel='PREV'
                                nextLabel='NEXT'
                            />
                        </div>
                    </div>
                </div>}
                <div className='p-2'>
                    {spinner || <div className="w-full p-2 border-2 border-slate-200 rounded-lg dark:border-slate-600 lg:pr-4 flex justify-center flex-col items-center">
                        <p className='text-center uppercase text-sm font-bold pb-4'>all courses at a glance</p>
                        <aside className='max-w-[100vw] lg:min-w-[250px] flex justify-around bg-white dark:bg-slate-800 p-2'
                        >
                            <ul className='grid lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-1 gap-x-4'>

                                {
                                    allCourse?.map(course =>
                                        <p
                                            key={course.id}
                                            className='flex items-center lg:mb-[6%] 2xl:mb-[8%]
                                            3xl:mb-[10%]'
                                        >   <FiMonitor className='text-sm pr-2' />
                                            <Link to={`../course/${course.id}`} className='text-xs hover:bg-slate-200 p-1 w-full rounded-md'>{course.name.length > 30 ? course.name.slice(0, 30) + '...' : course.name}</Link>
                                        </p>)
                                }

                            </ul>
                        </aside>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Courses;