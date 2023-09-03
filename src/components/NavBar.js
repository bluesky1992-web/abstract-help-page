import React from 'react';
import { useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function NavBar() {
  const [nav, setNav] = useState(false);
  const showNav = () => {
    setNav(!nav);
  };

  const styles = {
    transform: 'scaleX(-1)',
    msFilter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)',
    fontSize: '24px',
  };
  return (
    <nav className='bg-black py-5 px-4 sm:px-0'>
      <div className='container mx-auto flex items-center justify-between'>
        <div href='#' className='flex items-center font-semibold whitespace-nowrap'>
          <svg
            className='fill-white hover:fill-slate-300 duration-300 cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 24 24'
            style={styles}
          >
            <path d='m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z'></path>
          </svg>
          <h3 className='pl-2 text-white text-2xl mb-2  hover:text-slate-300 duration-300 cursor-pointer'>
            Abstract <span className='text-3xl  text-white'>|</span>
          </h3>
          <a className=' text-white text-2xl pl-2 pb-[2px] hover:underline cursor-pointer'>
            Help Center
          </a>
        </div>
        <nav className='flex '>
          <div className='hidden md:block gap-5'>
            <button className='whitespace-nowrap bg-[#191a1b]  text-white  text-2xl py-2 px-8 border border-white rounded-lg '>
              Submit a request
            </button>
            <button className='whitespace-nowrap bg-[#4C5FD5] hover:bg-white duration-300  hover:text-black text-white font-semibold text-2xl py-3 rounded-lg  px-10 mx-5'>
              Sign in
            </button>
          </div>
        </nav>
        {/*hamburger menu*/}
        {nav ? (
          <FontAwesomeIcon
            icon={faTimes}
            className=' right-[30px] text-3xl z-50 md:hidden text-white'
            aria-hidden='true'
            onClick={showNav}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            className='text-3xl md:hidden text-white'
            aria-hidden='true'
            onClick={showNav}
          />
        )}
        {/* mobile nav */}
        <nav
          className={`h-[100vh] fixed top-[0px] right-[0px] flex flex-col pt-16 gap-5 items-center  w-full md:hidden bg-black  z-40 duration-1000 ${
            nav ? 'right-[0px]' : 'right-[-100vw]'
          } `}
        >
          <button className=' w-[85%] whitespace-nowrap bg-[#191a1b]  text-white  text-2xl py-2 px-8 border border-white rounded-lg '>
            Submit a request
          </button>
          <button className='w-[85%] whitespace-nowrap bg-[#4C5FD5] hover:bg-white duration-300  hover:text-black text-white font-semibold text-2xl py-3 rounded-lg  px-10 mx-5'>
            Sign in
          </button>
        </nav>
      </div>
    </nav>
  );
}
