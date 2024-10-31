import './Towers.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Towers = async () => {
    const data = await getPhotosByGalleryType('Towers');
    return (
        <div id="towers-wrapper" className="gallery-images-wrapper">
            {data.map((item, index) => (
                <ImageTile key={index} props={item} />
            ))}
        </div>
    );
};

export default Towers;