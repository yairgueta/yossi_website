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
    return (
        <main>
            <div className="d-flex align-items-center justify-content-center flex-column">

                <title>המרכז הארצי לאיטום ובידוד</title>
                <Navbar/>
                <HomeScreen/>
                <div className="secondary-page d-flex align-items-center justify-content-center flex-column w-100">
                    <div id="gallery" className="mt-2">
                        <Carousel/>
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
