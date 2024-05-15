import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import google from '../../assets/images/google.svg'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import utils from "../../utils/utils";
import makeRequest from "../../services/request";
const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const onSubmit = async () =>{
      if( !utils.isValidEmail(email)){
        toast.error('Enter a valid email!');
        return
      }
      setLoading(true);
      const res = await makeRequest('POST', '/login','',{email, password});
      if(res.type !== 'success'){
        toast.error('Incorrect username or password!');
      }else{
        navigate('/auth/verify', { replace: true, state: { auth : true  } });
      }
      console.log('res: ', res);
      setLoading(false);
    }

    useEffect(()=>{
      setDisabled(!(email && password));
    },[email, password])

  return (
    <div className="flex flex-col items-center justify-center text-center relative px-40 py-20 h-screen">
      <div className="w-full flex justify-center absolute top-0 px-40 py-20">
        <div className="font-inter font-semibold cursor-pointer" onClick={()=> navigate('/')}>LOGO</div>
      </div>
      <div className="flex flex-col justify-center gap-20 w-[40%] mmd:w-[30%] mt-20">
        <div className="flex flex-col gap-10">
            <div className="font-hiragino font-extrabold text-28 leading-36.88 tracking-tight text-center items-center text-recruitBlue">
            Welcome back!
            </div>
            <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">New to [brand name]? <span className="text-black font-semibold cursor-pointer underline" onClick={()=> navigate('/auth/signup')}>Sign Up</span> </div>
        </div>
        <div className="w-full flex flex-col gap-20">
          <Input updateFunction={(e)=>setEmail(e)} label="Email"/>
          <Input updateFunction={(e)=>setPassword(e)} label="Password"/>
          <Button label="Login" onClick={()=>onSubmit()} disabled={disabled || loading}/>
          <div className="font-poppins text-base font-normal leading-6 text-center text-recruitBlue underline mt-[-10px] cursor-pointer">Forgot password or email? </div>
        </div>
        {/* <div className="w-full flex flex-col gap-10">
          <div className="flex items-center justify-center gap-10"><div className="h-[1px] w-full bg-borderGray"></div>Or <div className="h-[1px] w-full bg-borderGray"></div></div>
          <div className="border border-solid border-borderGray rounded-8 h-[45px] flex justify-center items-center px-10 w-full font-semibold gap-10 cursor-pointer"><img src={google} alt="" /> Sign up with Google</div>
          <div className="border border-solid border-borderGray rounded-8 h-[45px] flex justify-center items-center px-10 w-full font-semibold gap-10 cursor-pointer">Sign in with magic link</div>
        </div> */}
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignIn