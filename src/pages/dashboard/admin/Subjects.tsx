import Dashboard from '../Dashboard'
import projects_icon from "../../../assets/images/projects.svg"
import { useEffect, useState } from 'react'
import axiosRequest from '../../../services/axios'
import Skeleton from '../../../components/dashboard/projects/Skeleton'
import SubjectItemAdmin from '../../../components/dashboard/projects/details/SubjectItemAdmin'
import { Subject } from '../../../utils/interfaces'
import utils from '../../../utils/utils'

const Lessons = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  useEffect(()=>{
    async function getAllProjects() {
      try {
        setLoadingProjects(true);
        const res: any = await axiosRequest('GET', `/subjects`);
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
        {!loadingProjects && subjects.length > 0 && <div className="flex flex-col px-20 gap-30 mb-[100px]">
            <div className="flex flex-col w-full gap-20">
            {subjects.filter(i=>i.topics.length).map((subject : any, index : number )=>(
                <SubjectItemAdmin key={index} subject={subject} index={index}/>
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