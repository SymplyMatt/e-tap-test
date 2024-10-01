import Dashboard from './Dashboard'
import projects_icon from "../../assets/images/projects.svg"
import search_icon from "../../assets/images/search.svg"
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Skeleton from '../../components/dashboard/projects/Skeleton'
import DateFilterDropdown from '../../components/dashboard/projects/DateFilterDropdown'
import ProjectStates from './LessonStates'
import { Project, Subject, Topic } from '../../utils/interfaces'
import TopicItem from '../../components/dashboard/projects/details/TopicItem'
import { states } from '../../utils/utils'

const Topics = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const location = useLocation();
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [search, setSearch] = useState<string>('');
  const [subject, setSubject] = useState<Subject | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  useEffect(()=>{
    if(location.state.subject){
      setSubject(location.state.subject);
      setTopics(location.state.subject.topics);
      setLoadingProjects(false);
    }
  },[]);
  return (
    <Dashboard>
      <div className="text-20 font-medium flex flex-col gap-5 w-full justify-start h-[90px] px-20"> 
        <div className="h-[25px] w-full"></div>
        <div className="flex h-[65px] items-center">
          <img src={projects_icon} alt="" className="h-35"/>    
          <div className="">{subject?.name} Topics</div> 
        </div>
      </div>
      <div className="w-full flex flex-col gap-20 create-project">
        <div className="flex w-full justify-between items-center px-20">
          <div className="flex items-center gap-10">
            <div className="border border-borderGray px-16 py-10 rounded-8 flex gap-10 items-center cursor-pointer font-normal bg-white"><img src={search_icon } alt=""/> <input type="text" placeholder='Search topic' className={`outline-none border-none bg-inherit ${search ? 'text-black' : 'text-borderGray'}  cursor-pointer`} value={search} onChange={(e)=>setSearch(e.currentTarget.value)}/></div>
          </div>
          <div className="flex items-center gap-10">
            <DateFilterDropdown projects={projects} setProjects={setProjects}/>
          </div>
        </div>
        {!loadingProjects && topics.length > 0 && <div className="flex flex-col px-20 gap-30 mb-[100px]">
          <ProjectStates states={states}/>
          <div className="flex flex-col w-full gap-20">
            {topics.map((topics : any, index : number )=>(
              <TopicItem key={index} topic={topics} search={search}/>
            ))}
          </div>
        </div>}
        {loadingProjects && <div className='flex flex-col gap-30'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>}
      </div>
    </Dashboard>
  )
}

export default Topics