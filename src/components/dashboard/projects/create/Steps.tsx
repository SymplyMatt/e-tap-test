
interface ComponentProps {
    step: number;
    setStep: Function
}
const Steps : React.FC<ComponentProps> =  ({step, setStep}) => {
  return (
        <div className="text-20 font-medium grid grid-cols-5 w-full justify-center items-center h-[90px] items-center px-[20%] border-b border-borderGray"> 
            <div className="col-span-1 flex flex-col items-center justify-center h-full gap-5 py-10 cursor-pointer" onClick={()=> setStep(1)}>
                <div className={`h-40 w-40 rounded-50 border-2 flex items-center justify-center text-20 ${step == 1 ? 'border-stepBlue text-stepBlue ' : step > 1 ? 'border-borderGray text-white bg-stepBlue' : 'border-borderGray text-borderGray bg-white'}`}>1</div>
                <div className={`flex justify-center text-center text-14 whitespace-nowrap ${step > 0 ? 'text-stepBlue' : 'text-borderGray'}`}>Project Details</div>
            </div>
            <div className={`col-span-1 w-full h-5 ${step > 1 ? 'bg-stepBlue' : 'bg-borderGray'}`}></div>
            <div className="col-span-1 flex flex-col items-center justify-center h-full gap-5 py-10 cursor-pointer" onClick={()=> setStep(2)}>
                <div className={`h-40 w-40 rounded-50 border-2 flex items-center justify-center text-20 ${step == 2 ? 'border-stepBlue text-stepBlue ' : step > 2 ? 'border-borderGray text-white bg-stepBlue' : 'border-borderGray text-borderGray bg-white'}`}>2</div>
                <div className={`flex justify-center text-center text-14 whitespace-nowrap ${step > 1 ? 'text-stepBlue' : 'text-borderGray'}`}>Cover Photo</div>

            </div>
            <div className={`col-span-1 w-full h-5 ${step > 2 ? 'bg-stepBlue' : 'bg-borderGray'}`}></div>
            <div className="col-span-1 flex flex-col items-center justify-center h-full gap-5 py-10 cursor-pointer" onClick={()=> setStep(3)}>
                <div className={`h-40 w-40 rounded-50 border-2 flex items-center justify-center text-20 ${step == 3 ? 'border-stepBlue text-stepBlue ' : step > 3 ? 'border-borderGray text-white bg-stepBlue' : 'border-borderGray text-borderGray bg-white'}`}>3</div>
                <div className={`flex justify-center text-center text-14 whitespace-nowrap ${step > 2 ? 'text-stepBlue' : 'text-borderGray'}`}>Publish & Share</div>
            </div>
        </div>
  )
}

export default Steps