import { Pagination, Sidebar } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useOutletContext } from 'react-router-dom';
import Destination from './Destination';
import { FiMonitor } from 'react-icons/fi'
function Destinations() {
    let [page, setPage] = useState(1);
    const [allCourse, setAllCourse] = useState([]);
    const [locations, setLocations] = useState([]);

    // const destinations = useLoaderData();
    useEffect(() => {
        fetch(`http://localhost:5000/courses/${page}`).then(res => res.json()).then(data => setLocations(data)).catch(err => console.log(err));
    }, [page]);

    useEffect(() => {
        fetch(`http://localhost:5000/courses`).then(res => res.json()).then(data => setAllCourse(data)).catch(err => console.log(err));
    }, []);

    const { pages, data, start, end } = locations;
    const pageNumber = Math.ceil(pages / 4);
    const { isMenuOpen } = useOutletContext();
    function onPageChange() {
    }
    function handleClick(event) {
        const data = event.target.innerText;

        if (page < pageNumber && data === 'Go forward') {
            setPage(page + 1)
        }
        else if (page === pageNumber && data === 'Go forward') {
            window.alert('no more course to show')
        };

        if (page > 1 && data === 'Go back') {
            setPage(page - 1)
        };

        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <div className={isMenuOpen ? 'pt-[250px]' : ''}>
            <div className='lg:flex-row flex-col flex'>
                <div className='flex flex-col justify-start items-center px-4 pt-2 min-h-screen'>
                    <p className='text-gray-400 pb-5 '>Showing courses {start} to {end - 1} out of {pages}</p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                        {
                            data?.map(course => <Destination
                                key={course.id}
                                course={course}
                            />)
                        }
                    </div>
                    <div className="flex items-center justify-center text-center my-8">
                        <Pagination onClick={handleClick}
                            currentPage={page}
                            layout="pagination"
                            onPageChange={onPageChange}
                            showIcons={true}
                            totalPages={pageNumber || 0}
                            previousLabel="Go back"
                            nextLabel="Go forward"
                        />
                    </div>
                </div>
                <div>
                    <div className="w-full lg:h-fit p-2">
                        <p className='text-center uppercase text-sm font-bold'>all courses at a glance</p>
                        <Sidebar aria-label="Sidebar with multi-level dropdown example">
                            <Sidebar.Items>
                                <ul>
                                    {
                                        allCourse?.map(course =>
                                            <p
                                                key={course.id}
                                                className='flex items-center '
                                            >   <FiMonitor className='text-sm pr-2' />
                                                <Link to={`../courses/${course.id}`} className='text-xs hover:bg-slate-200 p-1 w-full rounded-md'>{course.name.length > 30 ? course.name.slice(0, 30) + '...' : course.name}</Link>
                                            </p>)
                                    }
                                </ul>
                            </Sidebar.Items>
                        </Sidebar>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations;