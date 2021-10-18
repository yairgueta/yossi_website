import React from 'react';
import {FaHome} from '@react-icons/all-files/fa/FaHome'
import './navbar.css'

const Navbar = () => {
    const links = [
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
        <nav id="navbar" className="navbar sticky-top navbar-expand-md navbar-light bg-light w-100">
            <div className="container-fluid">
                <div className="navbar-brand" onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}><FaHome/></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}}>
                        {links.map((link, i) =>
                            <li className="nav-item" key={i}>
                                <a className="nav-link" href={`#${link.id}`}>{link.name}</a>
                            </li>
                        )}

                    </ul>
                </div>
                <div className="contact-number">
                    יוסי - <a href="tel:tel:0545228088">054-522-8088</a>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {

};

export default Navbar;
