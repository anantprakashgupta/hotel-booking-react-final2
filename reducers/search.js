const initialState = {};
export default (state = initialState, action) => {
  if (action.type === 'SEARCH_HOTEL') {
    return { ...state, ...action.search };
  }
  return state;
};
