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
                        label='Amy Collins'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Vice-Chairperson'
                        label=''
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Secretary'
                        label='Om Dighe'
                        path='/contact'
                    />
                </ul>
                <ul className='cards__items'>
                    <CommitteeCardItem
                        src='images/default.png'
                        text='SysAdmin'
                        label='Malachy Byrne'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='SysAdmin'
                        label='James Hackett'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='SysAdmin'
                        label='Conor Joyce'
                        path='/contact'
                    />
                </ul>
                <ul className='committee__cards__items'>
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Events Officer'
                        label='Jed Hazamyeh'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Events Officer'
                        label='Chee Hin Choa'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='First Year Rep.'
                        label=''
                        path='/contact'
                    />
                </ul>
                <ul className='cards__items'>
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Treasurer'
                        label='Gordon Chi'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='GDO'
                        label='Anushree Umak'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Webmaster'
                        label=''
                        path='/contact'
                    />
                </ul>
                <ul className='committee__cards__items'>
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Helpdesk'
                        label='Aidan Smith'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/default.png'
                        text='Helpdesk'
                        label='Malavika Shanker'
                        path='/contact'
                    />
              	    <CommitteeCardItem
                        src='images/default.png'
                        text='Ordinary Member'
                        label='Andreea Rete'
                        path='/contact'
                    />
                </ul>
            </div>
        </div>
    );
}

export default CommitteeCards;
