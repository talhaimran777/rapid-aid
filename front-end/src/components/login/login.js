import { useState } from 'react';

// LOGIN CSS
import './styles/login.css';

// COMPONENTS
import TopMenu from '../sub.components/navbar';
import FormGroup from './sub.components/formGroup';

const Login = () => {
  // SETTING INITIAL STATE FOR LOGIN
  let initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  // HANDLING FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = state;
    console.log('LOGGING IN', email, password);
  };

  return (
    <div id='login-page' className='h-screen flex flex-col'>
      <TopMenu />
      <form
        onSubmit={handleSubmit}
        id='login-form'
        className='w-full sm:w-96 p-5 rounded border-purple-300'
      >
        <div className='flex justify-center items-center text-purple-600 mb-10'>
          <i className='mr-3 fas fa-lock fa-3x'></i>
          <h1 className=' text-5xl uppercase font-extrabold'>login</h1>
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

        <button className='mt-4 d-block w-full border-purple-600 border-2 py-1 text-purple-600 rounded font-bold hover:bg-purple-600 hover:text-white outline-none focus-within:outline-none'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
