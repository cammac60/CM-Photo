import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Landscape = async () => {
    const data = await getPhotosByGalleryType('Landscape');
    return (
        <div id="landscape-wrapper" className="gallery-images-wrapper">
            <ImageTile props={data} />
        </div>
    );
};

export default Landscape;