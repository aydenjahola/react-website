import React from 'react';
import './CommitteeCards.css';
import CardItem from '../CardItem';

function CommitteeCards() {
    return (
        <div className='committee__cards__container'>
            <div className='committee__cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src='images/default.png'
                        text='Chairperson'
                        label='Cian Kehoe'
                        path='/contact'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src='images/cliodhna.png'
                        text='Vice-Chairperson'
                        label='Cliodhna Harrison'
                        path='/contact'
                    />
                    <CardItem
                        src='images/denis.png'
                        text='Secretary'
                        label='Denis Flore'
                        path='/contact'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src='images/malachy.png'
                        text='SysAdmin'
                        label='Malachy Byrne'
                        path='/contact'
                    />
                    <CardItem
                        src='images/james.png'
                        text='SysAdmin'
                        label='James Hackett'
                        path='/contact'
                    />
                    <CardItem
                        src='images/default.png'
                        text='SysAdmin'
                        label='None'
                        path='/contact'
                    />
                </ul>

                <ul className='cards__items'>
                    <CardItem
                        src='images/andreea.png'
                        text='Events Officer'
                        label='Andreea Rete'
                        path='/contact'
                    />
                    <CardItem
                        src='images/default.png'
                        text='Events Officer'
                        label='Amy Collins'
                        path='/contact'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src='images/magic.png'
                        text='Treasurer'
                        label='Maciej'
                        path='/contact'
                    />
                    <CardItem
                        src='images/default.png'
                        text='PRO'
                        label='Ethan'
                        path='/contact'
                    />
                    <CardItem
                        src='images/default.png'
                        text='Webmaster'
                        label='Rahul'
                        path='/contact'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src='images/aidan.png'
                        text='Helpdesk'
                        label='Aidan Smith'
                        path='/contact'
                    />
                    <CardItem
                        src='images/default.png'
                        text='Helpdesk'
                        label='Ryan Mc Quillan'
                        path='/contact'
                    />
                </ul>
            </div>
        </div>
    );
}

export default CommitteeCards;
