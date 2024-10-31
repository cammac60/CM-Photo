import Image from 'next/image';

const ImageTile = async props => {
    const { url, caption, variantSize } = props;
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
        <div className={`gallery-img_${variantSize}`}>
            <Image src={url} className={variantSize} alt="Image from API" quality={100} overrideSrc='/Img.jpg' height={baseHeight} width={baseWidth} />
            <p className="gallery-img_caption">{caption}</p>
        </div>
    );
};

export default ImageTile;