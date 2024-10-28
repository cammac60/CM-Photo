'use client'
import './Footer.scss';

const Footer = () => {
    const email = 'cam.mac.cm@gmail.com';
    const currentYear = new Date().getFullYear();

    return (
        <div id="footer-wrapper">
            <p className="footer-text" id="_notice">Copyright Notice</p>
            <p className="footer-text" id="_rights">© {currentYear} Cameron MacRae Photography & Design. All rights reserved.</p>
            <p className="footer-text" id="_disclaimer">All images and content on this website are the property of Cameron MacRae and are protected by copyright laws. Unauthorized use, reproduction, or distribution of any images or content without prior written permission is strictly prohibited. For licensing inquiries or to obtain permission for use, please contact {email}.</p>
        </div>
    )
};

export default Footer;