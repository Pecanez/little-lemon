import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
    return (
        <div>
            <div className="footer-background">
                <div className="footer-container">
                    <div className='footer-first-row'>
                        <div className='footer-description'>
                            <img src={Logo} alt="Little Lemon logo" />
                            <p>A Mediterranean restaurant that offers a diverse culinary experience with dishes inspired by the Mediterranean region, featuring flavors and ingredients from countries such as Greece, Italy, Spain, and Turkey.</p>
                        </div>
                        <div className="footer-content">
                            <div>
                                <h5>OPENING TIMES</h5>
                                <ul>
                                    <li>Mon - Fri: 10:30AM - 12:00AM</li>
                                    <li>Sat: 12:00PM - 1:00AM</li>
                                    <li>Sun: 10:30AM - 12:00AM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© 2023 Little Lemon Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
