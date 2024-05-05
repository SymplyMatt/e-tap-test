import Input from '../../common/Input'
import Textarea from '../../common/Textarea'
import circle_check from '../../../assets/images/circle_check.svg'
import calendar from '../../../assets/images/calendar.svg'
import group from '../../../assets/images/group.svg'
import Select from '../../common/Select'

interface ComponentProps {
    step: number
    setStep: Function
}
const Publish : React.FC<ComponentProps> =  () => {
  return (
        <div className="my-20 py-20 create-project flex flex-col w-full gap-20">
            <div className="flex flex-col w-[40%] items-center m-auto gap-16 mb-[100px]">
                <div className="w-full flex flex-col relative">
                    <Input label="Project name" value='project name'/>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-10 z-0 bg-dashboardColor"><img src={circle_check} alt="" className='h-20 w-20 z-10'/></div>
                </div>
                <Textarea value='Project description' />
                <div className="flex flex-col gap-20 items-center">
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <Input label="Start date" value='Sat, 16 March' icon={calendar}/>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input label="Time" value='16:40'/>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <Input label="Start date" value='Sat, 16 March' icon={calendar}/>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input label="Time" value='16:40'/>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <Select value='Team Slots' icon={group}/>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input value=' '/>
                        </div>
                    </div>
                </div>
                <button className={`py-12 px-24 bg-recruitBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-16 flex gap-10 w-[200px] mt-20`}>Publish</button>
            </div>

            <div className="h-[100px] w-full bg-inherit"></div>
        </div>
  )
}

export default Publish