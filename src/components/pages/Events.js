import React from 'react';
import './Events.css';


/* Events tab with static tables for events, was meant to be manually edited by events officers but they never did */
export default function Events() {

    return (
        <>
            <div class="header">
                <img src="images/header.png" alt="About Us" className="header-image" />
                <div class="header-text">
                    <h1 style={{ color: "red" }}>Events</h1>
                </div>
            </div>
            <div id="about-redbrick">
                <p class="content-title">Upcoming Events</p>
                <hr class="full"></hr><br /><br />
                <p class="content-text">Redbrick hosts many events throughout the year, from weekly Hackerclub events to country-wide events like SISTEM.

                    Here is a list of our planned events:</p>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                    </tr>
                    <tr>
                        <td>Our Inner Imposters</td>
                        <td>25/01/2022</td>
                        <td>16:00</td>
                        <td>Somewhere</td>
                    </tr>
                    <tr>
                        <td>Our Inner Imposters</td>
                        <td>25/01/2022</td>
                        <td>16:00</td>
                        <td>Somewhere</td>
                    </tr>
                    <tr>
                        <td>Our Inner Imposters</td>
                        <td>25/01/2022</td>
                        <td>16:00</td>
                        <td>Somewhere</td>
                    </tr>
                    <tr>
                        <td>Our Inner Imposters</td>
                        <td>25/01/2022</td>
                        <td>16:00</td>
                        <td>Somewhere</td>
                    </tr>
                    <tr>
                        <td>Our Inner Imposters</td>
                        <td>25/01/2022</td>
                        <td>16:00</td>
                        <td>Somewhere</td>
                    </tr>
                    <tr>
                        <td>Our Inner Imposters</td>
                        <td>25/01/2022</td>
                        <td>16:00</td>
                        <td>Somewhere</td>
                    </tr>
                </table>
            </div>

            <div id="about-redbrick">
                <p class="content-title">Past Events</p>
                <hr class="full"></hr><br /><br />
                <p class="content-text">Here is a catalogue of our most recent events, if you would like the slides to any particular talk,
                    please don't hesitate to email <a href="mailto:committee@redbrick.dcu.ie" className="redirect-link">committee@redbrick.dcu.ie</a>
                </p>

                <table>
                    <tr>
                        <th>Title</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Tag</th>
                        <th>Link</th>
                    </tr>
                    <tr>
                        <td>Event 1</td>
                        <td>15:00</td>
                        <td>15/01/2022</td>
                        <td>Redbrick</td>
                        <td>Committee</td>
                        <td><a href="google.com" className="redirect-link">Here</a></td>
                    </tr>
                    <tr>
                        <td>Event 1</td>
                        <td>15:00</td>
                        <td>15/01/2022</td>
                        <td>Redbrick</td>
                        <td>Committee</td>
                        <td><a href="google.com" className="redirect-link">Here</a></td>
                    </tr>
                    <tr>
                        <td>Event 1</td>
                        <td>15:00</td>
                        <td>15/01/2022</td>
                        <td>Redbrick</td>
                        <td>Committee</td>
                        <td><a href="google.com" className="redirect-link">Here</a></td>
                    </tr>
                    <tr>
                        <td>Event 1</td>
                        <td>15:00</td>
                        <td>15/01/2022</td>
                        <td>Redbrick</td>
                        <td>Committee</td>
                        <td><a href="google.com" className="redirect-link">Here</a></td>
                    </tr>
                    <tr>
                        <td>Event 1</td>
                        <td>15:00</td>
                        <td>15/01/2022</td>
                        <td>Redbrick</td>
                        <td>Committee</td>
                        <td><a href="google.com" className="redirect-link">Here</a></td>
                    </tr>
                    <tr>
                        <td>Event 1</td>
                        <td>15:00</td>
                        <td>15/01/2022</td>
                        <td>Redbrick</td>
                        <td>Committee</td>
                        <td><a href="google.com" className="redirect-link">Here</a></td>
                    </tr> <br /><br />
                </table>
            </div>



        </ >

    );

}
