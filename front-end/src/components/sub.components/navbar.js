import './styles/navbar.css';

import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// FOR HAMBURGER MENU
import MobileMenu from './sub.components/mobileMenu';

// PROFILE IMAGE
import ProfileImage from '../profileImage/profile.image';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const TopMenu = () => {
  const [width] = useWindowSize();

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <nav className='h-12 px-3 bg-purple-600 sticky top-0 shadow-sm'>
      <div className='min-h-full max-w-screen-lg mx-auto flex h-full justify-center items-center'>
        <div className='flex flex-1 items-center'>
          <img className='mr-1' src='images/logo.svg' alt='' />
          <h1 className='logo font-bold text-white flex-1 tracking-wide text-lg'>
            Rapid Aid
          </h1>
        </div>

        {width <= 640 ? (
          <MobileMenu />
        ) : (
          <ul className='flex text-white items-center'>
            <li className='mr-4'>
              <Link
                className='text-sm font-semibold hover:text-gray-300'
                to='/'
              >
                Home
              </Link>
            </li>
            <li className='mr-4'>
              <Link
                className='text-sm font-semibold hover:text-gray-300'
                to='/postTask'
              >
                Post Work
              </Link>
            </li>
            <li className='mr-4'>
              <Link
                className='text-sm font-semibold hover:text-gray-300'
                to='/tasks'
              >
                Check Work
              </Link>
            </li>

            {!isAuthenticated ? (
              <>
                <li className='mr-4'>
                  <Link
                    className='font-semibold text-sm hover:text-gray-300'
                    to='/login'
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    className='font-semibold text-sm hover:text-gray-300'
                    to='/register'
                  >
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <ProfileImage />
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default TopMenu;
