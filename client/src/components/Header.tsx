import SonyLogo from '../assets/sony-log-wt.png';
import PsLogo from '../assets/ps-logo.png'
import Button from './Button';

export const Header = (props:any) => {
  return (
    <>
      <div className="w-full h-9 bg-black flex justify-center items-center md:justify-end">
        <img src={SonyLogo} alt="sony logo" className=" w-20 mx-2" />
      </div>
      <div className="h-16 px-5 flex">
        <div className="h-full flex justify-start items-center w-1/2">
          <img src={PsLogo} alt="playstation logo" className=" w-10 mr-4" />
          <ul className="flex gap-4 text-xs">
            {props.pageMenu.map((e: string, index:number) => {
              return <li key={index}>{e}</li>;
            })}
          </ul>
        </div>
        <div className="h-full flex justify-end items-center w-1/2">
          <Button name="Accedi"/>
        </div>
      </div>
    </>
  );
};
