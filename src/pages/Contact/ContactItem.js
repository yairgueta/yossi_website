import React, {useEffect, useRef} from 'react';


const ContactItem = ({link, icon, iconColor}) => {
    const style = {"--animation-color": iconColor}
    return (
        <a href={link}>
            <div className="contact-item px-2 py-1 mx-1" style={style}>
                {icon}
            </div>
        </a>
    );
};

export default ContactItem;
