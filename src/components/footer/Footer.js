import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Follow us on Social Media</h2><br />
                        <a href="https://www.instagram.com/redbrickdcu/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/dcuredbrick/"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.youtube.com/channel/UC3DvQVTPHTM6Pgm-bY_N75A"><i class="fab fa-youtube-square"></i></a>
                        <a href="https://twitter.com/redbrickdcu"><i class="fab fa-twitter-square"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
