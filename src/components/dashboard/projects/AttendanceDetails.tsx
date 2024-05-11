import sort from '../../../assets/images/sort.svg'
import check_bold from '../../../assets/images/check_bold.svg'

const AttendanceDetails = () => {
  return (
    <div className="flex flex-col gap-20">
        <div className="flex flex items-center py-30 gap-20">
            <div className="cursor-pointer"><i className="fa-solid fa-arrow-left-long text-24"></i></div>
            <div className="text-recruitBlue text-24">Attendance 202</div>
        </div>
        <div className="border-2 rounded-12 w-fit-content border-recruitBlue p-20 flex items-center gap-10">
            <div className="text-[38px] font-extrabold"><img src={check_bold} alt="" /></div>
            <div className="">
                <div className="font-14">Mark Attendance</div>
                <div className="text-12">187/50</div>
            </div>
        </div>
        <div className="flex flex-col gap-20 w-[80%]">
            <table className=''>
                <thead className=''>
                    <tr className='py-30 border-b border-borderGray'>
                        <th className='text-left py-16 cursor-pointer'><div className="flex  gap-10"> Name <img src={sort} alt="" /></div></th>
                        <th className='text-left py-16 cursor-pointer'><div className="flex items-center gap-10">Email Address <img src={sort} alt="" /></div> </th>
                        <th className='text-left py-16 cursor-pointer'><div className="flex items-center gap-10"> Phone Number <img src={sort} alt="" /></div></th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className='py-30 border-b border-borderGray'>
                        <td className='text-left py-16 font-bold'><div className="flex items-center gap-10"><div className="h-[30px] w-[30px] flex items-center justify-center rounded-50 bg-recruitBlue text-white font-normal">O</div> Olowokanga Matthew</div></td>
                        <td className='text-left py-16 font-bold'><div className="flex items-center gap-10">Olowokanga@gmail.com</div> </td>
                        <td className='text-left py-16'><div className="flex items-center gap-10">+2348109957139</div></td>
                    </tr>
                    <tr className='py-30 border-b border-borderGray'>
                        <td className='text-left py-16 font-bold'><div className="flex items-center gap-10"><div className="h-[30px] w-[30px] flex items-center justify-center rounded-50 bg-recruitBlue text-white font-normal">O</div> Olowokanga Matthew</div></td>
                        <td className='text-left py-16 font-bold'><div className="flex items-center gap-10">Olowokanga@gmail.com</div> </td>
                        <td className='text-left py-16'><div className="flex items-center gap-10">+2348109957139</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AttendanceDetails