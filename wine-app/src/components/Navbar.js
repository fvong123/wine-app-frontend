import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black                       relative shadow-lg font-mono font-bold border-b">
        <Link to="/" className='pl-3 font-bold'>
          WINES
        </Link>
    </nav>
  );
};

export default Navbar;