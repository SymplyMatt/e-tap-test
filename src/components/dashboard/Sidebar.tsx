import projects from "../../assets/images/projects.svg"
import { useNavigate } from "react-router-dom"
import { Context } from "../../context/DashboardContext";
import { useContext } from "react";
const Sidebar = () => {
    const navigate = useNavigate(); 
    const { userDetails } = useContext(Context);
  return (
        <div className="h-screen col-span-2 border border-borderGray flex flex-col items-center overflow-hidden">
            <div className="flex flex-col gap-20 w-full h-100 items-center justify-between">
                <div className="font-inter font-semibold cursor-pointer py-10 px-40 text-24 h-60 flex items-center justify-center w-full" onClick={()=>navigate('/')}>LOGO</div>
                <div className="w-full p-10">
                </div>
            </div>
            <div className="flex flex-col items-center w-full px-10 gap-2">
                <div className="border-t border-borderGray w-full px-10 py-10 flex flex-col items-center gap-20">
                    <div className="text-base font-medium flex gap-10 w-full justify-start cursor-pointer" onClick={()=> navigate(userDetails?.role === 'admin' || userDetails?.role === 'teacher' ? '/admin/subjects' : '/subjects')}> <img src={projects} alt="" /> <div className="">Subjects</div> </div>
                </div>
            </div>
        </div>
  )
}

export default Sidebar