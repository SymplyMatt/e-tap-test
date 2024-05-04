import { useState } from 'react';

interface InputProps {
  updateFunction: (value: string) => void;
  label: string;
  placeholder?: string;
  inputExtraClass?: string;
}

function Textarea({ updateFunction, label, placeholder=label.toLowerCase(), inputExtraClass='' }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`relative flex flex-col p-10 border border-solid bg-inherit rounded-8 w-full cursor-pointer relative z-0 transition-all duration-300 ${isFocused ? 'border-gray-borderGray' : 'border-gray-borderGray'} ${isFocused ? 'border-inputBorderActive' : ''}`}>
      {isFocused && <label className='flex text-left items-start absolute top-[-12px] z-10 bg-white text-14'>{label}</label>}
      <textarea name="" id="" cols={10} rows={6}
        placeholder={isFocused ? '' : placeholder} 
        className={`outline-none border-none w-full h-full cursor-pointer bg-inherit ${inputExtraClass} ${isFocused ? 'text-black' : 'text-lightBlack  text-14'} z-0`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => updateFunction(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Textarea;
