import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Events() {
  return (
    <div className='cards'>
      <p class='content-title'>EVENTS</p>
      <hr class='full'></hr>
      <br />
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mail.jpg'
              text='We offer mail events for all members of the society.'
              label='Mail'
            />
            <CardItem
              src='images/hosting.jpg'
              text='Host your own website on a subdomain of Redbrick, or bring your own!'
              label='Hosting'
            />
            <CardItem
              src='images/learning.jpg'
              text='Our servers have all the compilers and interpreters you need to learn new languages.'
              label='Learning'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mail.jpg'
              text='We offer mail events for all members of the society.'
              label='Mail'
            />
            <CardItem
              src='images/hosting.jpg'
              text='Host your own website on a subdomain of Redbrick, or bring your own!'
              label='Hosting'
            />
            <CardItem
              src='images/learning.jpg'
              text='Our servers have all the compilers and interpreters you need to learn new languages.'
              label='Learning'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Events
