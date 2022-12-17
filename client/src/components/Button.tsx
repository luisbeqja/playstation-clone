
interface ButtonType {
  themeWhite?: String;
  name: String;
}

export default function Button(props: ButtonType) {
  const themeClass:String = props.themeWhite === 'white' ? 'ps-button__white' : '';
  return (
    <a
      href=""
      className={`ps-button outline-none inline-block rounded-full ${themeClass}`}
    >
      <button className={`px-4 py-1 rounded-full font-normal `}>
        {props.name}
      </button>
    </a>
  );
}
