import { useLocation, useNavigate } from 'react-router-dom';
import project_line from '../../../../assets/images/project_line.svg';
import utils from '../../../../utils/utils';
import { TopicItemProps } from '../../../../utils/interfaces';
import { useContext, useEffect, useMemo, useState } from 'react';
import makeRequest from '../../../../services/axios';
import { Context } from '../../../../context/DashboardContext';

const TopicItem: React.FC<TopicItemProps> = ({ topic }) => {
    const { userDetails } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const totalDuration = topic.duration;
    const [userProgress, setUserProgress] = useState<number | null>(null);
    const [lesson, setLesson] = useState<any | null>(null);
    
    const stateParam = useMemo(() => {
        const params = new URLSearchParams(location.search);
        return params.get('state');
    }, [location.search]);

    useEffect(() => {
        async function getLessonProgress() {
            const res: any = await makeRequest('GET', `/lessons/get/topic?topicId=${topic.id}`, userDetails?.token);
            if (res.status == 200) {
                setLesson(res.data);
                setUserProgress(res.data.progress);
            } else {
                setLesson(null);
                setUserProgress(0);
            }
        }
        getLessonProgress();
    }, [topic.id]);

    const isVisible = useMemo(() => {
        if (!stateParam || stateParam === 'All') {
            return true;
        }
        if (stateParam === 'Completed') {
            return lesson?.status && lesson.status === 'completed';
        }
        if (stateParam === 'In Progress') {
            return lesson?.status && lesson.status === 'in-progress';
        }
        if (stateParam === 'Not Started') {
            return !userProgress;
        }
        return false;
    }, [stateParam, userProgress, totalDuration]);

    return (
        <>
            {userProgress !== null && isVisible && (
                <div className={`bg-white flex flex-col py-20 gap-20 rounded-12`}>
                    <div className="flex grid-cols-2 gap-20 items-end">
                        <img src={topic.banner} alt="" className="w-[180px] h-[180px] rounded-50 object-cover" />
                        <div className="flex gap-30 justify-between align-center h-full w-full">
                            <div className="flex flex-col gap-10 h-full justify-between">
                                <div className={`flex items-center text-14 font-semibold justify-center h-[25px] w-fit-content p-[6px] rounded-5
                                    ${lesson?.status === 'completed' 
                                        ? 'bg-activeBg text-activeText'
                                        : (userProgress || lesson?.status === 'in-progress')
                                        ? 'bg-yellow-500 text-yellow-900'
                                        : 'bg-red-500 text-red-900'
                                    }`}
                                >
                                    {lesson?.status === 'completed' ? 'Completed' : (userProgress || lesson?.status === 'in-progress') ? 'In Progress' : 'Not Started'}
                                </div>
                                <div className="flex items-center text-24 font-semibold">
                                    {utils.capitalizeEachWord(topic.name)}
                                </div>
                                <div className="flex gap-10 h-full">
                                    <div className="h-full">
                                        <img src={project_line} alt="" className="h-full" />
                                    </div>
                                    <div className="flex flex-col gap-10 h-full justify-between text-recruitBlue font-semibold">
                                        <div>{lesson?.status && lesson.status === 'completed' ? 'Last memory' :  'Your progress'}</div>
                                        <div>Complete</div>
                                    </div>
                                    <div className="flex flex-col gap-10 h-full justify-between whitespace-nowrap ml-20">
                                        <div className="whitespace-nowrap">
                                            {!userProgress ? '0%' : Math.floor((userProgress / totalDuration) * 100) + '%'}, {utils.formatTimeToLongString(userProgress)}
                                        </div>
                                        <div className="whitespace-nowrap">
                                            100%, {utils.formatTimeToLongString(totalDuration)}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center text-14 text-recruitBlue gap-10">
                                    {topic.description.substring(0, 200)}...
                                </div>
                            </div>
                            <div className="flex gap-20 items-center">
                                <div
                                    className="flex items-center justify-center w-[180px] border-[1.4px] border-recruitBlue p-5 h-[40px] rounded-8 gap-10 cursor-pointer"
                                    onClick={() => navigate(`/subjects/topic/${topic.id}`, { state: { topic, lesson } })}
                                >
                                    {userProgress === totalDuration ? 'Rewatch' : userProgress ? 'Continue' : 'Start'} Lesson <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TopicItem;
