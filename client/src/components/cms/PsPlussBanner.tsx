import Button from '../Button';

export const PsPlussBanner = (props: any) => {
  const sectionStyle = {
    backgroundImage: `url('${props.background}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div
      style={sectionStyle}
      className={`ps-text-banner ps-text-banner__image px-7 flex-col-reverse md:flex-row sm:px-12 lg:px-40 py-12 font-thin flex md:justify-around justify-start items-center bg-white ps-text-banner__black `}
    >
      <div className="ps-text-banner--text max-w-md sm:text-left text-center">
        <img
          src={props.logo}
          alt={props.title}
          className="w-72 md:w-auto mx-auto"
        />
        <h2 className="text-4xl mt-6">{props.title}</h2>
        <p className="text-base mt-4 mb-8">{props.text}</p>
        <Button themeWhite="dark" name={props.button} />
      </div>
      <img src={props.image} alt="" className="max-w-lg w-full" />
    </div>
  );
};
