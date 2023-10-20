import React from 'react';

export default function Footer() {
  return (
    <footer className='mt-auto  pl-28 bg-black w-full h-[398px]'>
      <section className='flex gap-14 py-10'>
        <div className='flex flex-col '>
          <h3 className='text-white text-2xl font-bold'>Abstract</h3>
          <ul className='text-white py-5'>
            <li className='hover:underline cursor-pointer leading-6 font-semibold '>Start Trial</li>
            <li className='hover:underline cursor-pointer leading-6 font-semibold'>Pricing</li>
            <li className='hover:underline cursor-pointer leading-6 font-semibold'>Download</li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-white text-2xl font-bold'>Resources</h3>
          <ul className='text-white py-5'>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold'>
              Blogs
            </li>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold'>
              Help Center
            </li>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold'>
              Release Notes
            </li>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold'>
              {' '}
              Status
            </li>
          </ul>
        </div>
        <div className='flex flex-col'>
          <h3 className='text-white text-2xl font-bold '>Community</h3>
          <ul className='text-white py-5'>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold  '>
              Twitter
            </li>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold'>
              Linkedin
            </li>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold'>
              Dribble
            </li>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold'>
              Podcast
            </li>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold'>
              Facebook
            </li>
          </ul>
        </div>
        <div className='flex flex-col text-white'>
          <h3 className='text-white text-2xl font-bold'>Company</h3>
          <ul className='text-white py-5'>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold '>
              About Us{' '}
            </li>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold'>
              Careers
            </li>
            <li className='hover:underline cursor-pointer leading-6 text-base font-semibold'>
              Legal
            </li>
          </ul>
          <h3 className='font-semibold  text-lg mt-7'>Contact Us</h3>
          <a href='' className='cursor-pointer hover:underline'>
            info@abstract.com
          </a>
        </div>
      </section>
    </footer>
  );
}
