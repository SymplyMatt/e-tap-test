import { useNavigate } from 'react-router-dom';
import utils from '../../../../utils/utils';
import { SubjectItemProps } from '../../../../utils/interfaces';
import { useContext, useEffect, useState } from 'react';
import makeRequest from '../../../../services/axios';
import { Context } from '../../../../context/DashboardContext';
const SubjectItemAdmin: React.FC<SubjectItemProps> = ({ subject }) => {
    const { userDetails } = useContext(Context);
    const navigate = useNavigate();
    const totalDuration = subject.topics.map(i => i.duration).reduce((acc, curr) => acc + curr, 0);
    const [studentsEnrolled, setStudentsEnrolled] = useState<any[] | null>(null);
    useEffect(()=>{
        async function getStudents(){
            const res: any = await makeRequest('GET', `/lessons/get/subject?subjectId=${subject.id}`,userDetails?.token);
            if(res.status === 200){
                const studentsEnrolled: any[] = res.data.results.filter((student: any) => 
                    student.lessons.some((lesson:any) => lesson.createdAt !== null)
                );
                setStudentsEnrolled(studentsEnrolled);
            }
        }
        getStudents();
    },[]);

    return (
        <>
            <div className={`bg-white flex flex-col py-20 gap-20 rounded-12`}>
                <div className="flex grid-cols-2 gap-20 items-end">
                    <img src={subject.banner} alt="" className="w-[180px] h-[180px] rounded-50 object-cover" />
                    <div className="flex gap-10 justify-between align-center h-full w-full">
                        <div className="flex flex-col gap-10 h-full justify-between">
                            <div className="flex items-center text-24 font-semibold">
                                {utils.capitalizeEachWord(subject.name)}
                            </div>
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-16 h-full justify-between text-recruitBlue font-semibold">
                                    <div>Topics:</div>
                                    <div>Duration:</div>
                                </div>
                                <div className="flex flex-col gap-10 h-full justify-between whitespace-nowrap ml-20">
                                    <div className="whitespace-nowrap">
                                        {subject.topics.length}
                                    </div>
                                    <div className="whitespace-nowrap">
                                        {utils.formatTimeToLongString(totalDuration)}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center text-14 text-recruitBlue gap-10">
                                {studentsEnrolled?.length || 0} students enrolled
                            </div>
                        </div>
                        <div className="flex gap-20 items-center">
                            <div
                                className="flex items-center justify-center w-[180px] border-[1.4px] border-recruitBlue p-5 h-[40px] rounded-8 gap-10 cursor-pointer"
                                onClick={() => navigate(`/admin/ranking/${subject.id}`, { state: { subject, studentsEnrolled } })}
                            >
                                View Ranking <i className="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SubjectItemAdmin;
