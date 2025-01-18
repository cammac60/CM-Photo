import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Towers = async () => {
    const data = await getPhotosByGalleryType('Towers');
    return (
        <div id="towers-wrapper" className="gallery-images-wrapper">
            <div className='gallery-info'>
                <h3 className='gallery-info_header'>
                    Towers
                </h3>
            </div>
            <ImageTile props={data} />
        </div>
    );
};

export default Towers;