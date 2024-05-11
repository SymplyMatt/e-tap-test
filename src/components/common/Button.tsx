
interface ButtonProps {
  onClick: Function;
  disabled?: boolean;
  label: string;
  extraClass?: string;
}

function Button({ onClick, label, extraClass='', disabled = false }: ButtonProps) {
  return (
    <button className={`${extraClass ? extraClass : 'bg-recruitBlue'} py-10 px-30 text-white h-[45px] flex items-center justify-center cursor-pointer rounded-16 ${disabled && 'opacity-50'}`} disabled={disabled} onClick={()=>onClick()}>{label}</button>
  );
}

export default Button;
