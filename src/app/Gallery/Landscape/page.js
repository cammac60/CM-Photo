import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Landscape = async () => {
    const galleryName = 'Landscape';
    const photoData = await getPhotosByGalleryType(galleryName);
    return (
        <div id="landscape-wrapper" className="gallery-images-wrapper">
            <ImageTile galleryName={galleryName} photoData={photoData} />
        </div>
    );
};

export default Landscape;