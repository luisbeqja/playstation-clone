import instagram from '../assets/social/instagram.webp';
import facebook from '../assets/social/facebook.webp';
import twitter from '../assets/social/twitter.webp';
import youtube from '../assets/social/youtube.webp';

export const SocialBanner = () => {
  return (
    <div className="w-full h-80 flex flex-col items-center justify-center">
      <p className='mb-5 text-2xl uppercase'>Seguici sui social media</p>
      <div className="grid grid-cols-4 gap-4 w-1/2 cursor-pointer max-w-lg">
        <img src={instagram} alt="" className=" w-24" />
        <img src={facebook} alt="" className=" w-24" />
        <img src={twitter} alt="" className=" w-24" />
        <img src={youtube} alt="" className=" w-24" />
      </div>
    </div>
  );
}
