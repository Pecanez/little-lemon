import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Tick from "../components/assets/tick.png";
import { useLocation } from 'react-router-dom';
import "../components/styles/Reservations.css";

function ReservationsSuccess() {
  const location = useLocation();
  const formData = location.state.formData;
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return (

    <div>
      <Navbar />
      <div className="res-content-wrapper">
        <div className="res-content-container">
          <div className='success-message'>
            <div className='top-line'>
              <img src={Tick} alt="Special Meal" />
              <h2>
                You're in!
              </h2>
            </div>
            <p>Your confirmation has been confirmed and an email has been sent to <b>{formData.email}</b>!</p>
            <ul>
              <li><b>Date: </b>{new Date(formData.date).toLocaleDateString("en-US", options)}</li>
              <li><b>Name: </b>{formData.name}</li>
              <li><b>Guests: </b>{formData.guests}</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ReservationsSuccess