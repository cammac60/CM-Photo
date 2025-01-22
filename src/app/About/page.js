import { getBannerImage } from '../apiCalls.js';
import Link from 'next/link';
import './About.scss'

const About = async () => {
  const imageUrl = await getBannerImage();

  return (
    <div id="about">
      <div id="about_background" style={{backgroundImage: `url(${imageUrl})`}} height={1280} width={2048} >
        <div id="about_text-wrapper">
            <p id="about_text">
            I am a Denver based hobbyist photographer with more than 15 years of experience. I am self taught and began photography as a teenager with an old SLR I found in my parent's basement. I eventually moved on to iPhone photography before eventually a DSLR. I mainly use my photography to document my travels and experiences and to share my interest in cities, architecture, and nature but I also have some experience doing portrait, nature, and concert photography. My style often involves removing context from my photos by isolating the subject. 
            <br />
            <br />
            My <Link href="/Gallery/Towers" id="about_tower-link" className="menu_link-2">Towers</Link> series uses long focal lengths to capture the architectural details of the pagodas, modern skyscrapers, church bell towers, and more. I think of this series as close up portraits of buildings. By removing almost all elements of the foreground and silhouetting the towers against the simple background of the sky the viewer is able to see the tower as an individual rather than as a part of its surroundings.
            <br />
            <br />
            My <Link href="/Gallery/Architecture" id="about_architecture-link" className="menu_link-2">Architecture</Link> series takes a step back to focus on how architecture fits into the fabric of the surrounding landscape and the unique and unexpected ways of viewing architecture. I also take some steps forward in this series and focus on the finer artistic details that are sometimes overlooked.
            <br />
            <br />
            My <Link href="/Gallery/Street" id="about_street-link" className="menu_link-2">Street</Link> series uses a variety of techniques to explore how people and animals fit into, stand out of, or blend into their surroundings. Isolationism is explored more in this series with subjects often appearing alone or standing out from the surrounding environment. This can be done by using framing, scale, movement, and lighting to provide contrasts between the subject and environment.
            <br />
            <br />
            My <Link href="/Gallery/Landscape" id="about_landscape-link" className="menu_link-2">Landscape</Link> series generally leans towards a more classic style but I sometimes also enjoy using focal length, contrast, and reflection to capture slightly more abstract photos. Similar to my architecture photography I find unique and unexpected viewpoints just as interesting as the classic landscape scenes. 
            <br />
            <br />
            Outside of photography I love to travel, read, ski, try new restaurants, and watch documentaries. I am a huge history nerd and am most often reading historical nonfiction or biographies. My day job is in software engineering. 
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;