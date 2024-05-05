import { useEffect, useState } from 'react';

interface InputProps {
  updateFunction?: (value: string) => void;
  options?: string[];
  extraClass?: string;
  value?: string;
  icon?: any;
}

function Select({ updateFunction, extraClass='', options, value, icon }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  useEffect(()=>{
    if(value){
      setIsFocused(true);
    }
  },[])
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const updateValue = (value : string) =>{
    updateFunction && updateFunction(value);
  }

  return (
    <div className={`relative flex items-center p-10 border border-solid bg-inherit rounded-8 w-full ${!value &&'cursor-pointer'} relative z-0 transition-all duration-300 ${isFocused ? 'border-gray-borderGray' : 'border-gray-borderGray'} ${isFocused ? 'border-inputBorderActive' : ''}`}>
        {icon && <img src={icon} alt="" className='h-[24px] w-[24px]'/>}
        <select
        className={`outline-none border-none w-full h-full ${!value &&'cursor-pointer'} bg-inherit ${extraClass} ${isFocused ? 'text-black' : 'text-lightBlack  text-14'} z-0`}
        onFocus={!value ? handleFocus : ()=>{}}
        onBlur={!value ? handleBlur : ()=>{}}
        disabled = {value ? true : false}
        onChange={(e) => updateValue(e.target.value)}
        >
            {options ? options.map((option, index)=>(
                <option value={option} key={index}>{option}</option>
            )) : <option>{value}</option>}
        </select>
    </div>
  );
}

export default Select;
