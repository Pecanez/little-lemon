import React from 'react'
import "../components/styles/SpecialitiesList.css"
import Specialities from './Specialities'

const SpecialitiesList = () => {
  return (
    <>
      <div className="specialities-section-container">
        <div className="specialities-section-title">
          <h2>Some of our Specialities</h2>
        </div>
        <Specialities />
      </div>
    </>
  )
}

export default SpecialitiesList
