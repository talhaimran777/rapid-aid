import { useState } from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import TopMenu from '../sub.components/navbar';
import FormGroup from './sub.components/formGroup';

const Register = () => {
  // SETTING INITIAL STATE FOR OUR REGISTRATINO COMPONENT
  let initialState = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [state, setState] = useState(initialState);

  // HANDLING FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, confirmPassword } = state;
    console.log('Registering!', email, password, confirmPassword);
  };

  return (
    <div id='form-parent' className='h-screen flex flex-col'>
      <TopMenu />
      <form
        onSubmit={handleSubmit}
        id='form-child'
        className='w-full sm:w-96 p-3 sm:p-10 sm:rounded-lg sm:border-purple-600 sm:border-4 sm:shadow-2xl'
      >
        <div className='flex justify-center items-center text-purple-600 mb-10'>
          <i className='fa fa-plus-square fa-3x mr-3' aria-hidden='true'></i>
          <h1 className=' text-5xl uppercase font-extrabold'>Sign Up</h1>
        </div>

        <FormGroup
          label='Enter Email: '
          name='email'
          type='text'
          state={state}
          setState={setState}
        />
        <FormGroup
          label='Enter Password: '
          name='password'
          type='password'
          state={state}
          setState={setState}
        />
        <FormGroup
          label='Confirm Password: '
          name='confirmPassword'
          type='password'
          state={state}
          setState={setState}
        />

        <div>
          Already a user?{' '}
          <Link className='text-purple-600 font-bold ml-2' to='/login'>
            Login Here
          </Link>
        </div>
        <button className='mt-10 d-block w-full border-purple-600 border-2 py-1 text-purple-600 rounded font-bold hover:bg-purple-600 hover:text-white outline-none focus-within:outline-none'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
