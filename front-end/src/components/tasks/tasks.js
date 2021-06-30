import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS
import TopMenu from '../sub.components/navbar';

// ACTIONS
import {
  loadTasks,
  loadTasksSuccess,
  zeroTasks,
} from '../../actions/tasksActions';

// SPINNER
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

const Tasks = () => {
  // USING USE STATE FOR OUR TASKS
  const [tasks, setTasks] = useState([]);

  const { loading } = useSelector((state) => state.tasks);

  // DISPATCH
  const dispatch = useDispatch();

  // FETCHING TASKS HERE
  const fetchTasks = async () => {
    const res = await axios.get('/api/tasks');
    const { data } = res;

    const { tasks } = data;

    if (tasks.length) {
      dispatch(loadTasksSuccess(tasks));
    } else {
      dispatch(zeroTasks());
    }
  };

  useEffect(() => {
    // axios
    //   .get('/api/tasks')
    //   .then((response) => console.log(response.data))
    //   .catch((error) => console.log(error));

    dispatch(loadTasks());
    fetchTasks();
  }, []);

  return (
    <div>
      <TopMenu />

      <div className='lg:max-w-screen-lg mx-auto'>
        <div className='profile py-5 my-10 bg-purple-100 lg:px-3'>
          {loading ? (
            <div className='text-center ml-3'>
              <CircularProgress />
            </div>
          ) : (
            <div className=''>
              <h1 className='text-center text-2xl text-gray-600 font-black mb-5'>
                Available Tasks
              </h1>

              <div className='px-3 pt-3 pb-4 bg-white sm:max-w-lg sm:mx-auto sm:rounded-md'>
                <div className='top flex justify-between items-center'>
                  <div className='left'>
                    <img
                      className='rounded-full border-2 border-purple-600'
                      height='80px'
                      width='80px'
                      src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
                      alt=''
                      srcSet=''
                    />
                  </div>
                  <div className='mid'>
                    <h1 className='text-md font-bold text-gray-600 mb-3'>
                      Electric Work
                    </h1>

                    <p>
                      <i className='fa fa-map-marker text-purple-600 mr-3'></i>
                      <span className='text-sm font-normal'>
                        Dream Avenue, Lahore
                      </span>
                    </p>
                    <p>
                      <i className='fa fa-calendar text-purple-600 mr-3'></i>
                      <span className='text-sm font-normal'>14 June 2021</span>
                    </p>
                  </div>
                  <div className='right bg-purple-600 text-white py-2 px-5 rounded-lg text-lg font-bold'>
                    <h1>RS 1000</h1>
                  </div>
                </div>

                <div className='bottom'>
                  <hr className='my-3 mb-6' />
                  <h1 className='bg-purple-600 text-white rounded-lg text-md font-semibold inline py-2 px-3'>
                    Open
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
