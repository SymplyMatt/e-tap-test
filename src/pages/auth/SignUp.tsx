import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import google from '../../assets/images/google.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const onSubmit = () =>{
    setLoading(true);
    setTimeout(()=>{
      toast.error('Error connecting to server!!!');
      setLoading(false);
    }, 500);
  }
  
  useEffect(()=>{
    setDisabled(!(email && password && confirmPassword))
  },[email, password, confirmPassword])

  return (
    <div className="flex flex-col items-center justify-center text-center relative px-40 py-20 h-screen">
      <div className="w-full flex justify-between absolute top-0 px-40 py-20">
        <div className="font-inter font-semibold cursor-pointer" onClick={()=> navigate('/')}>LOGO</div>
        <div className="flex items-center gap-20">
        </div>
      </div>
      <div className="flex flex-col justify-center  gap-20 w-[40%]">
        <div className="font-hiragino font-extrabold text-28 leading-36.88 tracking-tight text-left items-start text-recruitBlue">
          Now, create your account
        </div>
        <div className="w-full flex flex-col gap-20">
          <Input updateFunction={(e)=>setEmail(e)} label="Email address"/>
          <Input updateFunction={(e)=>setPassword(e)} label="Password"/>
          <Input updateFunction={(e)=>setConfirmPassword(e)} label="Re-Enter Password" placeholder="Re-Enter Password"/>
          <Button label="Create Account" onClick={()=>onSubmit()} disabled={disabled || loading}/>
          <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">Already have an account? <span className="text-black font-semibold cursor-pointer" onClick={()=> navigate('/auth/signin')}>Log In</span> </div>
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="flex items-center justify-center gap-10"><div className="h-[1px] w-full bg-borderGray"></div>Or <div className="h-[1px] w-full bg-borderGray"></div></div>
          <div className="border border-solid border-borderGray rounded-8 h-[45px] flex justify-center items-center px-10 w-full font-semibold gap-10 cursor-pointer"><img src={google} alt="" /> Sign up with Google</div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignUp