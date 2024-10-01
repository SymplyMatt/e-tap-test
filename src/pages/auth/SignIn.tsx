import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import utils from "../../utils/utils";
import makeRequest from "../../services/axios";
import { AxiosResponse } from "axios";
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
      const res:AxiosResponse | any = await makeRequest('POST', '/auth/login','',{email, firstName:password, role: 'student'});
      if(res.status === 200){
        navigate('/subjects', {state:{user: res.data.user}})
      }else{
        utils.createErrorNotification('Invalid credentials', 1000);
      }
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
      <div className="flex flex-col justify-center gap-20 w-[90%] sm-tab:w-[70%] mm:w-[60%] md:w-[40%] mmd:w-[30%] mt-20">
        <div className="flex flex-col gap-10">
            <div className="font-hiragino font-extrabold text-28 leading-36.88 tracking-tight text-center items-center text-recruitBlue">
            Welcome back!
            </div>
            <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">New to [brand name]? <span className="text-black font-semibold cursor-pointer underline" onClick={()=> navigate('/auth/signup')}>Sign Up</span> </div>
        </div>
        <div className="w-full flex flex-col gap-20">
          <Input updateFunction={(e)=>setPassword(e)} label="First name"/>
          <Input updateFunction={(e)=>setEmail(e)} label="Email address"/>
          <Button label="Login" onClick={()=>onSubmit()} disabled={disabled || loading} loading={loading}/>
          <div className="font-poppins text-base font-normal leading-6 text-center text-recruitBlue underline mt-[-10px] cursor-pointer">Forgot password or email? </div>
        </div>
      </div>
      <ToastContainer />
      <div className="flex flex-col absolute top-[100px] right-[30px] notification-container gap-20"></div>
    </div>
  )
}

export default SignIn