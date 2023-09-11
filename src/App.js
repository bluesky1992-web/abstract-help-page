import './index.css';
import React from 'react';
import NavBar from './components/NavBar';
import SearchSection from './components/SearchSection';
function App() {
  return (
    <main className='font-sans h-screen '>
      <NavBar />
      <SearchSection />
    </main>
  );
}

export default App;
