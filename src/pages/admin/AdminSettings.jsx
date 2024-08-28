import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';

const UserSettings = () => {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [palette, setPalette] = useState('white');

  const toggleDropdown = (setter) => {
    setter((prev) => !prev);
  };

  const handleThemeChange = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handlePaletteChange = (color) => {
    setPalette(color);
  };

  return (
    <div className={`py-8 flex flex-col items-center h-screen w-[100vw] ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <h3 className={`text-3xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>SETTINGS</h3>
      <div>
        <div className='mt-8'>
          <div className='w-[60vw] bg-white/70 text-black flex justify-between items-center h-12 px-8'>
            <h3>GENERAL</h3>
            <div onClick={() => toggleDropdown(setDropdown)}>
              {dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          {dropdown && (
            <ul>
              <li>
                <div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>THEME</h3>
                  <div className='flex items-center gap-4' onClick={handleThemeChange}>
                    <span className={`h-6 w-6 rounded-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}></span>
                    <h4>{theme.toUpperCase()}</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>PALETTE ACTION</h3>
                  <div className='flex items-center gap-4'>
                    {['white', 'red', 'blue', 'green'].map((color) => (
                      <span
                        key={color}
                        className={`h-6 w-6 rounded-full bg-${color}-500 cursor-pointer`}
                        onClick={() => handlePaletteChange(color)}
                      ></span>
                    ))}
                    <h4>{palette.toUpperCase()}</h4>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
        <div className='mt-4'>
          <div className='w-[60vw] bg-white/70 text-black flex justify-between items-center h-12 px-8'>
            <h3>SECURITY</h3>
            <div onClick={() => toggleDropdown(setDropdown1)}>
              {dropdown1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          {dropdown1 && (
            <ul>
              <li>
                <div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>ISOLATION MODE</h3>
                  <span className='flex items-center'>STRONG</span>
                </div>
              </li>
              <li>
                <div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>SIGN OUT</h3>
                  <span className='text-gray-800'>AUTO</span>
                </div>
              </li>
            </ul>
          )}
        </div>
        <div className='mt-4'>
          <div className='w-[60vw] bg-white/70 text-black flex justify-between items-center h-12 px-8'>
            <h3>ACCOUNT</h3>
            <div onClick={() => toggleDropdown(setDropdown2)}>
              {dropdown2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          {dropdown2 && (
            <ul>
              <li>
                <div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>VIEW ACCOUNT</h3>
                  <div className='flex items-center gap-2'>
                    <span>herkintormiwer@gmail.com</span>
                    <Link to="/dashboard/settings/about">
                      <IoIosArrowForward />
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
        <div className='mt-4'>
          <div className='w-[60vw] bg-white/70 text-black flex justify-between items-center h-12 px-8'>
            <h3>INFO</h3>
            <div onClick={() => toggleDropdown(setDropdown3)}>
              {dropdown3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          {dropdown3 && (
            <ul>
              <li>
                <div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>PASSWORD</h3>
                  <div className='flex items-center gap-2'>
                    <span>herkintormiwer@gmail.com</span>
                    <FaEye />
                  </div>
                </div>
              </li>
              <li>
                <div className='w-[60vw] bg-white/20 text-black flex justify-between items-center h-12 px-8'>
                  <h3>PAYMENT</h3>
                  <div className='flex items-center gap-2'>
                    <span>herkintormiwer@gmail.com</span>
                    <Link to="/dashboard/settings/payment">
                      <IoIosArrowForward />
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
