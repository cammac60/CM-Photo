'use client';
import Image from 'next/image';
import './Image.scss';
import { useState } from 'react';

const ImageTile = props => {
    const [currentImageNum, setCurrentImageNum] = useState(0);
    const lastPage = props.props.length - 1;
    const updateImage = type => {
        setCurrentImageNum(prevNum => {
            if (type === 'next') {
                return prevNum === lastPage ? 0 : prevNum + 1;
            }
            if (type === 'previous') {
                return prevNum === 0 ? lastPage : prevNum - 1;
            }
            return prevNum;
        });
    };
    let counter = `${currentImageNum + 1} / ${lastPage + 1}`;
    let { url, caption, variantSize } = props.props[currentImageNum];
    let baseHeight, baseWidth;
    switch (variantSize) {
        case 'portraitWeb':
            baseWidth = 1638;
            baseHeight = 2048;
            break;
        case 'portraitWebTall':
            baseWidth = 1365;
            baseHeight = 2048;
            break;
        case 'landscapeWeb':
            baseWidth = 2048;
            baseHeight = 1280;
            break;
        case 'landscapeWebWide':
            baseWidth = 2048;
            baseHeight = 512;
            break;
    };
    return (
        <div className='gallery-img'>
            <div className='gallery-img_main-panel'>
                <Image src={url} className={`${variantSize}`} alt="Image from API" quality={100} overrideSrc='/Img.jpg' height={baseHeight} width={baseWidth} />
                <div className='gallery-img_menu-text'>
                    <p className='gallery-img_menu-header'>Test</p>
                    <p className={`gallery-img_caption`}>{caption}</p>
                    <div className='gallery-img_store-wrapper'>
                        <a className='gallery-img_store-link'>Purchase</a>
                        <Image className='store-link_image' src='/images/external-link-svgrepo-com.svg' alt='Link to purchase' height={15} width={15} />
                    </div>
                    <div className='gallery-img_menu-controls'>
                        <button className='gallery-img_menu-button menu-button_prev' onClick={() => updateImage('previous')}>Prev</button>
                        <p className='gallery-img_menu-divider'>/</p>
                        <button className='gallery-img_menu-button menu-button_next' onClick={() => updateImage('next')}>Next</button>
                    </div>
                    <p className='gallery-img_counter'>{counter}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageTile;