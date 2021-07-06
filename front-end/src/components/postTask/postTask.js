import React, { useState } from 'react';
import TopMenu from '../sub.components/navbar';

// MATERIAL UI DETAILS
import AssignmentIcon from '@material-ui/icons/Assignment';

// COMPONENTS
import FormGroup from './sub.components/formGroup';
import AreaGroup from './sub.components/areaGroup';
import BudgetSlider from './sub.components/budgetSlider';
import DueDatePicker from './sub.components/duedatePicker';

const PostTask = () => {
  // SETTING INITIAL STATE FOR LOGIN
  let initialState = {
    title: '',
    description: '',
    location: '',
    budget: 0,
    dueDate: '',
  };

  const [state, setState] = useState(initialState);

  // HANDLING FORM SUBMISSION
  const handleSubmit = (e) => {
    e.preventDefault();

    // STARTING THE LOGIN PROCESS
    // dispatch({ type: 'LOGIN_INITIATED' });

    const postData = async () => {
      console.log('Task Posted ', state);
      // try {
      //   let res = await axios.post('/api/login', state);

      //   if (res.data) {
      //     const { token } = res.data;

      //     localStorage.setItem('jwtToken', token);

      //     // Set token to Auth header
      //     setAuthToken(token);

      //     // Decode token to get user data
      //     const decoded = jwt_decode(token);

      //     // Set current user
      //     dispatch(setCurrentUser(decoded));

      //     // LOGIN SUCCESS
      //     dispatch({ type: 'LOGIN_SUCCESS' });

      //     // CLEARING IF ANY ERRORS ALREADY EXISTS
      //     dispatch({ type: 'CLEAR_ERRORS' });

      //     // REDIRECT TO HOMEPAGE
      //     history.push('/');
      //   }
      // } catch (err) {
      //   if (err.response.data) {
      //     dispatch({ type: 'VALIDATIION_ERRORS', payload: err.response.data });

      //     // LOGIN FAILED
      //     dispatch({ type: 'LOGIN_FAILED' });
      //   }
      // }
    };

    postData();
  };

  return (
    <div className=''>
      <TopMenu />
      <form
        onSubmit={handleSubmit}
        className='w-full sm:w-96 px-3 py-10 sm:p-10 sm:rounded-lg  sm:shadow-2xl bg-white mx-auto my-32'
      >
        <div className='flex justify-center items-center mb-8'>
          <AssignmentIcon
            style={{ fontSize: '44px', marginRight: '10px', color: '#7C3AED' }}
          />
          <h1 className='text-center text-5xl font-extrabold text-purple-600'>
            Details
          </h1>
        </div>

        <FormGroup
          label='Enter Task Title: '
          name='title'
          type='text'
          state={state}
          setState={setState}
        />

        <AreaGroup
          label='Enter Description: '
          name='description'
          state={state}
          setState={setState}
        />

        <FormGroup
          label='Give Address: '
          name='location'
          type='text'
          state={state}
          setState={setState}
        />

        <BudgetSlider
          label='Set Budget: '
          name='budget'
          state={state}
          setState={setState}
        />

        <DueDatePicker />
        {/*<FormGroup
          label='Enter your budget: '
          name='budget'
          type='text'
          state={state}
          setState={setState}
        />
        <FormGroup
          label='Set due date: '
          name='dueDate'
          type='text'
          state={state}
          setState={setState}
        /> */}

        <div className='mt-5 flex justify-start items-center'>
          <button className=' d-inline border-purple-600 border-2 px-3 py-1 text-purple-600 rounded font-bold hover:bg-purple-600 hover:text-white outline-none focus-within:outline-none'>
            Post Task
          </button>

          {/* {inProcess ? (
            <div className='text-center ml-3'>
              <CircularProgress />
            </div>
          ) : (
            ''
          )} */}
        </div>
      </form>
    </div>
  );
};

export default PostTask;
