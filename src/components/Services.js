import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Services() {
  return (
    <div className='cards'>
      <p class='content-title'>SERVICES</p>
      <hr class='full'></hr>
      <br />
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mail.jpg'
              text='We offer mail services for all members of the society.'
              label='Mail'
              path='/services'
            />
            <CardItem
              src='images/hosting.jpg'
              text='Host your own website on a subdomain of Redbrick, or bring your own!'
              label='Hosting'
              path='/services'
            />
            <CardItem
              src='images/learning.jpg'
              text='Our servers have all the compilers and interpreters you need to learn new languages.'
              label='Learning'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Services
