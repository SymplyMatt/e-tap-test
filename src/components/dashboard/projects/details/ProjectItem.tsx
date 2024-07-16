import { useLocation, useNavigate } from 'react-router-dom'
import barcode from '../../../../assets/images/barcode.svg'
import project_line from '../../../../assets/images/project_line.svg'
import team_members from "../../../../assets/images/team_members.svg"
import utils from '../../../../utils/utils'
import { useMemo } from 'react'

export interface Project{
    name: string,
    description: string,
    logoUrl: string,
    projectState: string,
    id: number,
    organizationId: number,
    noOfParticipants: number,
    startDate: Date,
    endDate: Date,
}
export interface ComponentProps{
    project : Project;
    search : string;
}
const ProjectItem : React.FC<ComponentProps> =   ({project, search}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const stateParam : string = useMemo(() => queryParams.get('state') ?? '', [queryParams.get('state') ?? '']);
    return (
        <div className={`bg-white flex flex-col px-20 py-20 gap-20 rounded-12 ${search && !project.name.toLowerCase().includes(search) && 'hidden'} ${stateParam && stateParam !== 'All' && project.projectState !== stateParam && 'hidden'}`}>
            <div className="flex grid-cols-2 gap-20 items-end">
                <img src={barcode} alt="" className='w-[180px] h-[180px]'/>
                <div className="flex gap-10 justify-between align-center h-full w-full">
                <div className="flex flex-col gap-10 h-full justify-between">
                    <div className="flex items-center text-24 font-semibold bg-activeBg text-activeText text-[10px] justify-center h-[25px] w-fit-content p-[6px] rounded-5">Active</div>
                    <div className="flex items-center text-24 font-semibold">{utils.capitalizeEachWord(project.name)}</div>
                    <div className="flex gap-10 h-full">
                    <div className="h-full">
                        <img src={project_line} alt="" className='h-full'/>
                    </div>
                    <div className="flex flex-col gap-10 h-full justify-between text-recruitBlue font-semibold">
                        <div className="">Start</div>
                        <div className="">End</div>
                    </div>
                    <div className="flex flex-col gap-10 h-full justify-between whitespace-nowrap ml-20">
                        <div className="whitespace-nowrap">{utils.formatDateAndTime(new Date(project.startDate))}</div>
                        <div className="whitespace-nowrap">{utils.formatDateAndTime(new Date(project.endDate))}</div>
                    </div>
                    </div>
                    <div className="flex items-center text-14 text-recruitBlue gap-10"><img src={team_members} alt="" /> {project.noOfParticipants} Team Members</div>
                </div>
                <div className="flex gap-20 items-center">
                    <div className="flex items-center justify-center w-[180px] border-[1.4px] border-recruitBlue p-5 h-[40px] rounded-8 gap-10 cursor-pointer cursor-pointer" onClick={()=>navigate(`/projects/${project.id}`, { state: { project  } })}> Manage Project <i className="fa-solid fa-arrow-right"></i></div>
                    <i className="fa-regular fa-share-from-square text-[24px] cursor-pointer"></i> 
                    <i className="fa-solid fa-ellipsis-vertical text-[24px] text-recruitBlue cursor-pointer"></i>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem