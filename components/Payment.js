import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import { withRouter, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../pay.css';

export default () => {
  const initialValues = { name: '' };
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
    if (!search.name) {
      errors.from = 'Please Enter All Field !';
    }
    return errors;
  };

  const [isValidated, setIsValidated] = useState(false);
  const [search, setSearch] = useState({
    name: '',
    card_number: '',
    exp_date: '',
    cvv: '',
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
    if (!search.name) {
      setError(true);
      alert('Please Enter Name');
      return;
    } else if (!search.card_number) {
      setError(true);
      alert('Please Enter card number ');
      return;
    } else if (!search.exp_date) {
      setError(true);
      alert('Please Enter date ');
      return;
    } else if (!search.cvv) {
      setError(true);
      alert('Enter cvv ');
      return;
    }
    dispatch({ search, type: 'SEARCH_HOTEL' });
    navigate('/CustomerInfo');
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
    <div class="mainscreen">
      <div class="card">
        <div class="leftside">
          <img
            src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png"
            class="product"
            alt="Shoes"
          />
        </div>
        <div class="rightside">
          <form onSubmit={handleSubmit}>
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p>Cardholder Name</p>
            <input
              type="text"
              class="inputbox"
              name="name"
              id="fname"
              required
              onChange={updateValue}
              onChange={function (event) {
                handleChange(event);
                updateValue(event);
              }}
            />
            <p>Card Number</p>
            <input
              type="text"
              class="inputbox"
              name="card_number"
              id="fname"
              onChange={updateValue}
              required
            />

            <p>Card Type</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
            <div class="expcvv">
              <p class="expcvv_text">Expiry</p>
              <input
                type="date"
                class="inputbox"
                name="exp_date"
                // id="exp_date"
                id="fname"
                onChange={updateValue}
                required
              />

              <p class="expcvv_text2">CVV</p>
              <input
                type="password"
                class="inputbox"
                name="cvv"
                onChange={updateValue}
                id="fname"
                required
              />
            </div>
            <p></p>
            <button
              type="submit"
              class="button"
              onClick={(event) => {
                handleSubmit(event);
                searchForHotel(event);
              }}
            >
              CheckOut
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
