import * as React from "react"
import HomeScreen from "./home-screen/HomeScreen";
import CardsContainer from "./cards/CardsContainer";

// markup
const IndexPage = () => {
    return (
        <main>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
                  crossOrigin="anonymous"/>

            <title>Home Page</title>
            <HomeScreen></HomeScreen>

            <CardsContainer/>
        </main>
    )
}

export default IndexPage
