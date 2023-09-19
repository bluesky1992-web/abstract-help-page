import React from 'react';
import services from '../db';

export default function Services() {
  return (
    <div className='m-5 '>
      {services.map((service) => (
        <div className='flex ' key={service.id} >
          <img className='w-[5%] h-[5%] mx-4' src={service.img} alt={service.title} />
          <div>
            <h3 className='text-2xl font-bold'>{service.title}</h3>
            <p className='w-1/2 '>{service.body}</p>
            <a className='text-[#4c5fd5]' href='#'>Learn more...</a>
          </div>
        </div>
      ))}
    </div>
  );
}
