import React from 'react';
import './CommitteeCards.css';
import CommitteeCardItem from './CommitteeCardItem.js';

function CommitteeCards() {
    return (
        <div className='committee__cards__container'>
            <div className='committee__cards__wrapper'>
                <ul className='committee__cards__items'>
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Chairperson'
                        label='Cian Kehoe'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/cliodhna.png'
                        text='Vice-Chairperson'
                        label='Cliodhna Harrison'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/denis.png'
                        text='Secretary'
                        label='Denis Flore'
                        path='/contact'
                    />
                </ul>
                <ul className='cards__items'>
                    <CommitteeCardItem
                        src='images/malachy.png'
                        text='SysAdmin'
                        label='Malachy Byrne'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/james.png'
                        text='SysAdmin'
                        label='James Hackett'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='SysAdmin'
                        label='None'
                        path='/contact'
                    />
                </ul>

                <ul className='committee__cards__items'>
                    <CommitteeCardItem
                        src='images/andreea.png'
                        text='Events Officer'
                        label='Andreea Rete'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Events Officer'
                        label='Amy Collins'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='First Year Rep.'
                        label='Lia'
                        path='/contact'
                    />
                </ul>
                <ul className='cards__items'>
                    <CommitteeCardItem
                        src='images/magic.png'
                        text='Treasurer'
                        label='Maciej'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='PRO'
                        label='Ethan'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Webmaster'
                        label='Rahul'
                        path='/contact'
                    />
                </ul>
                <ul className='committee__cards__items'>
                    <CommitteeCardItem
                        src='images/aidan.png'
                        text='Helpdesk'
                        label='Aidan Smith'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Helpdesk'
                        label='Ryan Mc Quillan'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Ordinary Member'
                        label='Leo Collins'
                        path='/contact'
                    />
                </ul>
            </div>
        </div>
    );
}

export default CommitteeCards;
