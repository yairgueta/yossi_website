import React from 'react';
import PropTypes from 'prop-types';
import "./card.css"
import {IconBase, IconContext} from "@react-icons/all-files";

const Card = ({title, icon, children}) => {
    return (
        <div className="card_ flex-grow-0 flex-shrink-1 d-flex flex-column justify-content-center align-items-center p-2 pt-3">
            <div className="icon">
                <IconContext.Provider value={{size: "35"}}>
                    {icon}
                </IconContext.Provider>
            </div>
            <h5 className="mt-2 text-center">{title}</h5>
            <div className="flex-grow-1 d-flex align-content-center align-items-center">
                <p className="text-center m-0">{children}</p>

            </div>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    icon: IconBase
};

export default Card;
