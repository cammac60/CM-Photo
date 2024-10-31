import Image from 'next/image';
import './Image.scss';

const ImageTile = async props => {
    const { url, caption, variantSize, order } = props.props;
    let baseHeight, baseWidth, alignment;
    switch (variantSize) {
        case 'portraitWeb':
            alignment = order % 2 === 0 ? 'right' : 'left';
            baseWidth = 1638;
            baseHeight = 2048;
            break;
        case 'portraitWebTall':
            alignment = order % 2 === 0 ? 'right' : 'left';
            baseWidth = 1365;
            baseHeight = 2048;
            break;
        case 'landscapeWeb':
            alignment = 'lanscape';
            baseWidth = 2048;
            baseHeight = 1280;
            break;
        case 'landscapeWebWide':
            alignment = 'lanscape';
            baseWidth = 2048;
            baseHeight = 512;
            break;
    };
    return (
        <div className={`gallery-img_${variantSize} gallery-img`}>
            <Image src={url} className={`${variantSize} img-alignment_${alignment}`} alt="Image from API" quality={100} overrideSrc='/Img.jpg' height={baseHeight} width={baseWidth} />
            <p className={`gallery-img_caption img-alignment_${alignment}`}>{caption}</p>
        </div>
    );
};

export default ImageTile;