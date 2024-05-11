import sort from '../../../assets/images/sort.svg'
import approve from '../../../assets/images/approve.svg'
import decline from '../../../assets/images/decline.svg'

const TeamMembers = () => {
  return (
    <div className="flex flex-col w-full gap-30 py-10">
        <div className="flex flex-col gap-20">
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
    </div>
  )
}

export default TeamMembers