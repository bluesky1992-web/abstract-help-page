import React from 'react';
export default function NavBar() {
  const styles = {
    // fill: 'rgba(255, 255, 255, 1)',
    transform: 'scaleX(-1)',
    msFilter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)',
    fontSize: '24px',
    
  };
  return (
    <nav className='bg-black py-6 px-4 sm:px-0'>
      <div className='container mx-auto flex items-center justify-between'>
        <a href='#' className='flex items-center font-semibold whitespace-nowrap'>
          <svg
            className='fill-white hover:fill-slate-300 duration-300'
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 24 24'
            style={styles}
          >
            <path d='m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z'></path>
          </svg>
          <h3 className='pl-2 text-white text-2xl mb-2  hover:text-slate-300 duration-300'>
            Abstract <span className='text-3xl  text-white'>|</span>
          </h3>
          <a className=' text-white text-2xl pl-2 pb-[2px] hover:underline'>Help Center</a>
        </a>
      </div>
    </nav>
  );
}
