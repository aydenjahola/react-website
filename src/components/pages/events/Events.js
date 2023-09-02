import React from 'react';
import './Events.css';

export default function Events() {
  return (
    <>
      <div class="header">
        <img src="images/image2.jpg" alt="Flying Kites" className="header-image" />
        <div class="header-text">
          <h1>Events</h1>
        </div>
      </div>
      <div id="about-redbrick">
        <p class="content-title">Upcoming Events</p>
        <hr class="full"></hr>
        <br />
        <br />
        <p class="content-text">
          Redbrick hosts many events throughout the year, from weekly Hackerclub events to country-wide events like SISTEM. 
          Here is a list of our planned events:
        </p>
        <table>
            <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
            </tr>
            <tr>
                <td>Hacker Club - Intro to Unix Shell</td>
                <td>18/10/2022</td>
                <td>12:00</td>
                <td>LG26</td>
            </tr>
            <tr>
                <td>Racing AI Workshop</td>
                <td>19/10/2022</td>
                <td>16:00</td>
                <td>L128</td>
            </tr>
            <tr>
                <td>Lightning Talks</td>
                <td>26/10/2022</td>
                <td>TBD</td>
                <td>TBD</td>
            </tr>
            <tr>
                <td>Halloween: Scary Code</td>
                <td>02/11/2022</td>
                <td>TBD</td>
                <td>TBD</td>
            </tr>
            <tr>
                <td>Arista Coding Competition</td>
                <td>09/11/2022</td>
                <td>TBD</td>
                <td>TBD</td>
            </tr>
        </table>
      </div>

      <div id="about-redbrick">
        <p class="content-title">Past Events</p>
        <hr class="full"></hr>
        <br />
        <br />
        <p class="content-text">
          Here is a catalogue of our most recent events, if you would like the slides to any particular talk, 
          please don't hesitate to email <a href="mailto:committee@redbrick.dcu.ie" className="redirect-link">committee@redbrick.dcu.ie</a>
        </p>
        <table>
            <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
            </tr>
            <tr>
                <td>Hackers Viewing</td>
                <td>12/10/2022</td>
                <td>16:00</td>
                <td>LG25</td>
            </tr>
            <tr>
                <td>Hacker Club - Dual Boot</td>
                <td>11/10/2022</td>
                <td>12:00</td>
                <td>LG26</td>
            </tr>
            <tr>
                <td>Redbrick EGM</td>
                <td>05/10/2022</td>
                <td>16:00</td>
                <td>LG25</td>
            </tr>
            <tr>
                <td>Hacker Club - Intro to Git</td>
                <td>04/10/2022</td>
                <td>12:00</td>
                <td>LG26</td>
            </tr>
            <tr>
                <td>Hubspot Talk</td>
                <td>28/09/2022</td>
                <td>13:00</td>
                <td>LG25</td>
            </tr>
            <tr>
                <td>Redbrick Cribs</td>
                <td>21/09/2022</td>
                <td>16:00</td>
                <td>LG26</td>
            </tr>
            <tr>
                <td>Games Night</td>
                <td>16/09/2022</td>
                <td>19:00</td>
                <td>Discord</td>
            </tr>
            <br />
            <br />
        </table>
      </div>
    </>
  );
}
