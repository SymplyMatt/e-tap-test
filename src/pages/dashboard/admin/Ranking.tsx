import Dashboard from '../Dashboard';
import projects_icon from "../../../assets/images/projects.svg";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Subject, Topic } from '../../../utils/interfaces';
import utils from '../../../utils/utils';

const Ranking = () => {
    const [subjectInfo, setSubjectInfo] = useState<Subject | null>(null);
    const [studentsEnrolled, setStudentsEnrolled] = useState<any[]>([]);
    const location = useLocation();

    useEffect(() => {
        if (location.state.subject) {
            setSubjectInfo(location.state.subject);
        }
        if (location.state.studentsEnrolled) {
            setStudentsEnrolled(location.state.studentsEnrolled);
        }
    }, [location.state.subject, location.state.studentsEnrolled]);

    return (
        <Dashboard>
            <div className="text-20 font-medium flex flex-col gap-5 w-full justify-start h-[90px] px-20">
                <div className="h-[25px] w-full"></div>
                <div className="flex h-[65px] items-center">
                    <img src={projects_icon} alt="" className="h-35" />
                    <div className="">{utils.capitalizeEachWord(subjectInfo?.name || '')}</div>
                </div>
            </div>
            <div className="w-full flex flex-col px-20 my-50 gap-50 create-project">
                {subjectInfo?.topics.map((topic: Topic) => {
                    const studentsWithLessons = studentsEnrolled.filter((student: any) =>
                        student.lessons.some((lesson: any) => lesson.topicId === topic.id)
                    );
                    const sortedStudents = studentsWithLessons.sort((a: any, b: any) => {
                        const lessonA = a.lessons.find((lesson: any) => lesson.topicId === topic.id);
                        const lessonB = b.lessons.find((lesson: any) => lesson.topicId === topic.id);
                        const progressA = lessonA?.progress || 0;
                        const progressB = lessonB?.progress || 0;
                        return progressB- progressA;
                    });

                    return (
                        <div key={topic.id} className="w-full flex flex-col gap-5">
                            <h3 className="text-20 font-medium">{topic.name}</h3>
                            <table className='w-full'>
                                <thead>
                                    <tr className='border-b border-borderGray'>
                                        <th className='text-left py-16'>Name</th>
                                        <th className='text-left py-16'>Email Address</th>
                                        <th className='text-left py-16'>Status</th>
                                        <th className='text-left py-16'>Video Playback Position</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedStudents.map((student: any) => {
                                        const lesson = student.lessons.find((lesson: any) => lesson.topicId === topic.id);
                                        if (!lesson) return null;
                                        return (
                                            <tr key={student.studentId} className='border-b border-borderGray'>
                                                <td className='text-left py-16 font-normal'>{utils.capitalizeEachWord(student.studentName)}</td>
                                                <td className='text-left py-16 font-normal'>{student.studentEmail}</td>
                                                <td className='text-left py-16 font-normal'>{(!lesson.status || lesson.status === 'not-started') ? 'Not Enrolled' : lesson.status === 'completed' ? 'Completed' : 'In Progress'}</td>
                                                <td className='text-left py-16 font-normal'>
                                                    {lesson.progress ? (Math.floor((lesson.progress / lesson.duration) * 100) + '%,') : ''} {lesson.progress ? utils.formatTimeToLongString(lesson.progress) : 'Not played'}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </div>
        </Dashboard>
    );
}

export default Ranking;
