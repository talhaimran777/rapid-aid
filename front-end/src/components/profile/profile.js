import React from 'react';

// COMPONENTS
import TopMenu from '../sub.components/navbar';
const Profile = () => {
  return (
    <div>
      <TopMenu />

      <div className='max-w-screen-lg mx-auto px-3 lg:px-0'>
        <h1>Profile Component</h1>
      </div>
    </div>
  );
};

export default Profile;
