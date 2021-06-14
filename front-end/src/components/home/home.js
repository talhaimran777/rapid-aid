import React from 'react';

const Home = () => {
  return (
    <div className='max-w-screen-lg mx-auto px-3 lg:px-0'>
      <div className=' py-36 flex'>
        <div className='w-full lg:w-1/2'>
          <h1 className='text-5xl font-black text-purple-600  mb-4'>
            Need Help In Your Daily Routine Work?
          </h1>
          <h1 className='text-gray-600 font-black text-2xl mb-6'>
            Get Help Rapidly.
          </h1>

          <p className='text-gray-500 text-base'>
            Get help from thousands of trusted Workers for everything from
            plumbing, washing to deliveries.
          </p>
        </div>

        <div className='bg-purple-600 flex-1 rounded p-5 hidden lg:block'>
          <img
            className='h-full text-center mx-auto'
            src='images/logo.svg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
