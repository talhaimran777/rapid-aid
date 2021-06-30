import React from 'react';
import { useSelector } from 'react-redux';

// MATERIAL UI
import EditIcon from '@material-ui/icons/Edit';

// COMPONENTS
import TopMenu from '../sub.components/navbar';

// UTILS
import getImageURL from '../../utils/getImageURL';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { email, name } = user;
  const url = getImageURL(email, 150);

  return (
    <div>
      <TopMenu />

      <div className='lg:max-w-screen-lg mx-auto'>
        <div className='profile py-5 my-10 bg-purple-100 px-3'>
          <div id='top' className='flex flex-col justify-between items-center'>
            <div className='flex flex-col items-center mb-4'>
              <img className='rounded-full mb-3' src={url} alt='profileimage' />
              <h1 className='text-2xl text-gray-600 font-black'>{name}</h1>
            </div>

            <button className='focus:outline-none pl-3 pr-2 py-1 bg-purple-600 rounded-sm text-white text-md flex justify-center items-center'>
              <span className='mr-1'>Edit</span>
              <EditIcon style={{ fontSize: 18 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
