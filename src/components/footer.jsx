import React from "react";

export default function Footer(){
    return (
        <footer className="footer-container" id="footer">
            <div className="footer-content">
                <div className='footer-section contact-info'>
                    <h3>Contact Us</h3>
                    <p>Jang's International Restaurant</p>
                    <p>123 Seoul Street, City Name</p>
                    <p>Email: info@jangsrestaurant.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>

                <div className="footer-section hours">
                    <h3>Hours of Operation</h3>
                    <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p>Saturday: 12:00 PM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 9:00 PM</p>
                </div>

                <div className="footer-section social-media">
                    <h3>Follow Us</h3>
                    <a href="https://www.facebook.com/jangsrestaurant" target="_blank">Facebook</a><br />
                    <a href="https://www.instagram.com/jangsrestaurant" target="_blank">Instagram</a><br />
                    <a href="https://www.twitter.com/jangsrestaurant" target="_blank">Twitter</a><br />
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Jang's International Restaurant | All Rights Reserved</p>
            </div>
        </footer>
    )
}