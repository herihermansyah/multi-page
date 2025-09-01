import React from "react";
import { Link } from "react-router-dom";

const OfferMenu = () => {
  return (
    <div className="flex gap-10 ">
      <Link className="hover:text-gray-400" to="room">
        Hotels Rooms
      </Link>
      <Link className="hover:text-gray-400" to="resto">
        Restaurant
      </Link>
      <Link className="hover:text-gray-400" to="wedding">
        Weddings
      </Link>
      <Link className="hover:text-gray-400" to="fitnes">
        Fitnes Center
      </Link>
    </div>
  );
};

export default OfferMenu;
