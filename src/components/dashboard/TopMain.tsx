import { useContext, useEffect, useRef, useState } from "react";
import bell from "../../assets/images/bell.svg"
import { Context } from "../../context/DashboardContext";
import utils from "../../utils/utils";
const TopMain = () => {
  const { user} = useContext(Context);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showRoleDropDown, setShowRoleDropDown] = useState<boolean>(false);
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowRoleDropDown(false);
    }
  };

  useEffect(() => {
    if (showRoleDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showRoleDropDown]);

  return (
    <div className="h-60 flex items-center px-20 w-full justify-between border-b border-borderGray">
      <div className="flex flex-col items-center h-[45px]" ref={dropdownRef}>
        <div className="border border-borderGray px-16 py-10 rounded-8 flex gap-10 items-center cursor-pointer font-semibold h-full" onClick={() => setShowRoleDropDown(!showRoleDropDown)}>{utils.camelCaseToFirstLast(user?.role || '')} <i className="fa-solid fa-caret-down"></i></div>
        {showRoleDropDown && (
        <div className="overflow-visible bg-white flex flex-col border border-borderGray z-10 shadow w-full items-center justify-center rounded-8 mt-10 dropdown-menu">
          <div className="p-10 hover:bg-borderGray w-full flex items-center justify-center cursor-pointer">
            Last 24 hours
          </div>
          <div className="p-10 hover:bg-borderGray w-full flex items-center justify-center cursor-pointer">
            Last 7 days
          </div>
          <div className="p-10 hover:bg-borderGray w-full flex items-center justify-center cursor-pointer">
            One month
          </div>
          <div className="p-10 hover:bg-borderGray w-full flex items-center justify-center cursor-pointer">
            One year
          </div>
        </div>
      )}
      </div>
        <div className="flex items-center justify-center gap-20">
            <div className="cursor-pointer"><img src={bell} alt="" /></div>
            <div className="flex items-center justify-center gap-10">
                <div className="h-30 w-30 bg-recruitBlue font-semibold rounded-50 text-white flex justify-center items-center cursor-pointer">{user?.fullName.substring(0,1)}</div>
                <div className="flex items-center justify-center gap-10 cursor-pointer">{user?.fullName} <i className="fa-solid fa-caret-down"></i></div>
            </div>
        </div>
    </div>
  )
}

export default TopMain