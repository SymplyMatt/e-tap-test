import Input from '../../../common/Input'
import Textarea from '../../../common/Textarea'
import circle_check from '../../../../assets/images/circle_check.svg'
import calendar_fade from '../../../../assets/images/calendar_fade.svg'
import calendar from '../../../../assets/images/calendar.svg'
import group_fade from '../../../../assets/images/group_fade.svg' 
import group from '../../../../assets/images/group.svg' 
import { useNavigate } from 'react-router-dom'
import { inputs } from '../../../../pages/dashboard/CreateProject'
import { useEffect, useState } from 'react'
import utils from '../../../../utils/utils'

interface ComponentProps {
    step: number;
    setStep: Function;
    updateValue: Function;
    inputValues: inputs;
}
const ProjectDetails : React.FC<ComponentProps> =  ({step,setStep,updateValue, inputValues}) => {
    const navigate = useNavigate();
    const [startDate, setStartDate]=useState<string>('');
    const [startTime, setStartTime]=useState<string>('');
    const [endDate, setEndDate]=useState<string>('');
    const [endTime, setEndTime]=useState<string>('');
    const [disabled, setDisabled] = useState(false);
    useEffect(()=>{
        startDate && startTime && updateValue('startDate', utils.combineDateAndTime(startDate,startTime));
    },[startDate,startTime]);
    useEffect(()=>{
        endDate && endTime && updateValue('endDate', utils.combineDateAndTime(endDate,endTime));
    },[endDate,endTime]);
    useEffect(()=>{
        setDisabled(!(inputValues.description && inputValues.name && inputValues.startDate && inputValues.endDate && inputValues.noOfParticipants));
    },[inputValues]);
  return (
        <div className="my-20 py-20 create-project flex flex-col w-full gap-20">
            <div className="flex flex-col w-[40%] items-center m-auto gap-16">
                <div className="w-full flex flex-col relative">
                    <Input updateFunction={(e)=>updateValue('name', e)} label="Project name" inFocus={true} value={inputValues.name}/>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-10 z-0 bg-dashboardColor"><img src={circle_check} alt="" className='h-20 w-20 z-10'/></div>
                </div>
                <Textarea updateFunction={(e)=>updateValue('description', e)} label="Add description" placeholder='Add description' value={inputValues.description}/>
                <div className="flex flex-col gap-20 items-center w-full">
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <Input updateFunction={(e)=>setStartDate(e)} label="Start date" type='date' icon={startDate || inputValues.startDate ? calendar : calendar_fade} value={inputValues.startDate ? utils.formatDateToDateString(inputValues.startDate) : ''}/>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input updateFunction={(e)=>setStartTime(e)} label="Time" type='time' value={inputValues.startDate ? utils.formatTimeToTimeString(inputValues.startDate) : ''}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <Input updateFunction={(e)=>setEndDate(e)} label="End date" type='date' icon={endDate || inputValues.endDate ? calendar : calendar_fade} value={inputValues.endDate ? utils.formatDateToDateString(inputValues.endDate) : ''}/>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input updateFunction={(e)=>setEndTime(e)} label="Time" type='time' value={inputValues.endDate ? utils.formatTimeToTimeString(inputValues.endDate) : ''}/>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <div className={`flex gap-10 h-[45px] p-10 border border-solid bg-inherit rounded-8 w-full  text-14 flex items-center ${inputValues.noOfParticipants ? 'text-black border-inputBorderActive' : 'border-gray-borderGray text-lightBlack'}`}> <img src={inputValues.noOfParticipants ? group : group_fade} alt="" /> Project Participants</div>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input type='number' updateFunction={(e)=>updateValue('noOfParticipants',  Number(e))} value={String(inputValues.noOfParticipants || '')}/>
                        </div>
                    </div>
            </div>
            <div className="px-20 flex w-full py-10  justify-between items-center border border-borderGray shadow">
                <div className="font-semibold text-recruitBlue cursor-pointer flex items-center gap-10" onClick={()=>navigate(-1)}><i className="fa-solid fa-arrow-left"></i>Go Back</div>
                <button className={`py-10 px-30 bg-recruitBlue text-white h-[45px] flex items-center justify-center rounded-16 flex gap-10 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={()=> setStep(step + 1)} disabled={disabled}>Continue <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="h-[100px] w-full bg-inherit"></div>
        </div>
  )
}

export default ProjectDetails