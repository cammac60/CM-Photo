import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Architecture = async () => {
    const data = await getPhotosByGalleryType('Architecture');
    return (
        <div id="architecture-wrapper" className="gallery-images-wrapper">
            <ImageTile props={data} />
        </div>
    );
};

export default Architecture;