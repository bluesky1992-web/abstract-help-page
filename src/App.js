import './index.css';
import React from 'react';
import NavBar from './components/NavBar';
import SearchSection from './components/SearchSection';
import Services from './components/Services';
import Footer from './components/Footer';
function App() {
  return (
    <main className='font-sans  flex flex-col'>
      <NavBar />
      <SearchSection />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
