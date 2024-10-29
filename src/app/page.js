import { getBannerImage } from './apiCalls.js';
import Image from 'next/image';

const Home = async () => {
  const imageUrl = await getBannerImage();
  console.log(imageUrl);

  return (
    <div>
      {
        imageUrl && (
          <Image src={imageUrl} alt="Image from API" height={300} width={500} />
        )
      }
    </div>
  );
};

export default Home;
