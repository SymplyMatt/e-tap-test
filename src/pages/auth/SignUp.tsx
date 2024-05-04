import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import google from '../../assets/images/google.svg'
const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center relative px-40 py-20 h-screen">
      <div className="w-full flex justify-between absolute top-0 px-40 py-20">
        <div className="font-inter font-semibold">LOGO</div>
        <div className="flex items-center gap-20">
        </div>
      </div>
      <div className="flex flex-col justify-center  gap-20 w-[40%]">
        <div className="font-hiragino font-extrabold text-28 leading-36.88 tracking-tight text-left items-start text-recruitBlue">
          Now, create your account
        </div>
        <div className="w-full flex flex-col gap-20">
          <Input updateFunction={()=>{}} label="Email address"/>
          <Input updateFunction={()=>{}} label="Password"/>
          <Input updateFunction={()=>{}} label="Re-Enter Password" placeholder="Re-Enter Password"/>
          <Button label="Create Account" onClick={()=>{}} disabled={false}/>
          <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">Already have an account? <span className="text-black font-semibold cursor-pointer">Log In</span> </div>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="flex items-center justify-center gap-10"><div className="h-[1px] w-full bg-borderGray"></div>Or <div className="h-[1px] w-full bg-borderGray"></div></div>
          <div className="border border-solid border-borderGray rounded-8 h-[45px] flex justify-center items-center px-10 w-full font-semibold gap-10 cursor-pointer"><img src={google} alt="" /> Sign up with Google</div>
        </div>
      </div>
    </div>
  )
}

export default SignUp