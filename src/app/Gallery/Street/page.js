import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Street = async () => {
    const data = await getPhotosByGalleryType('Street');
    return (
        <div id="street-wrapper" className="gallery-images-wrapper">
            <div className='gallery-info'>
                <h3 className='gallery-info_header'>
                    Street
                </h3>
            </div>
            <ImageTile props={data} />
        </div>
    );
};

export default Street;