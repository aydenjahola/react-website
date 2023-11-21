import React from 'react'
import './CommitteeCards.css'
import CommitteeCardItem from './CommitteeCardItem.js'

function CommitteeCards() {
  return (
    <>
      <p class='content-title'>COMMITTEE</p>
      <hr class='full'></hr>
      <br />
      <br />
      <div className='committee__cards__container'>
        <div className='committee__cards__wrapper'>
          <ul className='committee__cards__items'>
            <CommitteeCardItem
              src='images/committee/james.jpg'
              text='Chairperson'
              label='James Hackett'
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/shane.jpg'
              text='Vice-Chairperson'
              label='Shane Whelan'
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/jake.jpg'
              text='Secretary'
              label='Jake Farrell'
              path='/contact'
            />
          </ul>
          <ul className='cards__items'>
            <CommitteeCardItem
              src='images/committee/dominic.png'
              text='SysAdmin'
              label='Dominic Michael Connor'
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/cathal.jpg'
              text='SysAdmin'
              label="Cathal O'Grady"
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/amy.jpg'
              text='SysAdmin'
              label='Amy Collins'
              path='/contact'
            />
          </ul>
          <ul className='cards__items'>
            <CommitteeCardItem
              src='images/committee/malavika.jpg'
              text='Treasurer'
              label='Malavika Shanker'
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/jed.png'
              text='Webmaster'
              label='Jed Hazaymeh'
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/ishita.jpg'
              text='GDO'
              label='Ishita Gupta'
              path='/contact'
            />
          </ul>
          <ul className='committee__cards__items'>
            <CommitteeCardItem
              src='images/committee/philip.jpg'
              text='PRO'
              label='Philip Leonard'
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/robert.jpg'
              text='Events Officer'
              label='Robert Healy'
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/stefania.jpg'
              text='Events Officer'
              label='Stefania'
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/dennis.jpg'
              text='First Year Rep.'
              label='Dennis Custiuc'
              path='/contact'
            />
          </ul>
          <ul className='committee__cards__items'>
            <CommitteeCardItem
              src='images/committee/ayden.png'
              text='Helpdesk'
              label='Ayden Jahola'
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/francis.jpg'
              text='Helpdesk'
              label='Francis Baxter'
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/callum.jpg'
              text='Ordinary Member'
              label='Callum Browne'
              path='/contact'
            />
            <CommitteeCardItem
              src='images/committee/daniel.jpg'
              text='Ordinary Member'
              label='Daniel McEntee'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default CommitteeCards
