import './styles/navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TopMenu = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <nav className='h-12 px-3 bg-purple-600'>
      <div className='min-h-full max-w-screen-lg mx-auto flex h-full justify-center'>
        <div className='flex flex-1 items-center'>
          <img className='mr-1' src='images/logo.svg' alt='' />
          <h1 className='logo font-bold text-white flex-1 tracking-wide text-lg'>
            Rapid Aid
          </h1>
        </div>

        <ul className='flex text-white items-center'>
          <li className='mr-4'>
            <Link className='font-normal text-sm hover:text-gray-300' to='/'>
              Home
            </Link>
          </li>
          <li className='mr-4'>
            <Link
              className='font-normal text-sm hover:text-gray-300'
              to='/postTask'
            >
              Post Work
            </Link>
          </li>
          <li className='mr-4'>
            <Link
              className='font-normal text-sm hover:text-gray-300'
              to='/tasks'
            >
              Check Work
            </Link>
          </li>

          {!isAuthenticated ? (
            <>
              <li className='mr-4'>
                <Link
                  className='font-normal text-sm hover:text-gray-300'
                  to='/login'
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className='font-normal text-sm hover:text-gray-300'
                  to='/register'
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            ''
          )}
        </ul>
      </div>
    </nav>
  );
};

export default TopMenu;
