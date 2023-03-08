import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchBar from './SearchBar';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter, useNavigate } from 'react-router-dom';
import '../popup.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import '../Api.css';
import '../footer.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [price, setPrice] = useState(500);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(search.from);
  // Triggered when the value gets updated while scrolling the slider:

  const selectHotel = (bus) => {
    dispatch({ id: bus.id, type: 'HOTEL_SELECTION' });
    navigate('/customerInfo');
  };

  const [searchValue, setSearchValue] = useState('');
  const fetchUserData = () => {
    fetch('https://mocki.io/v1/5af23d6a-45db-46d6-8f54-e28f94f01279')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const filterNames = ({ city }) => {
    return city.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  };

  const handleClickConfirm = (bus) => {
    dispatch({ id: bus.id, type: 'HOTEL_SELECTION' });
    confirmAlert({
      title: 'Confirm to Booking',
      message: 'Are you sure to Booking',
      buttons: [
        {
          label: 'Yes',
          onClick: () => navigate('/payment'),
        },
        {
          label: 'No',
          onClick: () => navigate('/api'),
        },
      ],
    });
  };

  return (
    <div className="App" id="search_api">
      <div id="navlist">
        <a href="#">
          Booking<span id="com">.com</span>
        </a>
        <button id="btn">Register</button>
        <button id="btn">Login</button>
        <button id="text_list">List your Property</button>
      </div>

      <div id="navlist2">
        <a href="#">Stays</a>
        <a href="#">Flight</a>
        <a href="#">Flight+Hotel</a>
        <a href="#">Car rentals</a>
        <a href="#">Attractions</a>
        <a href="#">Airport taxis</a>
      </div>

      <SearchBar onSearch={setSearchValue} value={searchValue} />
      <br></br>
      <span id="loaction">
        <p>
          {' '}
          Hotel Location<b id="h_name"> {search.from}</b>, In-Time{' '}
          <b id="h_name"> {search.to}</b> and Out-Time{' '}
          <b id="h_name"> {search.date}</b>
        </p>
      </span>
      {users.filter(filterNames).map((user) => {
        return (
          <li key={user.id}>
            <div class="table_responsive">
              <table>
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>Image</th>
                    <th>City Name</th>
                    <th>Hotel Name</th>
                    <th>Rating</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>01</td>
                    <td>
                      <img src={user.photo} alt=""></img>
                    </td>
                    <td>{user.city}</td>
                    <td>{user.hotel_name}</td>
                    <td>{user.rating}</td>
                    <td>{user.price_per_night}</td>
                    <td>
                      <span class="action_btn">
                        <button
                          id=""
                          // onClick={() => selectHotel(user)}
                          onClick={function (event) {
                            handleClickConfirm(event);
                            // selectHotel(user);
                          }}
                        >
                          Book Now
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        );
      })}

      <footer>
        <div class="footer-content">
          <h3>Newton Developer</h3>
          <p>
            Booking.com clone web Application is a Booking website where you
            will book Hotels in Any Where.
          </p>
          <ul class="socials">
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>
            copyright &copy; <a href="#">Anant Prakash</a>{' '}
          </p>
          <div class="footer-menu">
            <ul class="f-menu">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
