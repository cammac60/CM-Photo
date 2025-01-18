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
    let { url, caption, variantSize } = props.props[currentImageNum];
    let baseHeight, baseWidth, alignment;
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
        <div className={`gallery-img_${variantSize} gallery-img`}>
            <div className='gallery-img_menu'>
                <p className={`gallery-img_caption img-alignment_${alignment}`}>{caption}</p>
                <div className='gallery-img_menu-controls'>
                    <button onClick={() => updateImage('next')}>Next</button>
                    <button onClick={() => updateImage('previous')}>Previous</button>
                </div>
                <a>Purchase</a>
            </div>
            <Image src={url} className={`${variantSize} img-alignment_${alignment}`} alt="Image from API" quality={100} overrideSrc='/Img.jpg' height={baseHeight} width={baseWidth} />
        </div>
    );
};

export default ImageTile;