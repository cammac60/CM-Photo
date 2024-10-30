import './Gallery.scss';
import { getGalleryBannerImages } from '../apiCalls.js';

const Gallery = async () => {
    const bannerImages = await getGalleryBannerImages();
    console.log(bannerImages);
    return (
      <div id="gallery">
        <div id="gallery_banner">

        </div>
      </div>
    );
  };
  
  export default Gallery;