import './Towers.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Towers = async () => {
    const data = await getPhotosByGalleryType('Towers');
    return (
        <div id="towers-wrapper" className="gallery-images-wrapper">
            <div className='gallery-info'>
                <h3 className='gallery-info_header'>
                    Towers
                </h3>
                <p className='gallery-info_text'>
                A central theme in my photography is isolation. The Towers project aims to capture many different kinds of architectural beauty in the form of temples, skyscrapers, bell towers, and more. The concept behind the Towers project is creating portraits of these structures by isolating them from their surroundings to highlight their architectural detail only.
                </p>
            </div>
            {data.map((item, index) => (
                <ImageTile key={index} props={item} />
            ))}
        </div>
    );
};

export default Towers;