import React from 'react';
import "./styles/Reservations.css";
import Form from './Form';

function ReservationsPage() {

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="form">
                <h1>Reserve a Table</h1>
                <p>Please fill the required details to book your reservation.</p>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default ReservationsPage