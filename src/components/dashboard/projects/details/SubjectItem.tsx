import { useNavigate } from 'react-router-dom';
import project_line from '../../../../assets/images/project_line.svg';
import utils, { img } from '../../../../utils/utils';
import { SubjectItemProps } from '../../../../utils/interfaces';
import { useEffect, useState } from 'react';
import makeRequest from '../../../../services/axios';

const LessonItem: React.FC<SubjectItemProps> = ({ subject }) => {
    const navigate = useNavigate();
    const totalDuration = subject.topics.map(i => i.duration).reduce((acc, curr) => acc + curr, 0);
    const [userProgress, setUserProgress] = useState<number | null>(null);
    
    useEffect(()=>{
        async function getLessonProgress(){
            const res:any = await makeRequest('GET',`/lessons/get/subject/user?subjectId=${subject.id}`);
            if(res.status == 200){
                setUserProgress(res.data.lessons.map((i:any) => i.progress).reduce((acc : number, curr:number) => acc + curr, 0));
            }else{
                setUserProgress(0);
            }
        }
        getLessonProgress()
    },[]);

    return (
        <>
            {userProgress !== null && <div className={`bg-white flex flex-col py-20 gap-20 rounded-12`}>
                <div className="flex grid-cols-2 gap-20 items-end">
                    <img src={img} alt="" className="w-[180px] h-[180px] rounded-50 object-cover" />
                    <div className="flex gap-10 justify-between align-center h-full w-full">
                        <div className="flex flex-col gap-10 h-full justify-between">
                            <div className={`flex items-center text-14 font-semibold justify-center h-[25px] w-fit-content p-[6px] rounded-5
                                ${userProgress === totalDuration
                                ? 'bg-activeBg text-activeText'
                                : userProgress
                                ? 'bg-yellow-500 text-yellow-900'
                                : 'bg-red-400 text-red-900'
                                }`}
                            >
                                {userProgress === totalDuration ? 'Completed' : userProgress ? 'In Progress' : 'Not Started'}
                            </div>
                            <div className="flex items-center text-24 font-semibold">
                                {utils.capitalizeEachWord(subject.name)}
                            </div>
                            <div className="flex gap-10 h-full">
                                <div className="h-full">
                                    <img src={project_line} alt="" className="h-full" />
                                </div>
                                <div className="flex flex-col gap-10 h-full justify-between text-recruitBlue font-semibold">
                                    <div>Progress</div>
                                    <div>Complete</div>
                                </div>
                                <div className="flex flex-col gap-10 h-full justify-between whitespace-nowrap ml-20">
                                    <div className="whitespace-nowrap">
                                        {!userProgress ? '0%' : Math.floor((userProgress/totalDuration) * 100) + '%'}, {userProgress}min
                                    </div>
                                    <div className="whitespace-nowrap">
                                        100%, {totalDuration}min
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center text-14 text-recruitBlue gap-10">
                                {subject.topics.length} Topics
                            </div>
                        </div>
                        <div className="flex gap-20 items-center">
                            <div
                                className="flex items-center justify-center w-[180px] border-[1.4px] border-recruitBlue p-5 h-[40px] rounded-8 gap-10 cursor-pointer"
                                onClick={() => navigate(`/subjects/${subject.id}`, { state: { subject } })}
                            >
                                View Topics <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default LessonItem;
