import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <p class="content-title">SERVICES</p>
            <hr class="full"></hr><br />
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/mail.jpg'
                            text='We offer webmail services for all members of our society.'
                            label='Mail'
                            path='/services'
                        />
                        <CardItem
                            src='images/hosting.jpg'
                            text='Host your own website on domains provided by us.'
                            label='Hosting'
                            path='/services'
                        />
                        <CardItem
                            src='images/learning.jpg'
                            text='Learn a variety of programming languages.'
                            label='Learning'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
