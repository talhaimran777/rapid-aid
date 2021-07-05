const onChangeHandler = (state, setState, e) => {
  setState({ ...state, [e.target.name]: e.target.value });
};

export default onChangeHandler;
