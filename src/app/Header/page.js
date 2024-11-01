'use client'
import './Header.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Header = () => {
    let pathname = usePathname();
    pathname = pathname.includes('/Gallery') ? '/Gallery' : pathname;
    const activePath = {
        home: false,
        about: false,
        gallery: false
    };
    switch (pathname) {
        case '/':
            activePath.home = true;
            break;
        case '/About':
            activePath.about = true;
            break;
        case '/Gallery':
            activePath.gallery = true;
            break;
    };
    return (
        <div id="header-wrapper">
            <div id="header-left">
                <h1 id="header-left_title">Cameron MacRae</h1>
                <h2 id="header-left_sub-title">Photography & Design</h2>
            </div>
            <div id="header-right">
                <Link href="/" id={`active_${activePath.home}`} className="menu_link">Home</Link>
                <Link href="/Gallery" id={`active_${activePath.gallery}`} className="menu_link">Gallery</Link>
                <Link href="/About" id={`active_${activePath.about}`} className="menu_link">About</Link>
                {/* TO DO: Add link to storefront */}
                <Link href="/shop" id="_shop" className="menu_link">Shop</Link>
            </div>
        </div>
    )
};

export default Header;