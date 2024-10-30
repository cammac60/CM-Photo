import './Gallery.scss';
import { getGalleryBannerImages } from '../apiCalls.js';
import Link from 'next/link';

const Gallery = async () => {
    const bannerImages = await getGalleryBannerImages();
    return (
      <div id="gallery">
        <div id="gallery_banner">
            <Link className="gallery_banner-tile" style={{backgroundImage: `url(${bannerImages[0].url})`}} height={2048} width={1638} href="./Gallery/Towers">
                <div className='blur'>
                    <p className='gallery_banner-tile_text'>{bannerImages[0].categoryName}</p>
                </div>
            </Link>
            <Link className="gallery_banner-tile" style={{backgroundImage: `url(${bannerImages[1].url})`}} height={2048} width={1638} href="./Gallery/Architecture">
                <div className='blur'>
                    <p className='gallery_banner-tile_text'>{bannerImages[1].categoryName}</p>
                </div>
            </Link>
            <Link className="gallery_banner-tile" style={{backgroundImage: `url(${bannerImages[2].url})`}} height={2048} width={1638} href="./Gallery/Street">
                <div className='blur'>
                    <p className='gallery_banner-tile_text'>{bannerImages[2].categoryName}</p>
                </div>
            </Link>
            <Link className="gallery_banner-tile" style={{backgroundImage: `url(${bannerImages[3].url})`}} height={2048} width={1638} href="./Gallery/Landscape">
                <div className='blur'>
                    <p className='gallery_banner-tile_text'>{bannerImages[3].categoryName}</p>
                </div>
            </Link>
        </div>
      </div>
    );
  };
  
  export default Gallery;