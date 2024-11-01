import '../Gallery.scss';
import { getPhotosByGalleryType } from '../../apiCalls.js';
import ImageTile from '../../Image/page.js';

const Street = async () => {
    const data = await getPhotosByGalleryType('Street');
    return (
        <div id="street-wrapper" className="gallery-images-wrapper">
            <div className='gallery-info'>
                <h3 className='gallery-info_header'>
                    Street
                </h3>
                <p className='gallery-info_text'>
                    My Street series uses the concept of isolation by means of light, scale, and framing to put a spotlight on the subject to convey a sense of their place within the environment. 
                </p>
            </div>
            {data.map((item, index) => (
                <ImageTile key={index} props={item} />
            ))}
        </div>
    );
};

export default Street;