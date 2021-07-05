import onChangeHandler from '../../../utils/onChangeHandlerFunc';

const AreaGroup = (props) => {
  const { name, label, state, setState } = props;
  return (
    <div>
      <label className='text-gray-600 font-bold mb-5' htmlFor={name}>
        {label}
      </label>

      <textarea
        className='mb-6 mt-3 border-2 border-gray-200 focus-within:outline-none focus:border-purple-600 rounded-lg w-full px-3 text-gray-600'
        id={name}
        name={name}
        rows='4'
        onChange={onChangeHandler.bind(this, state, setState)}
      />
      <br />
    </div>
  );
};

export default AreaGroup;
