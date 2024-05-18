import toggle from '../../../assets/images/toggle.svg'
interface ComponentProps {
    step: number
    setStep: Function
}
const FormSettings : React.FC<ComponentProps> =  ({step,setStep}) => {
  return (
        <div className="my-20 py-20 create-project flex flex-col w-full gap-20">
            <div className="flex flex-col w-[80%] items-center m-auto gap-16">
                <div className="grid grid-cols-3 justify-center w-full gap-20 items-center mb-50">
                    <div className="col-span-2 font-semibold flex flex-col gap-5 justify-center text-[28px]">Form Settings            
                        <div className="font-normal text-base">Set the settings for the behaviour of the form.</div>
                    </div>
                    <div className=""></div>
                </div>
                <div className="grid grid-cols-3 justify-center w-full gap-20 items-center">
                    <div className="col-span-2 font-semibold flex flex-col gap-5 justify-center">Require Approval            
                        <div className="font-normal">Project manager needs to approve responder before they can be added as  a project team member.</div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <img src={toggle} alt="" className='cursor-pointer'/>
                    </div>
                </div>
                <div className="grid grid-cols-3 justify-center w-full gap-20 items-center">
                    <div className="col-span-2 font-semibold flex flex-col gap-5 justify-center">Successful Submission Mail            
                        <div className="font-normal">Receive a notification for every successful form submission.</div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <img src={toggle} alt="" className='cursor-pointer'/>
                    </div>
                </div>
                <div className="grid grid-cols-3 justify-center w-full gap-20 items-center">
                    <div className="col-span-2 font-semibold flex flex-col gap-5 justify-center">Approval of Submission Mail            
                        <div className="font-normal">Receive a notification when responders' request to join team is approved.</div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <img src={toggle} alt="" className='cursor-pointer'/>
                    </div>
                </div>
                <div className="grid grid-cols-3 justify-center w-full gap-20 items-center">
                    <div className="col-span-2 font-semibold flex flex-col gap-5 justify-center">Request Payment            
                        <div className="font-normal">Responder needs to make payment to make submission of the form.</div>
                    </div>
                    <div className='flex items-center justify-end'>
                        <img src={toggle} alt="" className='cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className="px-20 flex w-full py-10  justify-between items-center border border-borderGray shadow">
                <div className="font-semibold text-recruitBlue cursor-pointer flex items-center gap-10" onClick={()=>setStep(step - 1)}><i className="fa-solid fa-arrow-left"></i>Go Back</div>
                <button className={`py-10 px-30 bg-recruitBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-16 flex gap-10`} onClick={()=> setStep(step + 1)}>Continue <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="h-[100px] w-full bg-inherit"></div>
        </div>
  )
}

export default FormSettings