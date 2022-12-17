import Button from '../Button';
import { urlFor } from '../../utils/sanity';

export const PsPlussBanner = (props: any) => {

  const sectionStyle = {
    backgroundImage: props.dataBanner ? `url('${urlFor(props.dataBanner?.[0].urlImg).url()}')` : '',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div>
      {props.dataBanner && (
        <div
          style={sectionStyle}
          className={`ps-text-banner ps-text-banner__image px-7 flex-col-reverse md:flex-row sm:px-12 lg:px-40 py-12 font-thin flex md:justify-around justify-start items-center bg-white ps-text-banner__black `}
        >
          <div className="ps-text-banner--text max-w-md sm:text-left text-center">
            <img
              src={urlFor(props.dataBanner[0]?.urlImgLogo?.asset).url()}
              alt="ps pluss logo"
              className="w-72 md:w-auto mx-auto"
            />
            <p className="text-base mt-4 mb-8">{props.dataBanner[0]?.text}</p>
            <Button themeWhite="dark" name={props.dataBanner[0]?.button} />
          </div>
          <img
            src={urlFor(props.dataBanner[0]?.urlImgGames?.asset).url()}
            alt=""
            className="max-w-lg w-full md:mb-0 md:ml-8 mb-8 ml-0"
          />
        </div>
      )}
    </div>
  );
};
