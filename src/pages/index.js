import * as React from "react"
import HomeScreen from "./home-screen/HomeScreen";
import CardsContainer from "./cards/CardsContainer";
import "./styles.css"
import Carousel from "./carousel/Carousel";
import {carouselImages} from "../images/carousel/CarouselImages"
import AboutPage from "./about-me/AboutPage";
import {secondBg} from "../images/second-bg.jpeg"
import Navbar from "./nav/Navbar";

const IndexPage = () => {
    const linksToNavbar = [
        {
            name: "גלריית תמונות",
            id: "gallery",
        },
        {
            name: "השירות",
            id: "cards",
        },
        {
            name: "על עצמי",
            id: "about",
        },

    ]
    return (
        <main>
            <div className="d-flex align-items-center justify-content-center flex-column">

                <title>המרכז הארצי לאיטום ובידוד</title>
                <Navbar links={linksToNavbar}/>
                <HomeScreen/>
                <div className="secondary-page d-flex align-items-center justify-content-center flex-column">
                    <div id="gallery" className="mt-2">
                        <Carousel imagesData={carouselImages}/>
                    </div>
                    <div id="cards" className="w-100 mt-3">
                        <CardsContainer/>
                    </div>
                    <div id="about" className="mt-3">
                        <AboutPage/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default IndexPage
