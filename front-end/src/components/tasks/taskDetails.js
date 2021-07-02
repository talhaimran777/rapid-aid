// COMPONENTS
import TopMenu from '../sub.components/navbar';

const TaskDetails = () => {
  return (
    <div>
      <TopMenu />

      <div className='lg:max-w-screen-lg mx-auto'>
        <h1>This is a component to display the details of a certain task!</h1>
      </div>
    </div>
  );
};

export default TaskDetails;
