import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

// AXIOS
import axios from 'axios';

// DISPATCH
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import TopMenu from '../sub.components/navbar';
import FormGroup from './sub.components/formGroup';

// SPINNER
import CircularProgress from '@material-ui/core/CircularProgress';

const Login = () => {
  // SETTING INITIAL STATE FOR LOGIN
  let initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  // EXTRACTING INPROCESS & STATUS VARIABLES FROM GLOBAL STATE
  const { inProcess, status } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const history = useHistory();

  // USING THIS HOOK TO CLEAR THE FORM VALIDATIION_ERRORS UPON COMPONENTS EXITS
  useEffect(() => {
    return function () {
      dispatch({ type: 'CLEAR_ERRORS' });
    };
  }, [dispatch]);

  // HANDLING FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

    // STARTING THE REGISTRATION PROCESS
    dispatch({ type: 'LOGIN_INITIATED' });

    const postData = async () => {
      try {
        let res = await axios.post('/api/login', state);

        if (res.data) {
          // LOGIN SUCCESS
          dispatch({ type: 'LOGIN_SUCCESS' });

          if (status === 'SUCCESS') {
            // REDIRECT TO HOMEPAGE
            history.push('/');
          }
        }
      } catch (err) {
        if (err.response.data) {
          dispatch({ type: 'VALIDATIION_ERRORS', payload: err.response.data });

          // LOGIN FAILED
          dispatch({ type: 'LOGIN_FAILED' });
        }
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

        <div>
          Not registered yet?{' '}
          <Link className='text-purple-600 font-bold ml-2' to='/register'>
            Register Here
          </Link>
        </div>

        <div className='mt-10 flex justify-start items-center'>
          <button className=' d-inline border-purple-600 border-2 px-3 py-1 text-purple-600 rounded font-bold hover:bg-purple-600 hover:text-white outline-none focus-within:outline-none'>
            Login
          </button>

          {inProcess ? (
            <div className='text-center ml-3'>
              <CircularProgress />
            </div>
          ) : (
            ''
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
