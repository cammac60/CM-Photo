import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Towers = async () => {
    const galleryName = 'Towers';
    const photoData = await getPhotosByGalleryType(galleryName);
    return (
        <div id="towers-wrapper" className="gallery-images-wrapper">
            <ImageTile galleryName={galleryName} photoData={photoData} />
        </div>
    );
};

export default Towers;