import Input from '../../../common/Input'
import Textarea from '../../../common/Textarea'
import circle_check from '../../../../assets/images/circle_check.svg'
import calendar from '../../../../assets/images/calendar.svg'
import group from '../../../../assets/images/group.svg'
import { inputs } from '../../../../pages/dashboard/CreateProject'
import utils from '../../../../utils/utils'

interface ComponentProps {
    step: number;
    setStep: Function;
    inputValues: inputs;
    onSubmit: Function;
    loading: boolean;
}
const Publish : React.FC<ComponentProps> =  ({inputValues, onSubmit, loading}) => {
  return (
        <div className="my-20 py-20 create-project flex flex-col w-full gap-20">
            <div className="flex flex-col w-[40%] items-center m-auto gap-16 mb-[100px]">
                <img src={inputValues.logoUrl} alt="" className='h-[200px] rounded-8 mb-[30px]' />
                <div className="w-full flex flex-col relative">
                    <Input label="Project name" value={inputValues.name}/>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-10 z-0 bg-dashboardColor"><img src={circle_check} alt="" className='h-20 w-20 z-10'/></div>
                </div>
                <Textarea label="Project description" value={inputValues.description} />
                <div className="flex flex-col gap-20 items-center">
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <Input label="Start date" value={inputValues?.startDate ? utils.formatDate(inputValues?.startDate): ''} icon={calendar}/>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input label="Time" value={inputValues.startDate ? utils.formatTime(inputValues?.startDate): ''}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <Input label="End date" value={inputValues.endDate ? utils.formatDate(inputValues?.endDate): ''} icon={calendar}/>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input label="Time" value={inputValues.endDate ? utils.formatTime(inputValues?.endDate): ''}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                        <div className={`h-[45px] p-10 border border-solid bg-inherit rounded-8 w-full border-inputBorderActive text-black text-base flex items-center`}> <img src={group} alt="" /> Project Participants</div>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input value={String(inputValues.noOfParticipants)}/>
                        </div>
                    </div>
                </div>
                <button className={`py-12 px-24 bg-recruitBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-16 flex gap-10 w-[200px] mt-20 ${loading && 'opacity-50'}`} onClick={()=>onSubmit()} disabled={loading}>{!loading ?  'Publish' : <i className="fa-solid fa-spinner spinner"></i>}</button>
            </div>

            <div className="h-[100px] w-full bg-inherit"></div>
        </div>
  )
}

export default Publish