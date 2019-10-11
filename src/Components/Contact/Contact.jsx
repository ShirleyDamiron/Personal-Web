import React from 'react';
import Nav from '../NavBar/Nav';
import Footer from "../Footer/Footer"
import "./contact.css";

function Contact() {
    return (
        <>
        <div className="content-wrapper">
            <div className="background"></div>
            <Nav />
        </div>
        <div className="communicationContainer">
            <h1 className="communication">Communicate With Me</h1>
            <ul>
                <li>Email: shirleydamiron90@gmail.com</li>
                <li>LinkedIn: Shirley Damiron</li>
                <li>Github: ShirleyDamiron</li>
                <li>Location: Charlotte, NC</li>
            </ul>
        </div>
        <Footer />
        </>
    )
}

export default Contact;