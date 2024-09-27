import { useNavigate } from 'react-router-dom';
import project_line from '../../../../assets/images/project_line.svg';
import utils, { biologyTopics, img } from '../../../../utils/utils';
import { ProjectItemProps } from '../../../../utils/interfaces';

const TopicItem: React.FC<ProjectItemProps> = ({ project, index }) => {
    const navigate = useNavigate();
            

    return (
        <div className={`bg-white flex flex-col py-20 gap-20 rounded-12`}>
            <div className="flex grid-cols-2 gap-20 items-end">
                <img src={img} alt="" className="w-[180px] h-[180px] rounded-50 object-cover" />
                <div className="flex gap-30 justify-between align-center h-full w-full">
                    <div className="flex flex-col gap-10 h-full justify-between">
                        <div className="flex items-center text-24 font-semibold bg-activeBg text-activeText text-[10px] justify-center h-[25px] w-fit-content p-[6px] rounded-5">
                            Completed
                        </div>
                        <div className="flex items-center text-24 font-semibold">
                            {utils.capitalizeEachWord(biologyTopics[index].topic)}
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
                                    26%, 1hr, 03min
                                </div>
                                <div className="whitespace-nowrap">
                                    100%, 3hr, 30min
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center text-14 text-recruitBlue gap-10">
                            {biologyTopics[index].description.substring(0,200)}...
                        </div>
                    </div>
                    <div className="flex gap-20 items-center">
                        <div
                            className="flex items-center justify-center w-[180px] border-[1.4px] border-recruitBlue p-5 h-[40px] rounded-8 gap-10 cursor-pointer"
                            onClick={() => navigate(`/topics/${project.id}/${project.id}`, { state: { project } })}
                        >
                            Start Lesson <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopicItem;
