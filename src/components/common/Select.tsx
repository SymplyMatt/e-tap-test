import { useState } from 'react';

interface InputProps {
  updateFunction: (value: string) => void;
  options: string[];
  extraClass?: string;
}

function Select({ updateFunction, extraClass='', options }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`relative flex flex-col p-10 border border-solid bg-inherit rounded-8 w-full cursor-pointer relative z-0 transition-all duration-300 ${isFocused ? 'border-gray-borderGray' : 'border-gray-borderGray'} ${isFocused ? 'border-inputBorderActive' : ''}`}>
        <select
        className={`outline-none border-none w-full h-full cursor-pointer bg-inherit ${extraClass} ${isFocused ? 'text-black' : 'text-lightBlack  text-14'} z-0`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => updateFunction(e.target.value)}
        >
            {options.map((option, index)=>(
                <option value={option} key={index}>{option}</option>
            ))}
        </select>
    </div>
  );
}

export default Select;
