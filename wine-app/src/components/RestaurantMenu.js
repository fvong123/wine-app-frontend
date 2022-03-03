import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantMenu = () => {

  return (
    <nav>
      <div className="flex-col bg-white text-black                                                       font-mono p-2 mt-4">
        <h1 className="font-mono p-2 font-bold">Restaurants</h1>
        <div className="p-3">
          <Link to="/mumu">MuMu</Link>
        </div>
      </div>
    </nav>
  );
};

export default RestaurantMenu;