import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Street = async () => {
    const data = await getPhotosByGalleryType('Street');
    return (
        <div id="street-wrapper" className="gallery-images-wrapper">
            <ImageTile props={data} />
        </div>
    );
};

export default Street;