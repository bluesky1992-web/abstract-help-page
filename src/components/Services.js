import React from 'react';
import services from '../db';

export default function Services() {
  return (
    <div className='py-20 grid sm:grid-cols-2 gap-9 justify-center items-center sm:ml-14  grid-cols-1 px-5 '>
      {services.map((service) => (
        <div className='' key={service.id}>
          <div className='flex  '>
            <img className='w-16 h-16 mx-4' src={service.img} alt={service.title} />
            <div>
              <h3 className='text-2xl font-bold'>{service.title}</h3>
              <p className=' max-w-xs text-2xl break-words'>{service.body}</p>
              <a className='text-[#4C5FD5] text-xl' href='#'>
                Learn more...
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
