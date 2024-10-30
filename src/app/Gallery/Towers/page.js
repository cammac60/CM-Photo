import './Towers.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';

const Towers = async () => {
    const data = await getPhotosByGalleryType('Towers');
    console.log(data);
    return (
        <div id="towers-wrapper" className="gallery-images-wrapper">

        </div>
    );
};

export default Towers;