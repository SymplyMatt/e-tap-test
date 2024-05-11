import Dashboard from './Dashboard'
import projects from "../../assets/images/projects.svg"
import barcode from '../../assets/images/barcode.svg'
import edit from '../../assets/images/edit.svg'
import group from '../../assets/images/group_team.svg'
import calendar_month from '../../assets/images/calendar_month.svg'
import sort from '../../assets/images/sort.svg'
import project_line from '../../assets/images/project_line.svg'
import approve from '../../assets/images/approve.svg'
import decline from '../../assets/images/decline.svg'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/common/Input'


const Project = () => {
  const navigate = useNavigate(); 
  return (
    <Dashboard background={'white'}>
      
      <div className="text-20 font-medium flex flex-col gap-5 w-full justify-start cursor-pointer h-[90px] px-20"> 
        <div className="h-[25px] w-full"></div>
        <div className="flex w-full justify-between items-center h-[65px]">
          <div className="flex items-center">
            <img src={projects} alt="" className="h-35"/>    
            <div className="">Projects</div> 
          </div>
          <button className={`whitespace-nowrap py-10 px-30 bg-lightBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-12 flex gap-10`}> <img src={edit} alt="" /> Edit</button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-20 create-project pt-20">
        <div className="flex flex-col px-20 gap-20 mb-[100px]">
          <div className="flex flex gap-40 border-b border-borderGray w-full">
            <div className="py-10 border-b-2  border-recruitBlue w-fit-content flex items-center gap-10 cursor-pointer">Overview</div>
            <div className="py-10 w-fit-content flex items-center gap-10 cursor-pointer text-lightBlack">Team members</div>
            <div className="py-10 w-fit-content flex items-center gap-10 cursor-pointer text-lightBlack">Attendance</div>
            <div className="py-10 w-fit-content flex items-center gap-10 cursor-pointer text-lightBlack">Settings</div>
          </div>
          <div className="flex flex-col w-full gap-30">
            <div className="bg-white flex flex-col py-10 gap-20 w-full rounded-12">
                <div className="flex grid-cols-2 gap-20 items-end">
                    <img src={barcode} alt="" className='w-[180px] h-[180px]'/>
                    <div className="flex flex-col gap-10 justify-end w-full">
                        <div className="text-24 font-semibold">Share Link</div>
                        <div className="text-14 text-[#555555]">Your form is now published and ready to be shared with your team members! Copy  this link to share your form on social media, messaging apps or via  email.</div>
                        <div className=""></div>
                        <div className="flex gap-10 items-center">
                            <Input value='https://brand.com/r/mDN5Qj'/>
                            <button className={`whitespace-nowrap py-10 px-30 bg-recruitBlue text-white h-[38px] flex items-center justify-center cursor-pointer rounded-12 flex gap-10`}><i className="fa-regular fa-copy"></i> Copy link</button>
                        </div>
                    </div>
                </div>
                <div className="flex grid-cols-2 gap-20 items-end">
                    <div className="flex items-center justify-center w-[180px] border border-borderGray p-5 h-[40px] rounded-8 gap-10 cursor-pointer"><i className="fa-regular fa-share-from-square"></i> Share barcode</div>
                    <div className=""></div>
                </div>
            </div>
            <div className="bg-white flex flex-col py-10 gap-20 w-full rounded-12">
                <div className="flex grid-cols-2 gap-20 items-center">
                    <div className="w-[180px] h-[180px] border border-borderGray flex flex-col justify-center p-10 gap-5 rounded-12">
                        <img src={group} alt="" className='w-[24px] h-[24px]'/>
                        <div className="flex items-center text-12 text-recruitBlue gap-10"> Total Team Members</div>
                        <div className="flex items-center text-[42px] text-recruitBlue gap-10 mt-10"> 2/12</div>
                    </div>
                    <div className="flex gap-10 justify-between align-center h-full w-fit-content p-10 border border-borderGray rounded-12 pr-30">
                        <div className="flex flex-col gap-10 h-full justify-between">
                            <div className="flex items-center text-base font-semibold gap-10"><img src={calendar_month} alt="" /> Duration of Project</div>
                            <div className="flex gap-10 flex items-center">
                                <div className="h-[48px] flex items-center">
                                <img src={project_line} alt="" className='h-full flex items-center'/>
                                </div>
                                <div className="flex flex-col gap-10 justify-between text-recruitBlue font-semibold">
                                <div className="">Start</div>
                                <div className="">End</div>
                                </div>
                                <div className="flex flex-col gap-10 justify-between whitespace-nowrap ml-20">
                                <div className="whitespace-nowrap">Saturday, March 16, 1:30 PM</div>
                                <div className="whitespace-nowrap">Mar 23, 4:00 PM</div>
                                </div>
                            </div>
                            <div className=""></div>
                        </div>
                  </div>
                </div>
            </div>
            <div className="flex flex-col gap-20">
                <div className="flex items-center text-[18px] font-semibold gap-10">Awaiting Approval</div>
                <table className='w-full'>
                    <thead className='w-full'>
                        <tr className='py-30 border-b border-borderGray w-full'>
                            <th className='text-left py-16 cursor-pointer'><div className="flex  gap-10"> Name <img src={sort} alt="" /></div></th>
                            <th className='text-left py-16 cursor-pointer'><div className="flex items-center gap-10">Contact <img src={sort} alt="" /></div> </th>
                            <th className='text-left py-16 cursor-pointer'><div className="flex items-center gap-10"> Status <img src={sort} alt="" /></div></th>
                            <th className='text-left py-16 cursor-pointer'><div className="flex items-center gap-10"> Actions <img src={sort} alt="" /></div></th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        <tr className='py-30 border-b border-borderGray w-full'>
                            <td className='text-left py-16 font-bold'><div className="flex items-center gap-10"><div className="h-[30px] w-[30px] flex items-center justify-center rounded-50 bg-recruitBlue text-white font-normal">O</div> Olowokanga Matthew</div></td>
                            <td className='text-left py-16 font-bold'><div className="flex items-center gap-10">Olowokanga@gmail.com</div> </td>
                            <td className='text-left py-16'><div className="flex items-center gap-10">+2348109957139</div></td>
                            <td className='text-left py-16'>
                                <div className="flex items-center gap-10"> 
                                    <div className="flex items-center justify-center w-min-content border border-borderGray py-5 px-10 h-[40px] rounded-8 gap-10 cursor-pointer text-14 text-activeText"><img src={approve} alt="" /> Approve</div>
                                    <div className="flex items-center justify-center w-min-content border border-borderGray py-5 px-10 h-[40px] rounded-8 gap-10 cursor-pointer text-14 text-declineText"><img src={decline} alt="" /> Decline</div>
                                </div>
                            </td>
                        </tr>
                        <tr className='py-30 border-b border-borderGray w-full'>
                            <td className='text-left py-16 font-bold'><div className="flex items-center gap-10"><div className="h-[30px] w-[30px] flex items-center justify-center rounded-50 bg-recruitBlue text-white font-normal">O</div> Olowokanga Matthew</div></td>
                            <td className='text-left py-16 font-bold'><div className="flex items-center gap-10">Olowokanga@gmail.com</div> </td>
                            <td className='text-left py-16'><div className="flex items-center gap-10">+2348109957139</div></td>
                            <td className='text-left py-16'>
                                <div className="flex items-center gap-10"> 
                                    <div className="flex items-center justify-center w-min-content border border-borderGray py-5 px-10 h-[40px] rounded-8 gap-10 cursor-pointer text-14 text-activeText"><img src={approve} alt="" /> Approve</div>
                                    <div className="flex items-center justify-center w-min-content border border-borderGray py-5 px-10 h-[40px] rounded-8 gap-10 cursor-pointer text-14 text-declineText"><img src={decline} alt="" /> Decline</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col gap-20">
                <div className="flex justify-between w-full items-center">
                    <div className="flex items-center text-[18px] font-semibold gap-10">Managed by</div>
                    <button className={`whitespace-nowrap py-10 px-20 bg-recruitBlue text-white h-[45px] flex items-center justify-center cursor-pointer rounded-12 flex gap-10`}><i className="fa-solid fa-plus"></i> Add Staff Member</button>
                </div>
                <table className='w-full'>
                    <thead className='w-full'>
                        <tr className='py-30 border-b border-borderGray w-full'>
                            <th className='text-left py-16 cursor-pointer'><div className="flex  gap-10"> Name <img src={sort} alt="" /></div></th>
                            <th className='text-left py-16 cursor-pointer'><div className="flex items-center gap-10">Contact <img src={sort} alt="" /></div> </th>
                            <th className='text-left py-16 cursor-pointer'><div className="flex items-center gap-10"> Role <img src={sort} alt="" /></div></th>
                            <th className='text-left py-16 cursor-pointer'><div className="flex items-center gap-10"> Actions <img src={sort} alt="" /></div></th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        <tr className='py-30 border-b border-borderGray w-full'>
                            <td className='text-left py-16 font-bold'><div className="flex items-center gap-10"><div className="h-[30px] w-[30px] flex items-center justify-center rounded-50 bg-recruitBlue text-white font-normal">O</div> Olowokanga Matthew</div></td>
                            <td className='text-left py-16 font-bold'><div className="flex items-center gap-10">Olowokanga@gmail.com</div> </td>
                            <td className='text-left py-16'><div className="flex items-center gap-10">Administrator</div></td>
                            <td className='text-left py-16'>
                                <div className="flex items-center gap-10"> 
                                    <div className="flex items-center justify-center w-min-content border border-borderGray py-5 px-10 h-[40px] rounded-8 gap-10 cursor-pointer text-14 text-activeText"><img src={approve} alt="" /> Approve</div>
                                    <div className="flex items-center justify-center w-min-content border border-borderGray py-5 px-10 h-[40px] rounded-8 gap-10 cursor-pointer text-14 text-declineText"><img src={decline} alt="" /> Decline</div>
                                </div>
                            </td>
                        </tr>
                        <tr className='py-30 border-b border-borderGray w-full'>
                            <td className='text-left py-16 font-bold'><div className="flex items-center gap-10"><div className="h-[30px] w-[30px] flex items-center justify-center rounded-50 bg-recruitBlue text-white font-normal">O</div> Olowokanga Matthew</div></td>
                            <td className='text-left py-16 font-bold'><div className="flex items-center gap-10">Olowokanga@gmail.com</div> </td>
                            <td className='text-left py-16'><div className="flex items-center gap-10">Project Manager</div></td>
                            <td className='text-left py-16'>
                                <div className="flex items-center gap-10"> 
                                    <div className="flex items-center justify-center w-min-content border border-borderGray py-5 px-10 h-[40px] rounded-8 gap-10 cursor-pointer text-14 text-activeText"><img src={approve} alt="" /> Approve</div>
                                    <div className="flex items-center justify-center w-min-content border border-borderGray py-5 px-10 h-[40px] rounded-8 gap-10 cursor-pointer text-14 text-declineText"><img src={decline} alt="" /> Decline</div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  )
}

export default Project