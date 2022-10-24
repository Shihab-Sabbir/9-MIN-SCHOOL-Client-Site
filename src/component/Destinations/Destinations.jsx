import { Pagination } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useLoaderData, useOutletContext } from 'react-router-dom';
import Destination from './Destination';

function Destinations() {
    let [page, setPage] = useState(1);
    const [locations, setLocations] = useState([]);

    // const destinations = useLoaderData();
    useEffect(() => {
        fetch(`https://booking-site-two.vercel.app/destinations/${page}`).then(res => res.json()).then(data => setLocations(data)).catch(err => console.log(err));
    }, [page]);

    const { pages, data, start, end } = locations;
    const { isMenuOpen } = useOutletContext();
    function onPageChange() {
    }
    function handleClick(event) {
        const data = event.target.innerText;
        if (data === 'Go back') { setPage(page - 1) };
        if (data === 'Go forward') { setPage(page + 1); };
        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <div className={isMenuOpen ? 'pt-[250px]' : ''}>
            <div className='flex flex-col justify-center items-center px-4 pt-4'>
                <p className='text-gray-400 py-5 '>Showing destination {start} to {end - 1} out of {pages}</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                    {
                        data?.map(destination => <Destination
                            key={destination.id}
                            destination={destination}
                        />)
                    }
                </div>
                <div className="flex items-center justify-center text-center my-8">
                    <Pagination onClick={handleClick}
                        currentPage={page}
                        layout="pagination"
                        onPageChange={onPageChange}
                        showIcons={true}
                        totalPages={pages || 0}
                        previousLabel="Go back"
                        nextLabel="Go forward"
                    />
                </div>
            </div>
        </div>
    )
}

export default Destinations;