import Button from '../Button';

export const TextBannerImage = (props: any) => {

  return (
    <div
      className={`ps-text-banner ps-text-banner__image px-7 flex-col-reverse md:flex-row sm:px-12 lg:px-40 py-12 font-thin flex md:justify-around justify-start items-center bg-white ps-text-banner__black `}
    >
      <div className="ps-text-banner--text max-w-md sm:text-left text-center">
        <h2 className="text-4xl mt-6">{props.title}</h2>
        <p className="text-base mt-4 mb-8">{props.text}</p>
        <Button themeWhite="dark" name={props.button} />
      </div>
      <img src={props.image} alt="" className="max-w-lg w-full" />
    </div>
  );
};
