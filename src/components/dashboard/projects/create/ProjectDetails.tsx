import Input from '../../../common/Input'
import Textarea from '../../../common/Textarea'
import circle_check from '../../../../assets/images/circle_check.svg'
import calendar_fade from '../../../../assets/images/calendar_fade.svg'
import group_fade from '../../../../assets/images/group_fade.svg'
import { useNavigate } from 'react-router-dom'
import { inputs } from '../../../../pages/dashboard/CreateProject'

interface ComponentProps {
    step: number;
    setStep: Function;
    updateValue: Function;
    inputValues: inputs;
}
const ProjectDetails : React.FC<ComponentProps> =  ({step,setStep}) => {
    const navigate = useNavigate();
  return (
        <div className="my-20 py-20 create-project flex flex-col w-full gap-20">
            <div className="flex flex-col w-[40%] items-center m-auto gap-16">
                <div className="w-full flex flex-col relative">
                    <Input updateFunction={()=>{}} label="Project name" inFocus={true}/>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-10 z-0 bg-dashboardColor"><img src={circle_check} alt="" className='h-20 w-20 z-10'/></div>
                </div>
                <Textarea updateFunction={()=>{}} label="Add description" placeholder='Add description'/>
                <div className="flex flex-col gap-20 items-center">
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <Input updateFunction={()=>{}} label="Start date" type='date' icon={calendar_fade}/>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input updateFunction={()=>{}} label="Time" type='time'/>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <Input updateFunction={()=>{}} label="End date" type='date' icon={calendar_fade}/>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input updateFunction={()=>{}} label="Time" type='time'/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <div className={`h-[45px] p-10 border border-solid bg-inherit rounded-8 w-full border-gray-borderGray text-lightBlack text-14 flex items-center`}> <img src={group_fade} alt="" /> Project Participants</div>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input type='number'/>
                        </div>
                    </div>
            </div>
            <div className="px-20 flex w-full py-10  justify-between items-center border border-borderGray shadow">
                <div className="font-semibold text-recruitBlue cursor-pointer flex items-center gap-10" onClick={()=>navigate(-1)}><i className="fa-solid fa-arrow-left"></i>Go Back</div>
                <button className={`py-10 px-30 bg-recruitBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-16 flex gap-10`} onClick={()=> setStep(step + 1)}>Continue <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="h-[100px] w-full bg-inherit"></div>
        </div>
  )
}

export default ProjectDetails