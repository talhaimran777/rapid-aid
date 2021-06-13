import './styles/navbar.css';
import { Link } from 'react-router-dom';
const TopMenu = () => {
  return (
    <nav className='py-3 px-3 bg-purple-500'>
      <div className='max-w-screen-lg mx-auto flex'>
        <h1 className='font-bold text-white flex-1 tracking-wide text-lg'>
          Rapid AID
        </h1>

        <ul className='flex text-white'>
          <li className='mr-6'>
            <Link to='/'>Home</Link>
            {/* <a href='/'>Home</a> */}
          </li>
          <li className='mr-6'>
            <Link to='/postTask'>Post</Link>
          </li>
          <li>
            <Link to='/tasks'>Tasks</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopMenu;
