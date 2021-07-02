import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// COMPONENTS
import TopMenu from '../sub.components/navbar';

// ACTIONS
import {
  loadTasks,
  loadTasksSuccess,
  zeroTasks,
} from '../../actions/tasksActions';

// SPINNER
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

const Tasks = () => {
  const { loading, data } = useSelector((state) => state.tasks);

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
  }, [dispatch]);

  return (
    <div>
      <TopMenu />

      <div className='lg:max-w-screen-lg mx-auto'>
        <div className='profile py-5 my-10 lg:px-3'>
          {loading ? (
            <div className='text-center ml-3'>
              <CircularProgress />
            </div>
          ) : (
            <div className='sm:max-w-lg sm:mx-auto'>
              <h1 className='text-lg text-gray-600 font-black mb-5'>
                Filter Functionality Comming Soon.....
              </h1>

              {data && data.length
                ? data.map((task) => (
                    <Link key={task.id} to={`tasks/${task.id}`}>
                      <div className='px-3 pt-3 pb-4 bg-white  sm:rounded-md my-5 hover:shadow-lg cursor-pointer'>
                        <div className='top flex justify-between items-center'>
                          <div className='left'>
                            <img
                              className='rounded-full border-2 border-purple-600'
                              height='50px'
                              width='50px'
                              src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
                              alt=''
                              srcSet=''
                            />
                          </div>
                          <div className='mid'>
                            <h1 className='truncate w-40 sm:w-56 text-md font-bold text-gray-600 mb-3'>
                              {task.title}
                            </h1>

                            <p className='truncate w-40 sm:w-56'>
                              <LocationOnIcon
                                className='text-purple-600 mr-2'
                                style={{ fontSize: '15px' }}
                              />
                              <span className=' text-sm font-semibold text-gray-400'>
                                {task.location}
                              </span>
                            </p>
                            <p>
                              <CalendarTodayIcon
                                className='text-purple-600 mr-2'
                                style={{ fontSize: '15px' }}
                              />
                              <span className='text-sm font-semibold text-gray-400'>
                                {task.dueDate}
                              </span>
                            </p>
                          </div>
                          <div className='right bg-purple-600 text-white py-1 px-3 rounded-lg text-sm font-bold'>
                            <h1>RS {task.budget}</h1>
                          </div>
                        </div>

                        <div className='bottom'>
                          <hr className='my-3 mb-6' />
                          <h1 className='bg-purple-500 text-white rounded-lg text-xs font-semibold inline py-1 px-3 uppercase'>
                            Open
                          </h1>
                        </div>
                      </div>
                    </Link>
                  ))
                : ''}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
