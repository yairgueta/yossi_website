import * as React from "react"
import HomeScreen from "./home-screen/HomeScreen";
import CardsContainer from "./cards/CardsContainer";
import "./styles.css"
import Carousel from "./carousel/Carousel";
import AboutPage from "./about-me/AboutPage";
import Navbar from "./nav/Navbar";
import Footer from "./footer/Footer";
import "animate.css/animate.min.css";
import {useEffect} from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

const IndexPage = () => {
    useEffect(()=>{
        AOS.init();
    }, [])
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

                <Footer/>
            </div>
        </main>
    )
}

export default IndexPage
