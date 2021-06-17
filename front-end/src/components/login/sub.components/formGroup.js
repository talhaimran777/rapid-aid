import React from 'react';
import { useSelector } from 'react-redux';

const FormGroup = (props) => {
  // EXTRACTING ERRORS
  const { data } = useSelector((state) => state.errors);
  const onChangeHandler = (state, setState, e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { label, name, type, state, setState } = props;
  return (
    <div>
      {data && data[name] && data.validationFormType === 'login' ? (
        <div>
          <span className='text-red-500 font-bold text-sm lowercase'>
            {data[name]}
          </span>{' '}
          <br />
        </div>
      ) : (
        ''
      )}
      <label className='text-gray-600 font-bold' htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        className={`border-b-2 py-1 px-3 w-full mb-6 focus:border-purple-700 text-gray-500 outline-none ${
          data && data[name] && data.validationFormType === 'login'
            ? 'border-red-500'
            : 'border-purple-200'
        }`}
        type={type}
        name={name}
        required={true}
        onChange={onChangeHandler.bind(this, state, setState)}
      />
      <br />
    </div>
  );
};

export default FormGroup;
