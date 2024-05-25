
interface ButtonProps {
  onClick: Function;
  disabled?: boolean;
  label: string;
  extraClass?: string;
  loading?: boolean;
}

function Button({ onClick, label, extraClass='', disabled = false,loading=false }: ButtonProps) {
  return (
    <button className={`${extraClass ? extraClass : 'bg-recruitBlue'} py-10 px-30 text-white h-[45px] flex items-center justify-center  rounded-16 ${disabled && 'opacity-50 not-allowed'} ${!disabled && 'cursor-pointer'}`}  disabled={disabled} onClick={()=>onClick()}>
      {!loading ? label : <i className="fa-solid fa-spinner spinner"></i>}
    </button>
  );
}

export default Button;
