import Dashboard from './Dashboard'
import LessonOverview from '../../components/dashboard/projects/details/LessonOverview'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import utils from '../../utils/utils'
import { Topic } from '../../utils/interfaces'

const Lesson = () => {
  const [topicInfo, setTopicInfo] = useState<Topic | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(location.state?.topic){
      setTopicInfo(location.state?.topic);
    }else{
      navigate('/subjects', {replace : true});
    }
  },[]);
  return (
    <Dashboard background={'white'}>
      <div className="text-20 font-medium flex flex-col gap-5 w-full justify-start cursor-pointer h-[90px] px-20"> 
        <div className="h-[25px] w-full"></div>
        <div className="flex w-full justify-between items-center h-[65px]">
          <div className="flex items-center">
            <div className="">{utils.capitalizeEachWord(topicInfo?.name || '') || ''}</div> 
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-20 create-project pt-20">
        <div className="flex flex-col px-20 gap-20 mb-[100px]">
          <div className="flex  gap-40 border-b border-borderGray w-full justify-between"></div>
          {topicInfo && <>
            <LessonOverview topic={topicInfo as Topic}/>
          </>}
        </div>
      </div>
    </Dashboard>
  )
}

export default Lesson