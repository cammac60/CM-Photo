import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Street = async () => {
    const galleryName = 'Street';
    const photoData = await getPhotosByGalleryType(galleryName);
    return (
        <div id="street-wrapper" className="gallery-images-wrapper">
            <ImageTile galleryName={galleryName} photoData={photoData} />
        </div>
    );
};

export default Street;