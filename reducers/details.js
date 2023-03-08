const initialState = {};
export default (state = initialState, action) => {
  if (action.type === 'HOTEL_SELECTION') {
    return { ...state, selectedHotelId: action.id };
  } else if (action.type === 'ROOM_SELECTION') {
    return { ...state, selectedRoom: action.seats };
  }
  return state;
};
