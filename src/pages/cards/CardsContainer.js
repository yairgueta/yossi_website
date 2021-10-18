import React from 'react';
import "./cards-container.css"
import Card from "./Card";
import {FaTools} from "@react-icons/all-files/fa/FaTools";
import {FaStar} from "@react-icons/all-files/fa/FaStar";
import {FaMedal} from "@react-icons/all-files/fa/FaMedal";

const CardsContainer = props => {
    const cards = [
        <Card title={"משהו מפרגן"} icon={<FaTools/>}>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. </Card>,
        <Card title={"פרגון נוסף"} icon={<FaStar/>}> לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. </Card>,
        <Card title={"פרגונים"} icon={<FaMedal/>}>לורם איפסום דולור סיט אמט, קולהע צופעט</Card>,
    ]

    return (
        <div className="cards-container d-flex w-100 align-items-center
                        flex-column justify-content-between
                        flex-md-row justify-content-md-evenly">
            {cards.map((card, index) =>
                <div data-aos="flip-right"
                     data-aos-duration="1000">
                    {card}
                </div>)}
        </div>
    );
};

export default CardsContainer;
