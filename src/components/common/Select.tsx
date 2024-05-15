import { useEffect, useRef, useState } from 'react';

interface InputProps {
  updateFunction?: (value: string) => void;
  options?: string[];
  extraClass?: string;
  value?: string;
  icon?: any;
  inFocus? : boolean;
}

function Select({ updateFunction, extraClass='', options, value, icon, inFocus }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue]= useState<string>('');
  const inputRef = useRef<any>(null);

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
    setInputValue(value);
    updateFunction && updateFunction(value);
  }

  useEffect(()=>{
    if(inFocus && inputRef.current){
      inputRef.current.focus();
    }
  },[]);
  return (
    <div className={`relative flex items-center p-10 border border-solid bg-inherit rounded-8 w-full ${!value &&'cursor-pointer'} relative z-0 transition-all duration-300 ${isFocused ? 'border-gray-borderGray' : 'border-gray-borderGray'} ${isFocused || inputValue ? 'border-inputBorderActive' : ''}`}>
        {icon && <img src={icon} alt="" className='h-[24px] w-[24px]'/>}
        <select
        className={`outline-none border-none w-full h-full ${!value &&'cursor-pointer'} bg-inherit ${extraClass} ${isFocused || inputValue ? 'text-black' : 'text-lightBlack  text-14'} z-0`}
        onFocus={!value ? handleFocus : ()=>{}}
        onBlur={!value ? handleBlur : ()=>{}}
        disabled = {value ? true : false}
        onChange={(e) => updateValue(e.target.value)}
        ref={inputRef}
        >
            {options ? options.map((option, index)=>(
                <option value={option} key={index}>{option}</option>
            )) : <option>{value}</option>}
        </select>
    </div>
  );
}

export default Select;
