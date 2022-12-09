import Button from '../Button';

export const TextBannerBg = (props: any) => {
  const textClassName = `ps-text-banner__${props.textPosition} ps-text-banner__${props.textTheme}`;


  const sectionStyle = {
    backgroundImage: `url('${props.background}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div
      className={`ps-text-banner bg-slate-700 px-40 py-12 font-thin flex ${textClassName}`}
      style={sectionStyle}
    >
      <div className="ps-text-banner--text max-w-md">
        <img src={props.logo} alt={props.title} className="w-72 md:w-auto" />
        <h2 className="text-4xl mt-6">{props.title}</h2>
        <p className="text-base mt-4 mb-8">{props.text}</p>
        <Button themeWhite={props.textTheme} name={props.button} />
      </div>
    </div>
  );
};
