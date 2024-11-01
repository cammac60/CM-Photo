import './Landscape.scss';
import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Landscape = async () => {
    const data = await getPhotosByGalleryType('Landscape');
    return (
        <div id="landscape-wrapper" className="gallery-images-wrapper">
            <div className='gallery-info'>
                <h3 className='gallery-info_header'>
                    Landscape
                </h3>
                <p className='gallery-info_text'>
                    My Landscape series takes a step back and shows larger scenes and how the pieces of the environment fit together to form a cohesive scene. Although many of my landscape photos lean towards a more classic composition I also enjoy playing with light, reflection, and focal length to capture some more abstract images of a larger environment.
                </p>
            </div>
            {data.map((item, index) => (
                <ImageTile key={index} props={item} />
            ))}
        </div>
    );
};

export default Landscape;