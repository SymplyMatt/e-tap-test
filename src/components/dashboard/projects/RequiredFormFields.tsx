import registration_details from '../../../assets/images/registration_details.svg'
import mail from '../../../assets/images/mail.svg'
import phone from '../../../assets/images/phone.svg'
import address from '../../../assets/images/address.svg'
import gender from '../../../assets/images/gender.svg'
import marital_status from '../../../assets/images/marital_status.svg'
import child from '../../../assets/images/child.svg'
import select_photo from '../../../assets/images/select_photo.svg'
import Select from '../../common/Select'
interface ComponentProps {
    step: number
    setStep: Function
}
const RequiredFormFields : React.FC<ComponentProps> =  ({step,setStep}) => {
  return (
        <div className="my-20 py-20 create-project flex flex-col w-full gap-20">
            <div className="flex flex-col items-center gap-50 mb-50">
                <div className="flex flex-col items-center">
                    <div className="font-hiragino text-[32px] font-bold">Registration details</div>
                    <div className="font-normal">Set the required details you want from each applicant </div>
                </div>
                <div className="flex items-center justify-center  flex-col gap-5">
                    <img src={registration_details} alt="" className='h-[200px]'/>
                    <div className="rounded-8 font-normal text-14 border border-borderGray py-5 px-10 flex gap-5 items-center justify-center cursor-pointer"><img src={select_photo} alt="" />Select cover image</div>
                </div>
            </div>
            <div className="px-20 flex w-full py-10  justify-between items-center border border-borderGray shadow">
                <div className="font-semibold text-recruitBlue cursor-pointer flex items-center gap-10"><i className="fa-solid fa-arrow-left"></i>Go Back</div>
                <button className={`py-10 px-30 bg-recruitBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-16 flex gap-10`} onClick={()=> setStep(step + 1)}>Continue <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="flex flex-col w-[50%] items-center m-auto gap-16">
                <div className="grid grid-cols-2 justify-center w-full gap-20 items-center">
                    <div className="font-semibold flex gap-5 items-center"><img src={mail} alt="" className='h-[25px] w-[25px]'/> Email address</div>
                    <Select options={['Required', 'Optional']} updateFunction={()=>{}}/>
                </div>
                <div className="grid grid-cols-2 justify-center w-full gap-20 items-center">
                    <div className="font-semibold flex gap-5 items-center"><img src={phone} alt="" className='h-[25px] w-[25px]'/> Phone number</div>
                    <Select options={['Optional','Required']} updateFunction={()=>{}}/>
                </div>
                <div className="grid grid-cols-2 justify-center w-full gap-20 items-center">
                    <div className="font-semibold flex gap-5 items-center"><img src={address} alt="" className='h-[25px] w-[25px]'/> Home address</div>
                    <Select options={['Required', 'Optional']} updateFunction={()=>{}}/>
                </div>
                <div className="grid grid-cols-2 justify-center w-full gap-20 items-center">
                    <div className="font-semibold flex gap-5 items-center"><img src={gender} alt="" className='h-[25px] w-[25px]'/> Gender</div>
                    <Select options={['off', 'on']} updateFunction={()=>{}}/>
                </div>
                <div className="grid grid-cols-2 justify-center w-full gap-20 items-center">
                    <div className="font-semibold flex gap-5 items-center"><img src={marital_status} alt="" className='h-[25px] w-[25px]'/> Date of Birth</div>
                    <Select options={['off', 'on']} updateFunction={()=>{}}/>
                </div>
                <div className="grid grid-cols-2 justify-center w-full gap-20 items-center">
                    <div className="font-semibold flex gap-5 items-center"><img src={gender} alt="" className='h-[25px] w-[25px]'/> Occupation</div>
                    <Select options={['Required', 'Optional']} updateFunction={()=>{}}/>
                </div>
                <div className="grid grid-cols-2 justify-center w-full gap-20 items-center">
                    <div className="font-semibold flex gap-5 items-center"><img src={marital_status} alt="" className='h-[25px] w-[25px]'/> Marital status</div>
                    <Select options={['off', 'on']} updateFunction={()=>{}}/>
                </div>
                <div className="grid grid-cols-2 justify-center w-full gap-20 items-center">
                    <div className="font-semibold flex gap-5 items-center"><img src={child} alt="" className='h-[25px] w-[25px]'/> Children</div>
                    <Select options={['Required', 'Optional']} updateFunction={()=>{}}/>
                </div>
            </div>
            <div className="h-[100px] w-full bg-black"></div>
        </div>
  )
}

export default RequiredFormFields