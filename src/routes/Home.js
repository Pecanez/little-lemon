import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SpecialitiesList from '../components/SpecialitiesList';
import Footer from '../components/Footer';
import "../components/styles/Home.css";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-section-background">
        <div className="home-section-container">
          <div className="home-banner">
            <h1>Little Lemon</h1>
            <p>A Mediterranean restaurant that offers a diverse culinary experience with dishes inspired by the Mediterranean region, featuring flavors and ingredients from countries such as Greece, Italy, Spain, and Turkey.</p>
            <NavLink to="/reservations"><button className="btn">Reserve a Table</button></NavLink>
          </div>
        </div>
      </div>
      <SpecialitiesList />
      <Footer />
    </>
  )
}

export default Home
