import React from 'react';
import ClubPumas from './ClubPumas.png';

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div>
        <img src={ClubPumas} alt="Logo" className="h-10 w-auto" /> 
      </div>
      <div className="space-x-4">
        <a href="#" className="hover:underline">Inicio</a>
        <a href="#" className="hover:underline">Acerca</a>
        <a href="#" className="hover:underline">Contacto</a>
      </div>
    </nav>
  );
}

export default Navbar;
