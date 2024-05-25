import projects from "../../assets/images/projects.svg"
import Button from '../common/Button'
import staff from "../../assets/images/staff.svg"
import company from "../../assets/images/company.svg"
import settings from "../../assets/images/settings.svg"
import { useNavigate } from "react-router-dom"
const Sidebar = () => {
    const navigate = useNavigate(); 
  return (
        <div className="h-screen col-span-2 border border-borderGray flex flex-col items-center overflow-hidden">
            <div className="flex flex-col gap-20 w-full h-100 items-center justify-between">
                <div className="font-inter font-semibold cursor-pointer py-10 px-40 text-24 h-60 flex items-center justify-center w-full" onClick={()=>navigate('/')}>LOGO</div>
                <div className="w-full p-10">
                </div>
            </div>
            <div className="flex flex-col items-center w-full px-10 gap-20">
                <div className="border-t border-borderGray w-full px-10 py-20 flex flex-col items-center gap-20">
                    <div className="text-base font-medium flex gap-10 w-full justify-start cursor-pointer" onClick={()=> navigate('/projects')}> <img src={projects} alt="" /> <div className="">Projects</div> </div>
                    <div className="text-base font-medium flex gap-10 w-full justify-start cursor-pointer"> <img src={staff} alt="" />Staff Members</div>
                    <div className="text-base font-medium flex gap-10 w-full justify-start cursor-pointer"> <img src={company} alt="" />Company Profile</div>
                </div>
                <div className="border-t border-borderGray w-full px-10 py-20 flex flex-col items-center gap-20">
                    <div className="text-base font-medium flex gap-10 w-full justify-start cursor-pointer"> <img src={settings} alt="" /> <div className="">Settings</div> </div>
                </div>
            </div>
        </div>
  )
}

export default Sidebar