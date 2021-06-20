import { useEffect } from 'react';
import TopMenu from '../sub.components/navbar';

import axios from 'axios';

const Tasks = () => {
  useEffect(() => {
    axios
      .get('/api/tasks')
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <TopMenu />
      <h1 className='max-w-screen-lg mx-auto px-3 lg:px-0'>
        This is tasks component
      </h1>
    </div>
  );
};

export default Tasks;
