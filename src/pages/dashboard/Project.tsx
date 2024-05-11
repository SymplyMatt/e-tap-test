import Dashboard from './Dashboard'
import edit from '../../assets/images/edit.svg'
import ProjectOverview from '../../components/dashboard/projects/ProjectOverview'
import { useState } from 'react'
import TeamMembers from '../../components/dashboard/projects/TeamMembers'
import Attendance from '../../components/dashboard/projects/Attendance'
import AttendanceHistory from '../../components/dashboard/projects/AttendanceHistory'
import AttendanceDetails from '../../components/dashboard/projects/AttendanceDetails'
import Button from '../../components/common/Button'


const Project = () => {
  const [currentTab, setCurrentTab] = useState('overview');
  return (
    <Dashboard background={'white'}>
      
      <div className="text-20 font-medium flex flex-col gap-5 w-full justify-start cursor-pointer h-[90px] px-20"> 
        <div className="h-[25px] w-full"></div>
        <div className="flex w-full justify-between items-center h-[65px]">
          <div className="flex items-center">
            <div className="">Project Name</div> 
          </div>
          {currentTab == 'overview' && <button className={`whitespace-nowrap py-10 px-30 bg-lightBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-12 flex gap-10`}> <img src={edit} alt="" /> Edit</button>}
        </div>
      </div>
      <div className="w-full flex flex-col gap-20 create-project pt-20">
        <div className="flex flex-col px-20 gap-20 mb-[100px]">
          <div className="flex  gap-40 border-b border-borderGray w-full justify-between">
            <div className="flex items-center gap-40">
                <div className={`py-10  ${currentTab == 'overview' ? 'border-b-2 border-recruitBlue text-recruitBlue' : 'text-lightBlack'} w-fit-content flex items-center gap-10 cursor-pointer`} onClick={()=> setCurrentTab('overview')}>Overview</div>
                <div className={`py-10  ${currentTab == 'team' ? 'border-b-2 border-recruitBlue text-recruitBlue' : 'text-lightBlack'} w-fit-content flex items-center gap-10 cursor-pointer`}  onClick={()=> setCurrentTab('team')}>Team members</div>
                <div className={`py-10  ${currentTab.includes('attendance') ? 'border-b-2 border-recruitBlue text-recruitBlue' : 'text-lightBlack'} w-fit-content flex items-center gap-10 cursor-pointer`}  onClick={()=> setCurrentTab('attendance')}>Attendance</div>
                <div className={`py-10  ${currentTab == 'settings' ? 'border-b-2 border-recruitBlue text-recruitBlue' : 'text-lightBlack'} w-fit-content flex items-center gap-10 cursor-pointer`}  onClick={()=> setCurrentTab('settings')}>Settings</div>
            </div>
            <Button label="+  &nbsp;Create Attendance" onClick={()=>setCurrentTab('attendance')} extraClass="bg-recruitBlue relative top-[-10px]"/>
          </div>
          {currentTab == 'overview' && <ProjectOverview />}
          {currentTab == 'team' && <TeamMembers />}
          {currentTab == 'attendance' && <Attendance setCurrentTab={setCurrentTab} />}
          {currentTab == 'attendance-history' && <AttendanceHistory setCurrentTab={setCurrentTab}/>}
          {currentTab == 'attendance-details' && <AttendanceDetails/>}
        </div>
      </div>
    </Dashboard>
  )
}

export default Project