import React from 'react'
import '../../../App.css'

export default function Emergency() {
  return (
    <>
      <div class='header'>
        <img
          src='images/emergency.jpg'
          alt='Emergency Exit'
          className='header-image'
        />
        <div class='header-text'>
          <h1>Emergency</h1>
        </div>
      </div>
      <p class='content-title'>Emergency Procedure</p>
      <hr class='full'></hr>
      <br /> <br />
      <p class='content-text'>
        For all the planning and preparation, there still exists the
        possibility of emergencies occurring.
        <br /> <br />
        All Accident and Incidents must be reported via the online
        report form on the DCU Health and Safety Website or via the
        DCU Accidents Report Form and sent to the DCU Health & Safety
        Office.
        <br /> <br />
        In the event of an emergency, please follow carefully the
        guidelines as detailed below:
        <ul>
          <li>Stop and think. Assess the situation. Stay calm.</li>
          <li>Ensure that the group is safe and accounted for.</li>
          <li>
            Are there any hazards present that may affect the group?
          </li>
          <li>Attend any casualties if it is safe to do so.</li>
          <li>Give first aid within the group's capabilities.</li>
          <li>Get expert help if required.</li>
          <li>
            Get/give any third party/witness/insurance details if
            necessary.
          </li>
          <li>
            Gather the information required by the Emergency Services:
            <ul>
              <li>Name(s) of group members</li>
              <li>Number of people injured</li>
              <li>Locations of group members</li>
              <li>Medical condition of the group.</li>
              <li>First Aid given</li>
              <li>Age(s) of group members</li>
              <li>Time of accident</li>
              <li>Equipment available to group</li>
            </ul>
          </li>
          <li>Cooperate fully with the Emergency Services.</li>
          <li>
            Someone from the group accompany the casualties to
            hospital.
          </li>
        </ul>
        <br /> <br />
        In the event of a serious accident/incident contact DCU
        Security on 700-5999 (available 24 hours). Refer all media
        contact to Siobhán Byrne, Head of Clubs and Socs, and give no
        comment.
        <br /> <br />
      </p>
    </>
  )
}
