import { useState, useRef, useEffect } from "react";
import calendar_clock from "../../../assets/images/calendar_clock.svg";
import { Project } from "./details/ProjectItem";
import { useLocation, useNavigate } from "react-router-dom";

export interface ComponentProps {
  projects: Project[];
  setProjects: Function;
}

const DateFilterDropdown: React.FC<ComponentProps> = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const addQueryParam = (from: Date) => {
    const to = new Date();
    const params = new URLSearchParams(location.search);

    params.set('from', from.toISOString()); // Use ISO string format for dates
    params.set('to', to.toISOString());

    navigate({
      pathname: location.pathname,
      search: params.toString()
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    if (showDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropDown]);

  const handleDateSelection = (days: number) => {
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - days);
    addQueryParam(fromDate);
    setShowDropDown(false);
  };

  return (
    <div className="flex flex-col items-center h-[45px]" ref={dropdownRef}>
      <div
        className="h-full border border-borderGray px-16 py-10 rounded-8 flex gap-10 items-center cursor-pointer font-semibold flex items-center"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <img src={calendar_clock} alt="" /> Filter by Date
        <i className={`fa-solid ${showDropDown ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
      </div>
      {showDropDown && (
        <div className="overflow-visible bg-white flex flex-col border border-borderGray z-10 shadow w-full items-center justify-center rounded-8 mt-10 dropdown-menu">
          <div
            className="p-10 hover:bg-borderGray w-full flex items-center justify-center cursor-pointer"
            onClick={() => handleDateSelection(1)}
          >
            Last 24 hours
          </div>
          <div
            className="p-10 hover:bg-borderGray w-full flex items-center justify-center cursor-pointer"
            onClick={() => handleDateSelection(7)}
          >
            Last 7 days
          </div>
          <div
            className="p-10 hover:bg-borderGray w-full flex items-center justify-center cursor-pointer"
            onClick={() => handleDateSelection(30)}
          >
            One month
          </div>
          <div
            className="p-10 hover:bg-borderGray w-full flex items-center justify-center cursor-pointer"
            onClick={() => handleDateSelection(365)}
          >
            One year
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilterDropdown;
