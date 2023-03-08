import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../src/style.css';

export default () => {
  const initialValues = { from: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const handleSubmit = (e) => {

  // };
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }, []);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!search.from) {
      errors.from = 'Please Enter All Field !';
    }
    return errors;
  };

  const [isValidated, setIsValidated] = useState(false);
  const [search, setSearch] = useState({
    from: '',
    to: '',
    date: '',
    guest: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [userErr, setUserErr] = useState(false);

  const [showError, setError] = useState(false);
  const updateValue = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const searchForHotel = () => {
    setIsValidated(true);
    if (!search.from) {
      setError(true);
      // alert('Please Enter City Name');
      return;
    } else if (!search.to) {
      setError(true);
      // alert('Please Enter In Date ');
      return;
    } else if (!search.date) {
      setError(true);
      // alert('Please Enter Out Date ');
      return;
    } else if (!search.guest) {
      setError(true);
      // alert('Enter Number of Guest ');
      return;
    }
    dispatch({ search, type: 'SEARCH_HOTEL' });
    navigate('api');
  };

  const redirect = () => {
    // setIsValidated(true);
    navigate('login');
  };
  const register = () => {
    // setIsValidated(true);
    navigate('register');
  };

  return (
    <div class="search-container" id="search_input">
      <div id="navlist">
        <a href="#">
          <span id="com1"> Booking</span>
          <span id="com">.com</span>
        </a>
        <button id="btn" onClick={register}>
          Register
        </button>
        <button id="btn" onClick={redirect}>
          Login
        </button>
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

      <div id="photo">
        <img
          src="https://www.linkpicture.com/q/186278537.jpeg"
          alt="Italian Trulli"
        />
      </div>
      <p id="text">Ski the Swiss Alps this winter</p>
      <p id="text2">
        Discover Switzerland's best ski resorts and plan the perfect vacation
      </p>
      <button id="explore">explore the slope</button>
      <form onSubmit={handleSubmit}>
        <div id="searchForm" class="block">
          <input
            required
            type="text"
            id="fname"
            class="input-res"
            name="from"
            placeholder="Enter Country Name"
            value={formValues.from}
            // onChange={updateValue}
            onChange={function (event) {
              handleChange(event);
              updateValue(event);
            }}
          />

          <input
            required
            type="date"
            class="input-res"
            id="fname"
            name="to"
            placeholder="Sign In"
            onChange={updateValue}
          />
          <input
            required
            type="date"
            class="input-res"
            id="fname"
            name="date"
            placeholder="Sign out"
            onChange={updateValue}
          />
          <input
            required
            type="text"
            id="fname"
            class="input-res"
            name="guest"
            placeholder="Enter Guest"
            onChange={updateValue}
          />
          <button
            id="btn2"
            class="btn-res"
            onClick={(event) => {
              handleSubmit(event);
              searchForHotel(event);
            }}
            type="button"
          >
            <span id="srch">Search</span>
          </button>
        </div>
      </form>
      <br></br>

      <span id="fromError">{formErrors.from}</span>
      <span id="guestError"></span>
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
};
