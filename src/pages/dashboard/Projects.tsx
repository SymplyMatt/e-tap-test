import Dashboard from './Dashboard'
import projects from "../../assets/images/projects.svg"

const Projects = () => {
  return (
    <Dashboard>
        <div className="text-20 font-medium flex gap-5 w-full justify-start cursor-pointer h-[65px] items-center px-20"> <img src={projects} alt="" className="h-35"/> <div className="">Projects</div> </div>
        <div className=""></div>
    </Dashboard>
  )
}

export default Projects