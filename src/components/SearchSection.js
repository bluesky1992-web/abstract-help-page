import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function SearchSection() {
  return (
    <header className='flex flex-col justify-center items-center bg-[#dadbf1] h-2/3 w-full'>
      <h1 className=' text-2xl sm:text-5xl md:text-7xl font-semibold'>How can we help?</h1>
      <div className='w-2/3 flex justify-center items-center z-0 pb-1 '>
        <input
          type='search'
          id='site-search'
          name='q'
          className='w-[70%] mt-11  rounded-md border-black  h-[70px] hover:border-[#4C5FD5] transition focus:border-[#4C5FD5]'
          placeholder='Search'
          
        />

        <FontAwesomeIcon
          icon={faArrowRight}
          className=' cursor-pointer text-2xl z-10 -ml-10  pt-10  hover:text-[#4C5FD5] transition'
          aria-hidden='true'
        />
      </div>
    </header>
  );
}
