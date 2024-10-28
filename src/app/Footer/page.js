'use client'
import './Footer.scss';

const Footer = () => {
    const email = 'cam.mac.cm@gmail.com';
    const currentYear = new Date().getFullYear();

    return (
        <div id="footer-wrapper">
            <p>Copyright Notice</p>
            <p>© {currentYear} Cameron MacRae Photography & Design. All rights reserved.</p>
            <p>All images and content on this website are the property of John Doe and are protected by copyright laws. Unauthorized use, reproduction, or distribution of any images or content without prior written permission is strictly prohibited. For licensing inquiries or to obtain permission for use, please contact {email}.</p>
        </div>
    )
};

export default Footer;