import './index.css';
import React from 'react';
import NavBar from './components/NavBar';
import SearchSection from './components/SearchSection';
import services from './db.js'
import Services from './components/Services';
console.log(services)
function App() {
  return (
    <main className='font-sans h-screen '>
      <NavBar />
      <SearchSection />
      <Services />
    </main>
  );
}

export default App;
