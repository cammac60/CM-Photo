import './Gallery.scss';
import { getGalleryBannerImages } from '../apiCalls.js';

const Gallery = async () => {
    const bannerImages = await getGalleryBannerImages();
    console.log(bannerImages);
    return (
      <div id="gallery">
        <div id="gallery_banner">
            <div className="gallery_banner-tile" style={{backgroundImage: `url(${bannerImages[0].url})`}} height={2048} width={1638}>

            </div>
            <div className="gallery_banner-tile" style={{backgroundImage: `url(${bannerImages[1].url})`}} height={2048} width={1638}>

            </div>
            <div className="gallery_banner-tile" style={{backgroundImage: `url(${bannerImages[2].url})`}} height={2048} width={1638}>

            </div>
            <div className="gallery_banner-tile" style={{backgroundImage: `url(${bannerImages[3].url})`}} height={2048} width={1638}>
                
            </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;