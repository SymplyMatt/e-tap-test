import Input from '../../../common/Input'
import circle_check from '../../../../assets/images/circle_check.svg'
import barcode from '../../../../assets/images/barcode.svg'
interface DashboardLayoutProps {
    setCurrentTab: Function;
}
const Attendance: React.FC<DashboardLayoutProps> = ({setCurrentTab}) => {
  return (
    <div className="my-20 py-20 create-project flex flex-col w-full gap-20">
        <div className="flex flex-col w-[40%] items-center m-auto gap-16">
            <div className="w-full flex flex-col relative">
                <Input updateFunction={()=>{}} label="Attendance name" inFocus={true}/>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-10 z-0 bg-dashboardColor"><img src={circle_check} alt="" className='h-20 w-20 z-10'/></div>
            </div>
            <div className="flex flex-col gap-10 items-center">
                <div className="grid grid-cols-3 justify-center w-full gap-10">
                    <div className="col-span-1 flex items-center">
                        <Input updateFunction={()=>{}} label="Start Duration"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full">
            <div className="flex w-full py-10  justify-between items-center border-t border-borderGray shadow">
                <div className="font-semibold text-recruitBlue cursor-pointer flex items-center gap-10"><i className="fa-solid fa-arrow-left"></i>Go Back</div>
                <button className={`py-10 px-30 bg-recruitBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-16 flex gap-10`} onClick={()=>setCurrentTab('attendance-history')}>Continue <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="bg-white flex flex-col px-10 py-10 gap-20 w-full rounded-12">
                <div className="flex grid-cols-2 gap-20 items-end">
                    <img src={barcode} alt="" className='w-[180px] h-[180px]'/>
                    <div className="flex flex-col gap-10 justify-end w-full">
                        <div className="text-24 font-semibold">Share Link</div>
                        <div className="text-14 text-[#555555]">Your form is now published and ready to be shared with your team members! Copy  this link to share your form on social media, messaging apps or via  email.</div>
                        <div className=""></div>
                        <div className="flex gap-10 items-center">
                            <Input value='https://brand.com/r/mDN5Qj'/>
                            <button className={`whitespace-nowrap py-10 px-30 bg-recruitBlue text-white h-[38px] flex items-center justify-center cursor-pointer rounded-12 flex gap-10`}><i className="fa-regular fa-copy"></i> Copy link</button>
                        </div>
                    </div>
                </div>
                <div className="flex grid-cols-2 gap-20 items-end">
                    <div className="flex items-center justify-center w-[180px] border border-borderGray p-5 h-[40px] rounded-8 gap-10 cursor-pointer"><i className="fa-regular fa-share-from-square"></i> Share barcode</div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Attendance