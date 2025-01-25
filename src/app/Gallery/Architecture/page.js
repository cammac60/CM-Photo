import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Architecture = async () => {
    const galleryName = 'Architecture';
    const photoData = await getPhotosByGalleryType(galleryName);
    return (
        <div id="architecture-wrapper" className="gallery-images-wrapper">
            <ImageTile galleryName={galleryName} photoData={photoData} />
        </div>
    );
};

export default Architecture;