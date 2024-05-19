import { useContext } from "react";
import bell from "../../assets/images/bell.svg"
import { Context } from "../../context/DashboardContext";
const TopMain = () => {
  const { user} = useContext(Context);
  return (
    <div className="h-60 flex items-center px-20 w-full justify-between border-b border-borderGray">
        <div className="border border-borderGray px-16 py-10 rounded-8 flex gap-10 items-center cursor-pointer font-semibold">Administrator <i className="fa-solid fa-caret-down"></i></div>
        <div className="flex items-center justify-center gap-20">
            <div className="cursor-pointer"><img src={bell} alt="" /></div>
            <div className="flex items-center justify-center gap-10">
                <div className="h-30 w-30 bg-recruitBlue font-semibold rounded-50 text-white flex justify-center items-center cursor-pointer">M</div>
                <div className="flex items-center justify-center gap-10 cursor-pointer">{user?.fullName} <i className="fa-solid fa-caret-down"></i></div>
            </div>
        </div>
    </div>
  )
}

export default TopMain