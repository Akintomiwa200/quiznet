import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ to, label, icon }) => {
  return (
    <NavLink to={to} activeClassName="active" className="flex items-center px-0 py-4 text-white w-full h-[10vh] m-[2px]">
      <div>
        <span>{icon}</span>
        <span>{label}</span>
      </div>
    </NavLink>
  );
};

export default NavLinks;
