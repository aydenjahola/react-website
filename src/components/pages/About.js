import React from 'react';
import './About.css';
import '../Cards.css';
import CardItem from '../CardItem';
import { Link } from 'react-router-dom';
import CommitteeCards from './CommitteeCards';

export default function About() {

    return (
        <>
            <div class="header">
                <img src="images/header.png" alt="About Us" className="header-image" />
                <div class="header-text">
                    <h1 style={{ color: "red" }}>About Us</h1>
                </div>
            </div>
            <div id="about-redbrick">
                <p class="content-title">About Redbrick</p>
                <hr class="full"></hr><br /><br />
                <p class="content-text">Redbrick is <a href="https://www.dcu.ie/" className="redirect-link">DCU's</a> Computer Networking society. We host events for everything computing related this ranges from;
                    how to setup your own website and storing your photos online to System Administration and Computer Programming Tutorials.
                    We also host a number of <Link
                        to='/services'
                        className='redirect-link'
                    >
                        services
                    </Link> for our membership.</p>
            </div>

            <div id="history">

                <p class="content-title">Brief History</p>
                <hr class="full"></hr><br /><br />
                <p class="content-text">In October of 1995 a group of friends started the ball rolling on the idea of a computer network in DCU,
                    run by students for the students. Starting out with a battered 386 PC (dubbed Nurse), bits of borrowed memory, their own cash,
                    and a lot of luck, they went about organising the DCU Networking Society. Once recognised as a society,
                    they were allowed to setup a temporary home for our server in the Computer Applications faculty. With the approval of John Boland,
                    the then head of Computer Services in DCU, the society received its own subnet, dubbed Redbrick, along with a physical area in which to store Nurse,
                    our one and only machine. Since April 9th 1996, when the machine went officially online, the society itself has grown rapidly. So rapidly in fact,
                    that we are one of the largest societies on/off campus!<br /><br />

                    Redbrick's social side has grown a lot also, with the society celebrating its 20th Anniversary back in April 2016.
                    The society continues to run their annual Freshers Ball, Halloween Party, Christmas Party and Tech Week throughout the year.<br /><br />

                    As one of the biggest societies in DCU, we're always looking for new membership. The membership fee itself is a paltry €4.00 until Clubs & Socs Day 2
                    (generally mid February) when the membership cost drops to €2.00! However outside of Clubs & Socs days it becomes a little awkward to sign up,
                    but it is more than doable - check here for details on how to pay. Our current main server is Azazel, with Pygmalion also providing login services to users.
                    See the Redbrick Hardware Inventory for descriptions of our servers and other equipment.</p>
            </div>

            <div id="committee">

                <p class="content-title">Committee</p>
                <hr class="full"></hr><br /><br />
                <CommitteeCards />
            </div>

        </ >

    );

}
