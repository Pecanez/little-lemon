import React, { useState, useEffect } from 'react';
import "../components/styles/Specialities.css";
import Meal1 from "../components/assets/carbonara.jpg";
import Meal2 from "../components/assets/moussaka.jpg";
import Meal3 from "../components/assets/paella.jpg";

const Specialities = () => {
  const [specialitiesMenus, setSpecialitiesMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =  await fetch('/specialities.json');
        const data = await response.json();
        setSpecialitiesMenus(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const specialitiesMenusItems = specialitiesMenus.map((menu, index) => {
    const image = index === 0 ? Meal1 : index === 1 ? Meal2 : Meal3;
    const { title, description } = menu;

    return (
      <div key={index}>
        <div className="specialities-card-container">
          <div className="image-container">
            <img src={image} alt="Special Meal" />
          </div>
          <div className="specialities-card-text">
            <div className="specialities-card-title">
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="specialities-card">{specialitiesMenusItems}</div>
    </div>
  );
};

export default Specialities;
