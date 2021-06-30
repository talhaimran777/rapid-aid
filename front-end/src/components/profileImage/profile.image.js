import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// MATERIAL UI
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';

// FOR CUSTOM STYLES
import { withStyles } from '@material-ui/core/styles';

// UTILS
import setAuthToken from '../../utils/setAuthToken';
import getImageURL from '../../utils/getImageURL';

// AUTH ACTIONS
import { setCurrentUser } from '../../actions/authActions';

const ProfileImage = () => {
  const dispatch = useDispatch();

  const StyledMenuItem = withStyles({
    root: {
      fontWeight: 'bold',
      color: '#7C3AED',
    },
  })(MenuItem);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    // Logout user
    // Remove token from local storage
    localStorage.removeItem('jwtToken');

    // Remove auth header for future requests
    setAuthToken(false);

    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));

    // Redirect to login
    window.location.href = './login';
  };

  const { user } = useSelector((state) => state.auth);

  // GETTING EMAIL FROM THE USER OBJECT
  const { email, id } = user;

  // GET PROFILE IMAGE URL
  const url = getImageURL(email, 200);

  return (
    <div>
      <div
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <img
          height='35px'
          width='35px'
          className=' rounded-full cursor-pointer ml-5'
          src={url}
          alt='userimage'
        />
      </div>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={`/${id}`}>
          <StyledMenuItem className='flex justify-between items-end'>
            <PersonIcon style={{ fontSize: 24 }} />
            <h1 className='ml-1'>Profile</h1>
          </StyledMenuItem>
        </Link>
        <StyledMenuItem
          className='flex justify-between items-end'
          onClick={logout}
        >
          <ExitToAppIcon style={{ fontSize: 24 }} />
          <h1 className='ml-1'>Logout</h1>
        </StyledMenuItem>
      </Menu>
    </div>
  );
};

export default ProfileImage;
