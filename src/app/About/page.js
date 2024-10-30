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
            I am a hobbyist photographer based in Denver, CO. I use my photography to capture and document my travels. I started photography 15 years ago with an old SLR camera I found in my parent’s basement and eventually moved on to iPhone photography before finally starting with a DSLR.   
            <br />
            <br />
            A central theme in my photography is isolation. My <Link href="/Gallery/Towers" id="about_tower-link" className="menu_link-2">Towers</Link> project aims to capture many different kinds of architectural beauty in the form of temples, skyscrapers, bell towers, and more. The concept behind the Towers project is creating portraits of these structures by isolating them from their surroundings to highlight their architectural detail only.
            <br />
            <br />
            Similarly, in my <Link href="/Gallery/Street" id="about_street-link" className="menu_link-2">Street</Link> series I use the concept of isolation. I like to use light, scale, and framing to put a spotlight on the subject to convey a sense of their place within the environment. 
            <br />
            <br />
            In my <Link href="/Gallery/Architecture" id="about_architecture-link" className="menu_link-2">Architecture</Link> series I try to capture the beauty in all forms of design and architecture. From the cosmically aligned stone temples of Teotihuacan, to the intricate tiles adorning the facades of Lisbon, to the stone carving of Mt. Rushmore. 
            <br />
            <br />
            In my <Link href="/Gallery/Landscape" id="about_landscape-link" className="menu_link-2">Landscape</Link> series I take a step back and show larger scenes and how the pieces of the environment fit together to form a cohesive scene. Although many of my landscape photos lean towards a more classic composition I also enjoy playing with light, reflection, and focal length to capture some more abstract images of a larger environment.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;