// import './Towers.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Architecture = async () => {
    const data = await getPhotosByGalleryType('Architecture');
    return (
        <div id="architecture-wrapper" className="gallery-images-wrapper">
            <div className='gallery-info'>
                <h3 className='gallery-info_header'>
                    Architecture
                </h3>
                <p className='gallery-info_text'>
                In my Architecture series I try to capture the beauty in all forms of design and architecture. From the cosmically aligned stone temples of Teotihuacan, to the intricate tiles adorning the facades of Lisbon, to the stone carving of Mt. Rushmore. 
                </p>
            </div>
            {data.map((item, index) => (
                <ImageTile key={index} props={item} />
            ))}
        </div>
    );
};

export default Architecture;