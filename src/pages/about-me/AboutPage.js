import React from 'react';
import PropTypes from 'prop-types';
import "./about-page.css"
import pic from "../../images/yossi-pic.jpeg"

const AboutPage = props => {
    return (
        <div className="about-main w-100">
            <img className="about-left-bg w-50" src={pic}/>
            <div className="about-screen px-2 py-3">
                <h2>על עצמי</h2>
                <p> דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.</p>
            </div>
        </div>
    );
};


export default AboutPage;
