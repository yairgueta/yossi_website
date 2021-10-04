import React from 'react';
import bg from '../../images/first-bg.jpeg'
import "./HomeScreen.css"


const HomeScreen = props => {
    return (
        <div className="HomeScreen">
            <img src={bg}/>
            <h1 className="header">
                <span className="header-tag badge">המרכז הארצי לאיטום ובידוד</span>
            </h1>
        </div>
    );
};

HomeScreen.propTypes = {};


export default HomeScreen;
