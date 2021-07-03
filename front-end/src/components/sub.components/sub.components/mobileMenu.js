import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// PROFILE IMAGE
import ProfileImage from '../../profileImage/profile.image';

// MATERIAL COMPONENTS
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

// MATERIAL ICONS
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import PostAddIcon from '@material-ui/icons/PostAdd';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';

// USE SELECTOR HOOK
import { useSelector } from 'react-redux';

const MobileMenu = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  // FOR HAMBURGER MENU OPEN & CLOSE
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        className='focus:outline-none'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon style={{ color: 'white', fontSize: '30px' }} />
      </button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        children='hello'
      >
        <MenuList>
          <hr />
          <MenuItem onClick={handleClose}>
            <Link className='text-sm font-semibold text-purple-500' to='/'>
              <HomeOutlined className='mr-1 text-purple-600' />
              Home
            </Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link
              className='text-sm font-semibold text-purple-500'
              to='/postTask'
            >
              <PostAddIcon className='mr-1 text-purple-600' />
              Post Work
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link className='text-sm font-semibold text-purple-500' to='/tasks'>
              <WorkOutlineOutlinedIcon className='mr-1 text-purple-600' />
              Check Work
            </Link>
          </MenuItem>
        </MenuList>

        {!isAuthenticated ? (
          <MenuList>
            <hr />
            <MenuItem onClick={handleClose}>
              <Link
                className='text-sm font-semibold text-purple-500'
                to='/login'
              >
                <LockOpenIcon className='mr-1 text-purple-600' />
                Login
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link
                className='text-sm font-semibold text-purple-500'
                to='/register'
              >
                <AddBoxOutlinedIcon className='mr-1 text-purple-600' />
                Register
              </Link>
            </MenuItem>
          </MenuList>
        ) : (
          <ProfileImage className='ml-5' />
        )}
      </Menu>
    </div>
  );
};

export default MobileMenu;
