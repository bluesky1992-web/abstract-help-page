import React from 'react';
export default function NavBar() {
  return (
    <nav className="bg-blue-500 py-4 px-4 sm:px-0">
  <div className="container mx-auto flex items-center justify-between">
    <a href="#" className="text-white font-bold text-xl">Logo</a>
    <ul className="flex space-x-6 ml-auto"> 
      <li><a href="#" className="text-white">Home</a></li>
      <li><a href="#" className="text-white">About</a></li>
      <li><a href="#" className="text-white">Services</a></li>
      <li><a href="#" className="text-white">Contact</a></li>
    </ul>
  </div>
</nav>


  
  );
}
