import Dashboard from './Dashboard'
import projects from "../../assets/images/projects.svg"
import calendar_clock from "../../assets/images/calendar_clock.svg"
import search from "../../assets/images/search.svg"
import Button from '../../components/common/Button'

const Projects = () => {
  return (
    <Dashboard>
      <div className="text-20 font-medium flex gap-5 w-full justify-start cursor-pointer h-[65px] items-center px-20"> 
        <img src={projects} alt="" className="h-35"/>    
        <div className="">Projects</div> 
      </div>
      <div className="w-full flex flex-col gap-20">
        <div className="flex w-full justify-between items-center px-20">
          <div className="flex items-center gap-10">
            <div className="border border-borderGray px-16 py-10 rounded-8 flex gap-10 items-center cursor-pointer font-normal bg-white"><img src={search } alt=""/> <input type="text" placeholder='Search project' className='outline-none border-none bg-inherit text-borderGray cursor-pointer'/></div>
            <Button label="Search" onClick={()=>{}} extraClass='bg-[#1976D2]'/>
          </div>
          <div className="flex items-center gap-10">
            <div className="border border-borderGray px-16 py-10 rounded-8 flex gap-10 items-center cursor-pointer font-semibold"><img src={calendar_clock} alt=""/> Filter by Date Created</div>
            <Button label="+  &nbsp;Create Project" onClick={()=>{}}/>
          </div>
        </div>
        <div className="flex flex-col gap-20 px-20 font-bold">
          <div className="font-hiragino text-[32px]">Create and manage projects</div>
          <div className="font-normal w-[80%]">Create unlimited projects with link and QR Code invite and keep track of how many team members join them while tracking the length of each project. Also take attendance at your convenience.</div>
          <div className="font-normal">
            <Button label="+  &nbsp;Create Project" onClick={()=>{}}/>
          </div>
        </div>
      </div>
    </Dashboard>
  )
}

export default Projects