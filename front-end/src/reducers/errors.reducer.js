const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'VALIDATIION_ERRORS':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default errorsReducer;
