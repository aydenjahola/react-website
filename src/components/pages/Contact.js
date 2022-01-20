import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div id="services">
            <div id="header">
                <h1 className="about-header"></h1>
            </div>

            <p class="content-title">Contact Us</p>
            <hr class="full"></hr><br /><br />
            <p class="content-text-services"><b className="subheading">Helpdesk</b><br /><br />

                The Redbrick Helpdesk is staffed by our team of highly skilled volunteer education officers.
                The Helpdesk write and maintain a series of tutorials on Redbrick’s systems. The Helpdesk team can also be contacted by Email, and over Discord. <br /> <br />

                The Helpdesk can be emailed at <a href="mailto:helpdesk@redbrick.dcu.ie" className="redirect-link">helpdesk@redbrick.dcu.ie</a>. <br /> <br />

                <b className="subheading">Contact an Admin</b><br /><br />

                You can email this year's Elected Admin's at <a href="mailto:elected-admins@redbrick.dcu.ie" className='redirect-link'>elected-admins@redbrick.dcu.ie</a>. <br /> <br />

                <b className="subheading">Discord Server</b><br /><br />

                You can join the Redbrick Discord server by joining below: <br /> <br />

                <iframe src="https://discord.com/widget?id=568403963595063307&theme=dark" className="discord-widget" allowtransparency="true"
                    frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </p>


        </div >
    );
}
