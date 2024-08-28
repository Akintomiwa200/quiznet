
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ menuItems }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`absolute z-50 h-[100vh] bg-yellow-400 transition-all duration-300 ${isHovered ? 'w-[20vw]' : 'w-[5vw]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className='pt-16'>
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              isActive ? "bg-blue-300 text-white" : "text-black"
            }
          >
            <li className={`h-[3em] flex items-center rounded-xl border-white my-1 mx-4 px-2 transition-all duration-300 ${isHovered ? 'justify-start' : 'justify-center'} hover:bg-blue-300 hover:text-white`}>
              <span className="icon">{item.icon}</span>
              <span className={`text ml-4 ${isHovered ? 'block' : 'hidden'}`}>{item.text}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
