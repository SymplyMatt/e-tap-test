import Dashboard from './Dashboard'
import projects_icon from "../../assets/images/projects.svg"
import search_icon from "../../assets/images/search.svg"
import { useEffect, useState } from 'react'
import axiosRequest from '../../services/axios'
import Skeleton from '../../components/dashboard/projects/Skeleton'
import SubjectItem from '../../components/dashboard/projects/details/SubjectItem'
import DateFilterDropdown from '../../components/dashboard/projects/DateFilterDropdown'
import LessonStates from './LessonStates'
import { Project, Subject } from '../../utils/interfaces'
import utils, { states } from '../../utils/utils'

const Lessons = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [search, setSearch] = useState<string>('');
  useEffect(()=>{
    async function getAllProjects() {
      try {
        setLoadingProjects(true);
        const res: any = await axiosRequest('GET', `/subjects`);
        console.log('res: ', res.data.subjects)
        if(res.status === 200){
          setSubjects(res.data.subjects);
          setLoadingProjects(false);
        }else{
          utils.createErrorNotification('Unable to retrieve subjects', 1000);
        }
      } catch (error) {
        console.log('error: ', error);
      }
    }
    getAllProjects();
  },[]);
  return (
    <Dashboard>
      <div className="text-20 font-medium flex flex-col gap-5 w-full justify-start h-[90px] px-20"> 
        <div className="h-[25px] w-full"></div>
        <div className="flex h-[65px] items-center">
          <img src={projects_icon} alt="" className="h-35"/>    
          <div className="">Subjects</div> 
        </div>
      </div>
      <div className="w-full flex flex-col gap-20 create-project">
        <div className="flex w-full justify-between items-center px-20">
          <div className="flex items-center gap-10">
            <div className="border border-borderGray px-16 py-10 rounded-8 flex gap-10 items-center cursor-pointer font-normal bg-white"><img src={search_icon } alt=""/> <input type="text" placeholder='Search project' className={`outline-none border-none bg-inherit ${search ? 'text-black' : 'text-borderGray'}  cursor-pointer`} value={search} onChange={(e)=>setSearch(e.currentTarget.value)}/></div>
          </div>
          <div className="flex items-center gap-10">
            <DateFilterDropdown projects={projects} setProjects={setProjects}/>
          </div>
        </div>
        {!loadingProjects && subjects.length > 0 && <div className="flex flex-col px-20 gap-30 mb-[100px]">
          <LessonStates states={states}/>
          <div className="flex flex-col w-full gap-20">
            {subjects.filter(i=>i.topics.length).map((subject : any, index : number )=>(
              <SubjectItem key={index} subject={subject} index={index}/>
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

export default Lessons