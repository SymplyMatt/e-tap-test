import Dashboard from './Dashboard'
import edit from '../../assets/images/edit.svg'
import { useNavigate } from 'react-router-dom'
import ProjectOverview from '../../components/dashboard/projects/ProjectOverview'
import { useState } from 'react'
import TeamMembers from '../../components/dashboard/projects/TeamMembers'
import Attendance from '../../components/dashboard/projects/Attendance'


const Project = () => {
  const navigate = useNavigate(); 
  const [currentTab, setCurrentTab] = useState('overview');
  return (
    <Dashboard background={'white'}>
      
      <div className="text-20 font-medium flex flex-col gap-5 w-full justify-start cursor-pointer h-[90px] px-20"> 
        <div className="h-[25px] w-full"></div>
        <div className="flex w-full justify-between items-center h-[65px]">
          <div className="flex items-center">
            <div className="">Project Name</div> 
          </div>
          <button className={`whitespace-nowrap py-10 px-30 bg-lightBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-12 flex gap-10`}> <img src={edit} alt="" /> Edit</button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-20 create-project pt-20">
        <div className="flex flex-col px-20 gap-20 mb-[100px]">
          <div className="flex flex gap-40 border-b border-borderGray w-full">
            <div className={`py-10  ${currentTab == 'overview' ? 'border-b-2 border-recruitBlue text-recruitBlue' : 'text-lightBlack'} w-fit-content flex items-center gap-10 cursor-pointer`} onClick={()=> setCurrentTab('overview')}>Overview</div>
            <div className={`py-10  ${currentTab == 'team' ? 'border-b-2 border-recruitBlue text-recruitBlue' : 'text-lightBlack'} w-fit-content flex items-center gap-10 cursor-pointer`}  onClick={()=> setCurrentTab('team')}>Team members</div>
            <div className={`py-10  ${currentTab == 'attendance' ? 'border-b-2 border-recruitBlue text-recruitBlue' : 'text-lightBlack'} w-fit-content flex items-center gap-10 cursor-pointer`}  onClick={()=> setCurrentTab('attendance')}>Attendance</div>
            <div className={`py-10  ${currentTab == 'settings' ? 'border-b-2 border-recruitBlue text-recruitBlue' : 'text-lightBlack'} w-fit-content flex items-center gap-10 cursor-pointer`}  onClick={()=> setCurrentTab('settings')}>Settings</div>
          </div>
          {currentTab == 'overview' && <ProjectOverview />}
          {currentTab == 'team' && <TeamMembers />}
          {currentTab == 'attendance' && <Attendance />}
        </div>
      </div>
    </Dashboard>
  )
}

export default Project