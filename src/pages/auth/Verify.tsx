import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
const Verify = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center text-center relative px-40 py-20 h-screen">
      <div className="w-full flex justify-between absolute top-0 px-40 py-20">
        <div className="font-inter font-semibold cursor-pointer" onClick={()=> navigate('/')}>LOGO</div>
        <div className=""></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-20 w-full mt-20">
        <div className="flex flex-col gap-10 w-[60%]">
            <div className="font-hiragino font-extrabold text-28 leading-36.88 tracking-tight text-center items-center text-recruitBlue">
            Check your email
            </div>
            <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">We've sent a 6-digit verification code to <span className="text-black font-semibold cursor-pointer underline">Mosesoyelowo@gmail.com</span> </div>
            <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">If you don't see it, please check your spam folder and make sure your email address is spelled correctly  </div>
        </div>
        <div className="flex flex-col gap-20">
            <div className="grid grid-cols-5 gap-10">
                <div className="h-50 w-50">
                    <Input updateFunction={()=>{}} label="" inputExtraClass="text-center"/>
                </div>
                <div className="h-50 w-50">
                    <Input updateFunction={()=>{}} label="" inputExtraClass="text-center"/>
                </div>
                <div className="h-50 w-50">
                    <Input updateFunction={()=>{}} label="" inputExtraClass="text-center"/>
                </div>
                <div className="h-50 w-50">
                    <Input updateFunction={()=>{}} label="" inputExtraClass="text-center"/>
                </div>
                <div className="h-50 w-50">
                    <Input updateFunction={()=>{}} label="" inputExtraClass="text-center"/>
                </div>
            </div>
            <Button label="Verify Account" onClick={()=>navigate('/projects')} disabled={false}/>
          <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">Resend code in <span className="text-black font-semibold cursor-pointer">59:00</span> </div>
        </div>
      </div>
    </div>
  )
}

export default Verify