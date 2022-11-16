import React from 'react';
import './CommitteeCards.css';
import CommitteeCardItem from './CommitteeCardItem.js';

function CommitteeCards() {
    return (
        <div className='committee__cards__container'>
            <div className='committee__cards__wrapper'>
                <ul className='committee__cards__items'>
                    <CommitteeCardItem
                        src='images/committee/amy.jpg'
                        text='Chairperson'
                        label='Amy Collins'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/committee/andreea.png'
                        text='Vice-Chairperson'
                        label='Andreea Rete'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/committee/om.jpg'
                        text='Secretary'
                        label='Om Dighe'
                        path='/contact'
                    />
                </ul>
                <ul className='cards__items'>
                    <CommitteeCardItem
                        src='images/committee/malachy.jpg'
                        text='SysAdmin'
                        label='Malachy Byrne'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/committee/james.jpg'
                        text='SysAdmin'
                        label='James Hackett'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/committee/conor.jpg'
                        text='SysAdmin'
                        label='Conor Joyce'
                        path='/contact'
                    />
                </ul>
                <ul className='cards__items'>
                    <CommitteeCardItem
                        src='images/committee/gordon.jpg'
                        text='Treasurer'
                        label='Gordon Chi'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/committee/jed.jpg'
                        text='Webmaster'
                        label='Jed Hazaymeh'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/committee/anushree.jpg'
                        text='GDO'
                        label='Anushree Umak'
                        path='/contact'
                    />
                </ul>
                <ul className='committee__cards__items'>
                    <CommitteeCardItem
                        src='images/committee/ishita.jpg'
                        text='PRO'
                        label='Ishita Gupta'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/committee/abhijit.jpg'
                        text='Events Officer'
                        label='Abhijit Mahal'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/committee/cheehin.jpg'
                        text='Events Officer'
                        label='Chee Hin Choa'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/committee/dominic.jpg'
                        text='First Year Rep.'
                        label='Dominic Michael Connor'
                        path='/contact'
                    />
                </ul>
                <ul className='committee__cards__items'>
                    <CommitteeCardItem
                        src='images/committee/aidan.png'
                        text='Helpdesk'
                        label='Aidan Smith'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/committee/malavika.jpeg'
                        text='Helpdesk'
                        label='Malavika Shanker'
                        path='/contact'
                    />
              	    <CommitteeCardItem
                        src='images/committee/leo.jpg'
                        text='Ordinary Member'
                        label='Leo Collins'
                        path='/contact'
                    />
                    <CommitteeCardItem
                        src='images/committee/alex.jpg'
                        text='Ordinary Member'
                        label='Alexandru Dorofte'
                        path='/contact'
                    />
                </ul>
            </div>
        </div>
    );
}

export default CommitteeCards;
