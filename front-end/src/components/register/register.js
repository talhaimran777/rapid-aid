import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// COMPONENTS
import TopMenu from '../sub.components/navbar';
import FormGroup from './sub.components/formGroup';

// AXIOS
import axios from 'axios';

const Register = () => {
  // SETTING INITIAL STATE FOR OUR REGISTRATION COMPONENT
  let initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [state, setState] = useState(initialState);

  // EXTRACTING DISPATCH
  const dispatch = useDispatch();

  // HANDLING FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

    // let { email, password, confirmPassword } = state;
    // console.log('Registering!', email, password, confirmPassword);

    // if (!email) {
    //   email = '';
    // } else if (!password) {
    //   password = '';
    // } else if (!confirmPassword) {
    //   confirmPassword = '';
    // }

    const postData = async () => {
      try {
        let res = await axios.post('/api/register', state);
        console.log(res.data);
      } catch (err) {
        if (err.response.data) {
          dispatch({ type: 'VALIDATIION_ERRORS', payload: err.response.data });
        }
        // console.log(err.response.data);
      }
    };

    postData();
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
          label='Enter Name: '
          name='name'
          type='text'
          state={state}
          setState={setState}
        />
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
