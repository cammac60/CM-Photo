import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Architecture = async () => {
    const data = await getPhotosByGalleryType('Architecture');
    return (
        <div id="architecture-wrapper" className="gallery-images-wrapper">
            <div className='gallery-info'>
                <h3 className='gallery-info_header'>
                    Architecture
                </h3>
            </div>
            <ImageTile props={data} />
        </div>
    );
};

export default Architecture;