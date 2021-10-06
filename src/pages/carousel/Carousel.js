import React from 'react';
import PropTypes from 'prop-types';
import "./carousel.css"
const Carousel = ({imagesData}) => {
    return (
        <div id="carousel" className="carousel slide w-100 p-2" data-bs-ride="carousel">
            <div className="carousel-inner h-100">
                {imagesData.map((id, i) =>
                    <div className={"carousel-item" + (i === 0 ? " active" : "")}>
                        <img src={"https://picsum.photos/500/500?random="+i} className="d-block w-100 h-100" alt={id.alt}/>
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
