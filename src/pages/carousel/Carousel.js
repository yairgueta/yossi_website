import React from 'react';
import PropTypes from 'prop-types';
import "./carousel.css"
import {carouselImages} from "./CarouselImages";

const Carousel = ({imagesData}) => {
    return (
        <div id="carousel" className="card carousel slide p-2" data-bs-ride="carousel">

            <div className="carousel-indicators">
                {imagesData.map((id, i) => {
                        i = imagesData.length - i - 1;
                        return <button type="button" data-bs-target="#carousel"
                                       data-bs-slide-to={i.toString()}
                                       className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : ""} key={i}/>
                    }
                )}
            </div>

            <div className="carousel-inner h-100 w-100">
                {carouselImages.map((id, i) =>
                    <div className={"carousel-item" + (i === 0 ? " active" : "")} key={i}>
                        <img src={"https://picsum.photos/500/500?random=" + i} className="d-block w-100 h-100"
                             alt={id.alt}/>
                        {/*<img src={id.src} className="d-block w-100" alt={id.alt}/>*/}
                    </div>
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    );
};

Carousel.propTypes = {
    imagesData: PropTypes.array
};

export default Carousel;
