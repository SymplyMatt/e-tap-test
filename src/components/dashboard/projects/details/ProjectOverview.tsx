import { Project } from '../../../../utils/interfaces'
import { biologyTopics, img } from '../../../../utils/utils'

interface Props {
  project: Project;
}

function ProjectOverview({ project }: Props) {
  return (
    <div className="flex flex-col w-full gap-30">
      <div className="bg-white flex flex-col py-10 gap-40 w-full rounded-12">
        <div className="flex grid-cols-2 gap-20 items-center">
          <img src={img} alt="" className="w-[180px] h-[180px]" />
          <div className="flex flex-col gap-10 justify-end w-full">
            <div className="text-24 font-semibold">{biologyTopics[0].topic}</div>
            <div className="text-14 text-[#555555]">{biologyTopics[0].description}</div>
            <div className=""></div>
          </div>
        </div>

        <div className="w-full">
          <video id="cloudinaryVideo" className="w-full h-auto" controls>
            <source
              src="https://res.cloudinary.com/dj2ovlhjc/video/upload/v1727447334/When_You_Use_Apple_Maps..._elejvl.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;
