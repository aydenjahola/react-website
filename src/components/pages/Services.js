import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default function Services() {
    return (
        <div id="services">
            <div class="header">
                <img src="images/services.jpg" alt="Flying Kites" className="header-image" />
                <div class="header-text">
                    <h1>Services</h1>
                </div>
            </div>

            <p class="content-title">Overview</p>
            <hr class="full"></hr><br />
            <p class="content-text-services">Redbrick offers a great range of services to our members, and we are always looking for more to offer.
                If you have any ideas, feel free to mail us with your suggestions.<br /><br />

                Since 1996, we have been providing people with an excellent, powerful and flexible UNIX environment. We have used Solaris, Linux and FreeBSD, some more than others.
                <br /><br />

                First off, we give you 2GB of disk space by default - having somewhere online to store files and mail is essential these days,
                especially if you log on from a wide range of locations. We also provide you with your own Email account,
                and a great range of clients to read/write it with!<br />< br />

                Many people love to code, you can log on to Pygmalion, our development server, which has every compiler under the sun installed,
                and if you find we don’t have the one that you need, let us know and we will try help you out. You should always back up your code.<br /><br />

                We have git installed on Redbrick so have a look here at how to get started, and check out Redbrick Git for free git hosting!<br /><br />

                <b className="subheading">Mail</b><br /><br />

                Once you have your username and password you can use the webmail service we offer on Redbrick. Mail from your Redbrick address auto goes to your DCU email.
                This can stop by typing forward off in terminal on Redbrick, but we don’t know why you’d want to do a thing like that.<br /><br />

                <b className="subheading">Hosting</b><br /><br />

                We currently offer 2 different types of web hosting:<br /><br />

                <span className="domain-styling">https://[username].redbrick.dcu.ie</span> - per user subdomains is on by default for all users<br /><br />

                <span className="domain-styling">https://something.com/</span> - Custom domain hosting is also available, where the hostname is that of a domain you own,
                all you have to do is Email the Weebmaster and get your DNS provider to point the domain at our IP address.
                We also ask that users who have virtual hosts link their site to our homepage. <br /><br />

                <b className="subheading">Coding</b><br /><br />

                Redbrick is a great place to learn or use a vast range of programming languages, we have compilers, interpreters and libraries for:<br /><br />

                Java, C++/C, Assembly, Perl, Python, PHP, Ruby, Shell, Haskell, Objective C, NodeJs, Go <br /><br />

                Additionally we provide databases for projects and personal use. <Link to="/contact" className="redirect-link">Hit up an Admin</Link> for more information!<br />

            </p>


        </div >

    );

}
