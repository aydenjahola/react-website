import React from 'react';
import '../../../App.css';
import { Button } from '../../Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div class="video-container">
            <video autoPlay muted loop>
                <source src="videos/video-1.mp4" type="video/mp4" />
            </video>
            <div class="caption">
                <h1>Welcome to <br />Redbrick</h1>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        Join Now <i className='fas fa-user-plus' />
                    </Button>
                </div>
            </div>
        </div >
    );
}

export default HeroSection;
