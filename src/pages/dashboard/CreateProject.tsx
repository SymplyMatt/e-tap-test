import Input from '../../components/common/Input'
import circle_check from '../../assets/images/circle_check.svg'
import Dashboard from './Dashboard'
import Textarea from '../../components/common/Textarea'
const CreateProject = () => {
  return (
    <Dashboard>
        <div className="text-20 font-medium grid grid-cols-7 w-full justify-center items-center h-[90px] items-center px-[20%] border-b border-borderGray"> 
            <div className="col-span-1 flex flex-col items-center justify-center h-full gap-5 py-10">
                <div className="h-40 w-40 rounded-50 bg-white border-2 border-lightBlue text-lightBlue flex items-center justify-center text-20">1</div>
                <div className="flex justify-center text-center text-14 text-lightBlue whitespace-nowrap">Project Details</div>
            </div>
            <div className="col-span-1 w-full h-5 bg-borderGray"></div>
            <div className="col-span-1 flex flex-col items-center justify-center h-full gap-5 py-10">
                <div className="h-40 w-40 rounded-50 bg-white border-2 border-borderGray text-borderGray flex items-center justify-center text-20">2</div>
                <div className="flex justify-center text-center text-14 text-borderGray whitespace-nowrap">Required Form fields</div>
            </div>
            <div className="col-span-1 w-full h-5 bg-borderGray"></div>
            <div className="col-span-1 flex flex-col items-center justify-center h-full gap-5 py-10">
                <div className="h-40 w-40 rounded-50 bg-white border-2 border-borderGray text-borderGray flex items-center justify-center text-20">3</div>
                <div className="flex justify-center text-center text-14 text-borderGray whitespace-nowrap">Form Settings</div>
            </div>
            <div className="col-span-1 w-full h-5 bg-borderGray"></div>
            <div className="col-span-1 flex flex-col items-center justify-center h-full gap-5 py-10">
                <div className="h-40 w-40 rounded-50 bg-white border-2 border-borderGray text-borderGray flex items-center justify-center text-20">4</div>
                <div className="flex justify-center text-center text-14 text-borderGray whitespace-nowrap">Publish & Share link</div>
            </div>
        </div>
        <div className="my-20 py-20 create-project flex flex-col w-full gap-20">
            <div className="flex flex-col w-[40%] items-center m-auto gap-16">
                <div className="w-full flex flex-col relative">
                    <Input updateFunction={()=>{}} label="Email"/>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-10 z-0 bg-dashboardColor"><img src={circle_check} alt="" className='h-20 w-20 z-10'/></div>
                </div>
                <Textarea updateFunction={()=>{}} label="Add description" placeholder='Add description'/>
                <div className="flex flex-col gap-10 items-center">
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <Input updateFunction={()=>{}} label="Start date" type='date'/>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input updateFunction={()=>{}} label="Time" type='time'/>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 justify-center w-full gap-10">
                        <div className="col-span-2 flex items-center">
                            <Input updateFunction={()=>{}} label="Start date" type='date'/>
                        </div>
                        <div className="col-span-1 flex items-center">
                            <Input updateFunction={()=>{}} label="Time" type='time'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-20 flex w-full py-10  justify-between items-center border border-borderGray">
                <div className="font-semibold text-recruitBlue cursor-pointer flex items-center gap-10"><i className="fa-solid fa-arrow-left"></i>Go Back</div>
                <button className={`py-10 px-30 bg-recruitBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-16 flex gap-10`}>Continue <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="h-[100px] w-full bg-inherit"></div>
        </div>
    </Dashboard>
  )
}

export default CreateProject