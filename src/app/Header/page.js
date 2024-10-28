'use client'
import './Header.scss';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {

    const router = useRouter();

    return (
        <div id="header-wrapper">
            <div id="header-left">
                <h1 id="header-left_title">Cameron MacRae</h1>
                <h2 id="header-left_sub-title">Photography & Design</h2>
            </div>
            <div id="header-right">
                <Link href="" id="_home" className="menu_link">Home</Link>
                <Link href="/Gallery" id="_gallery" className="menu_link">Gallery</Link>
                <Link href="/About" id="_about" className="menu_link">About</Link>
                {/* TO DO: Add link to storefront */}
                <Link href="/shop" id="_shop" className="menu_link">Shop</Link>
            </div>
        </div>
    )
};

export default Header;