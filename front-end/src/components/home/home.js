import React from 'react';
import TopMenu from '../sub.components/navbar';
const Home = () => {
  return (
    <>
      <TopMenu />
      <div className='max-w-screen-lg mx-auto px-3 lg:px-0'>
        <h1>Home Component</h1>
      </div>
    </>
  );
};

export default Home;
