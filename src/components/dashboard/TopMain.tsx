import { useContext, useEffect, useRef, useState } from "react";
import bell from "../../assets/images/bell.svg";
import { Context } from "../../context/DashboardContext";
import utils from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const TopMain = () => {
  const { user, setUser } = useContext(Context);
  const userdropdownRef = useRef<HTMLDivElement>(null);
  const [showUserDropDown, setShowUserDropDown] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleClickOutside = (event: MouseEvent) => {
    if (userdropdownRef.current && !userdropdownRef.current.contains(event.target as Node)) {
      setShowUserDropDown(false);
    }
  };
  useEffect(() => {
    if ( showUserDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserDropDown]);
  const logout = () =>{
    localStorage.clear();
    setUser(null);
    navigate('/auth/signin');
  }
  return (
    <div className="h-60 flex items-center px-20 w-full justify-between border-b border-borderGray">
      <div className="flex flex-col items-center h-[45px]">
        <div
          className="border border-borderGray px-16 py-10 rounded-8 flex gap-10 items-center cursor-pointer font-semibold h-full">
          {utils.camelCaseToFirstLast(user?.role || "")}
        </div>
      </div>
      <div className="flex items-center justify-center gap-20 h-full">
        <div className="cursor-pointer">
          <img src={bell} alt="" />
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="h-30 w-30 bg-recruitBlue font-semibold rounded-50 text-white flex justify-center items-center cursor-pointer">
            {user?.fullName.substring(0, 1)}
          </div>
          <div className="flex flex-col items-center h-[45px] relative" ref={userdropdownRef}>
            <div
              className="flex items-center justify-center gap-10 cursor-pointer h-full"
              onClick={() => setShowUserDropDown(!showUserDropDown)}
            >
              {user?.fullName} <i className={`fa-solid ${showUserDropDown ? "fa-caret-up" : "fa-caret-down"}`}></i>
            </div>
            {showUserDropDown && (
              <div className="overflow-visible bg-white flex flex-col border border-borderGray z-10 shadow w-full items-center justify-center rounded-8 dropdown-menu absolute top-[60px]">
                <div className="p-10 hover:bg-borderGray w-full flex items-center justify-center cursor-pointer">
                  Settings
                </div>
                <div className="p-10 hover:bg-borderGray w-full flex items-center justify-center cursor-pointer" onClick={()=>logout()}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMain;
