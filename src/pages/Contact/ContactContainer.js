import React from 'react';
import "./contact.css"
import ContactItem from "./ContactItem";
import {RiWhatsappFill} from "@react-icons/all-files/ri/RiWhatsappFill"
import {IconContext} from "@react-icons/all-files";
import {FaPhone} from "@react-icons/all-files/fa/FaPhone";
import {FaSms} from "@react-icons/all-files/fa/FaSms";
import {MdEmail} from "@react-icons/all-files/md/MdEmail";

const ContactContainer = props => {
    return (
        <div className="contact-container d-flex flex-row position-relative">
            {/*<div className="contact-shadow flex-wrap position-absolute w-100 h-50 bottom-0"></div>*/}

            <div className="d-flex flex-row justify-content-evenly align-items-center p-3">
                <IconContext.Provider value={{size: "35"}}>
                    <ContactItem icon={<RiWhatsappFill/>} link={"https://wa.me/972545228088"} iconColor="#25D366"/>
                    <ContactItem icon={<FaPhone/>} link={"tel:0545228088"} iconColor="#000"/>
                    <ContactItem icon={<FaSms/>} link={"sms:0545228088"} iconColor="#0D7EF7FF"/>
                    <ContactItem icon={<MdEmail/>} link={"mail:"} iconColor="#CF4B3DFF"/>
                </IconContext.Provider>
            </div>
        </div>
    );
};

ContactContainer.propTypes =
    {}
;

export default ContactContainer;
