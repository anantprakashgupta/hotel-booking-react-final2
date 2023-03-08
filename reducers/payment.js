const initialState = {};
export default (state = initialState, action) => {
  if (action.type === 'PAY_HOTEL') {
    return { ...state, ...action.payment };
  }
  return state;
};
