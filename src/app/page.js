import { getBannerImage } from './apiCalls.js';
import Image from 'next/image';

const Home = async () => {
  const imageUrl = await getBannerImage();

  return (
    <div id="banner-img-wrapper">
      {
        imageUrl && (
          <Image src={imageUrl} alt="Image from API" id="banner-img" height={1280} width={2048} />
        )
      }
    </div>
  );
};

export default Home;
