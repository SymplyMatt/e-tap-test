import { useEffect, useRef, useState } from 'react';
interface InputProps {
  updateFunction?: (value: string) => void;
  label?: string;
  placeholder?: string;
  inputExtraClass?: string;
  type?: string;
  value?: string;
  icon? : any;
  inFocus? : boolean;
  regex?: RegExp;
}

function Input({ updateFunction, label, placeholder= label ? label.toLowerCase() : '', inputExtraClass='', type='text', value, icon, inFocus, regex = /.*/ }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
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
    if(regex.test(value)){
      setInputValue(value);
      updateFunction && updateFunction(value);
    }
  }

  useEffect(()=>{
    if(inFocus && inputRef.current){
      inputRef.current.focus();
    }
  },[])
  return (
    <div className={`relative flex items-center p-10 border border-solid bg-inherit rounded-8 w-full ${!value &&'cursor-pointer'} relative z-0 transition-all duration-300 gap-10 ${isFocused ? 'border-gray-borderGray' : 'border-gray-borderGray'} ${isFocused ? 'border-inputBorderActive' : ''}`}>
      {isFocused && <label className='flex text-left items-start absolute top-[-12px] z-10 bg-white text-14'>{label}</label>}
      {icon && <img src={icon} alt="" className='h-[24px] w-[24px]'/>}
      <input 
        type={isFocused ? type : 'text'} 
        placeholder={isFocused ? '' : placeholder} 
        className={`outline-none border-none w-full h-full ${!value &&'cursor-pointer'} bg-inherit ${inputExtraClass} ${isFocused ? 'text-black' : 'text-lightBlack  text-14'} z-0`}
        onFocus={!value ? handleFocus : ()=>{}}
        onBlur={!value && !inputValue ? handleBlur : ()=>{}}
        value={value ? value : inputValue }
        onChange={(e) => updateValue(e.target.value)}
        disabled = {value ? true : false}
        ref={inputRef}
      />
    </div>
  );
}

export default Input;
