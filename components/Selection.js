import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default Selection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state.details);
  const hotel = useSelector((state) => state.hotel);
  const [selectedRoom, setselectedRoom] = useState([]);
  const toggleSeat = (e) => {
    const RoomNo = e.target.id;
    if (selectedRoom.includes(RoomNo)) {
      const index = selectedRoom.indexOf(RoomNo);
      selectedRoom.splice(index, 1);
    } else {
      selectedRoom.push(e.target.id);
    }
    console.log(selectedRoom);
  };

  const proceedToCustomerDetails = (e) => {
    dispatch({ type: 'ROOM_SELECTION', seats: selectedRoom });
    navigate('/CustomerInfo');
  };
  const selectedHotel =
    hotel.find((hotel) => hotel.id === details.selectedHotelId) || {};
  console.log(selectedHotel);
  return (
    <div>
      <div id="navlist">
        <a href="#">
          Booking<span id="com">.com</span>
        </a>
        <button id="btn">Register</button>
        <button id="btn">Login</button>
        <button id="text_list">List your Property</button>
      </div>

      <div id="navlist2">
        <a href="#">stays</a>
        <a href="#">flight</a>
        <a href="#">Flight+Hotel</a>
        <a href="#">Car rentals</a>
        <a href="#">Attractions</a>
        <a href="#">Airport taxis</a>
      </div>
      <h4 id=""> The selected Hotel name is {selectedHotel.name}</h4>
      <div class="seat-container">
        <h3> select Room Number </h3>
        {selectedHotel.seats.map((seat, index) => {
          return (
            <div>
              <input
                class="seat"
                disabled={seat.isBooked}
                onClick={toggleSeat}
                type="checkbox"
                id={seat.no}
              />
              <label for={seat.no}>{seat.no}</label>
            </div>
          );
        })}
      </div>
      <button id="btn" class="proceed" onClick={proceedToCustomerDetails}>
        Proceed/Payment
      </button>
      <div id="footer">
        <input id="f_serch" type="text" placeholder=" Your email" />
        <button id="btn_f">Subscribe</button>
        <br></br>
        <p id="f_p"> Send me a link to get the FREE Booking.com app!</p>
      </div>
    </div>
  );
};
