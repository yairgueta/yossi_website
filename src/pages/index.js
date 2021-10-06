import * as React from "react"
import HomeScreen from "./home-screen/HomeScreen";
import CardsContainer from "./cards/CardsContainer";
import "./styles.css"
import Carousel from "./carousel/Carousel";
import {carouselImages} from "./carousel/CarouselImages"
// markup
const IndexPage = () => {
    return (
        <main>
            <div className="d-flex align-items-center justify-content-center flex-column">

                <title>Home Page</title>
                <HomeScreen></HomeScreen>

                <CardsContainer/>
                <div className="card w-75 d-flex align-items-center justify-content-center">
                    <Carousel imagesData={carouselImages}/>
                </div>
            </div>
        </main>
    )
}

export default IndexPage
