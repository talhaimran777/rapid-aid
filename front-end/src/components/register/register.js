import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// COMPONENTS
import TopMenu from '../sub.components/navbar';
import FormGroup from './sub.components/formGroup';

// AXIOS
import axios from 'axios';

// STYLES API FORM MATERIAL UI CORE
import { makeStyles } from '@material-ui/core/styles';

// SPINNER
import CircularProgress from '@material-ui/core/CircularProgress';

// CREATING STYLES FOR MY SPINNER OR LOADER
const useStyles = makeStyles({
  root: {
    height: '1px',
  },
});

const Register = () => {
  // SETTING INITIAL STATE FOR OUR REGISTRATION COMPONENT
  let initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [state, setState] = useState(initialState);

  // USING HISTORY
  const history = useHistory();

  // STYLE CLASSES FOR MY SPINNER
  const classes = useStyles();

  // EXTRACTING INPROCESS VARIABLE FROM GLOBAL STATE
  const { inProcess } = useSelector((state) => state.signup);

  // USING THIS HOOK TO CLEAR THE FORM VALIDATIION_ERRORS UPON COMPONENTS EXITS
  useEffect(() => {
    return function () {
      dispatch({ type: 'CLEAR_ERRORS' });
    };
  }, []);

  // EXTRACTING DISPATCH
  const dispatch = useDispatch();

  // HANDLING FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

    // STARTING THE REGISTRATION PROCESS
    dispatch({ type: 'REGISTRATION_INITIATED' });

    const postData = async () => {
      try {
        let res = await axios.post('/api/register', state);

        if (res.data) {
          // REGISTRATION SUCCESS
          dispatch({ type: 'REGISTRATION_SUCCESS' });

          // REDIRECT TO LOGIN COMPONENT
          history.push('/login');
        }
      } catch (err) {
        if (err.response.data) {
          dispatch({ type: 'VALIDATIION_ERRORS', payload: err.response.data });

          // REGISTRATION FAILED
          dispatch({ type: 'REGISTRATION_FAILED' });
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

        <div className='mt-10 flex justify-start items-center'>
          <button className=' d-inline border-purple-600 border-2 px-3 py-1 text-purple-600 rounded font-bold hover:bg-purple-600 hover:text-white outline-none focus-within:outline-none'>
            Register
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

export default Register;
