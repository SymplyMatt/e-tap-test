import { useLocation, useNavigate } from 'react-router-dom';
import project_line from '../../../../assets/images/project_line.svg';
import utils from '../../../../utils/utils';
import { SubjectItemProps } from '../../../../utils/interfaces';
import { useEffect, useMemo, useState } from 'react';
import makeRequest from '../../../../services/axios';

const LessonItem: React.FC<SubjectItemProps> = ({ subject }) => {
    const navigate = useNavigate();
    const totalDuration = subject.topics.map(i => i.duration).reduce((acc, curr) => acc + curr, 0);
    const [userProgress, setUserProgress] = useState<number | null>(null);
    const location = useLocation();
    const [status, setStatus] = useState<string | null>(null);
    const stateParam = useMemo(() => {
        const params = new URLSearchParams(location.search);
        return params.get('state');
    }, [location.search]);

    useEffect(() => {
        async function getLessonProgress() {
            const res: any = await makeRequest('GET', `/lessons/get/subject/user?subjectId=${subject.id}`);
            if (res.status === 200) {                
                const uniqueLessons: any[] = res.data.lessons.reduce((acc: any[], lesson: any) => {
                    if (!acc.some((l) => l.topic === lesson.topic)) {
                        acc.push(lesson);
                    }
                    return acc;
                }, []);
                const totalProgress = uniqueLessons.map((lesson: any) => lesson.status === 'completed' ? (subject.topics.find(i=>i.id === lesson.topic)?.duration || 0) : lesson.progress).reduce((acc: number, curr: number) => acc + curr, 0);
                setUserProgress(totalProgress);
                setStatus(uniqueLessons.length ===  0 ? 'not-started' : uniqueLessons.every(i=>i.status === 'completed') ? 'completed' : uniqueLessons.some(i=>i.status === 'in-progress') ? 'in-progress' : 'not-started')
            } else {
                setUserProgress(0);
            }
        }
        getLessonProgress();
    }, [subject.id]);

    const shouldShowComponent = () => {
        if (!stateParam) return true; 

        switch (stateParam) {
            case 'Completed':
                return userProgress === totalDuration;
            case 'In Progress':
                return !!userProgress && userProgress !== totalDuration;
            case 'Not Started':
                return !userProgress;
            case 'All':
                return true;
            default:
                return false;
        }
    };

    return (
        <>
            {userProgress !== null && shouldShowComponent() && (
                <div className={`bg-white flex flex-col py-20 gap-20 rounded-12`}>
                    <div className="flex grid-cols-2 gap-20 items-end">
                        <img src={subject.banner} alt="" className="w-[180px] h-[180px] rounded-50 object-cover" />
                        <div className="flex gap-10 justify-between align-center h-full w-full">
                            <div className="flex flex-col gap-10 h-full justify-between">
                                <div className={`flex items-center text-14 font-semibold justify-center h-[25px] w-fit-content p-[6px] rounded-5
                                    ${status === 'completed'
                                        ? 'bg-activeBg text-activeText'
                                        : status === 'in-progress'
                                            ? 'bg-yellow-500 text-yellow-900'
                                            : 'bg-red-400 text-red-900'
                                    }`}
                                >
                                    {status === 'completed' ? 'Completed' : status === 'in-progress' ? 'In Progress' : 'Not Started'}
                                </div>
                                <div className="flex items-center text-24 font-semibold">
                                    {utils.capitalizeEachWord(subject.name)}
                                </div>
                                <div className="flex gap-10 h-full">
                                    <div className="h-full">
                                        <img src={project_line} alt="" className="h-full" />
                                    </div>
                                    <div className="flex flex-col gap-10 h-full justify-between text-recruitBlue font-semibold">
                                        <div>{userProgress === totalDuration ? 'Last memory' :  'Your progress'}</div>
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
                                    {subject.topics.length} Topic{subject.topics.length > 1  && 's'}
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
                </div>
            )}
        </>
    );
};

export default LessonItem;
