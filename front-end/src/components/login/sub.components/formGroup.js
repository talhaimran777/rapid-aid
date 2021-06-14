import React from 'react';

const FormGroup = (props) => {
  const onChangeHandler = (state, setState, e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { label, name, type, state, setState } = props;
  return (
    <div>
      <label className='text-gray-700 font-bold' htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        className='border-b-2 border-purple-400 py-1 px-3 w-full mb-6 focus:border-purple-700 text-gray-500 outline-none'
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
