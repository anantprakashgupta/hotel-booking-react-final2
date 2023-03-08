import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './../components/Search';
import Availability from './../components/Availability';
import CustomerInfo from './../components/CustomerInfo';
import Selection from './../components/Selection';
import Payment from './../components/Payment ';
import Confirmation from './../components/Confirmation ';
import BookingHistory from './../components/BookingHistory ';
import Api from './../components/Api ';
import Login from './../components/Login ';
import Signup from './../components/Signup ';
import Demo from './../components/Demo ';
import Register from './../components/Register ';

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/availability" element={<Availability />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/CustomerInfo" element={<CustomerInfo />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/history" element={<BookingHistory />} />
          <Route path="/**" element={<Availability />} />
          <Route path="/api" element={<Api />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
