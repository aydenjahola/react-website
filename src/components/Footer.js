import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Follow us on Social Media</h2><br />
                        <Link to='/'><i class="fab fa-instagram"></i></Link>
                        <Link to='/'><i class="fab fa-facebook"></i></Link>
                        <Link to='/'><i class="fab fa-youtube-square"></i></Link>
                        <Link to='/'><i class="fab fa-twitter-square"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
