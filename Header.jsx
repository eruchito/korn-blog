import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-violet py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/placeholder.svg" alt="Korn" className="h-10 mr-4" />
          <h1 className="text-2xl font-bold">Korn</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-purple">Inicio</Link>
          <Link to="/discography" className="hover:text-purple">Discografía</Link>
          <Link to="/gallery" className="hover:text-purple">Galería</Link>
          <Link to="/concerts" className="hover:text-purple">Conciertos</Link>
        </nav>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;

