import React from 'react';
import bg from '../../images/first-bg.jpeg'
import "./home-screen.css"
import ContactContainer from "../Contact/ContactContainer";


const HomeScreen = props => {
    return (
        <div className="HomeScreen d-flex justify-content-center flex-column">
            <img className="w-100" src={bg}/>
            <h1 className="header align-items-start ms-auto badge me-4 mt-5">
                המרכז הארצי לאיטום ובידוד
            </h1>
            <ContactContainer/>
        </div>
    );
};

HomeScreen.propTypes = {};


export default HomeScreen;
