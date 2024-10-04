import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import utils from "../../utils/utils";
import makeRequest from "../../services/axios";
interface inputs{
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}
const SignUp = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState<inputs>({
    firstName: '',
    lastName: '',
    email: '',
    role: 'admin'
  });
  const [disabled, setDisabled] = useState(true);
  const [admin, setAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async () =>{
    if( !utils.isValidEmail(inputValues.email)){
      utils.createErrorNotification('Enter a valid email!!', 2000);
      return
    }
    setLoading(true);
    const res: any = await makeRequest('POST', `/users/create/${admin ? 'admin' : 'student'}`,'',inputValues);
    if(res.status === 201){
      navigate((res.data.user?.role === 'admin' || res.data.user?.role === 'teacher') ? '/admin/subjects' :'/subjects', {state:{user: res.data.newUser, token: res.data.token}});
    }else{
      utils.createErrorNotification(res.response.data?.message, 1500);
    }
    setLoading(false);
  }
  const updateValue = (key : keyof inputs, value : string) => {
    setInputValues({...inputValues, [key]: value});
  }
  useEffect(()=>{
    const isDisabled = utils.anyFalseyValues(inputValues);
    setDisabled(isDisabled);
  },[inputValues]);
  return (
    <>
      {<div className="flex flex-col items-center justify-center text-center relative px-40 py-20 h-screen overflow-auto">
        <div className="w-full flex justify-between absolute top-0 px-40 py-20">
          <div className="font-inter font-semibold cursor-pointer" onClick={()=> navigate('/')}>LOGO</div>
          <div className="flex items-center gap-20">
          </div>
        </div>
        <div className="flex flex-col justify-center  gap-20 w-[90%] sm-tab:w-[70%] mm:w-[60%] md:w-[40%] mmd:w-[30%]">
          <div className="font-hiragino font-extrabold text-28 leading-36.88 tracking-tight text-left items-start text-recruitBlue">
            Now, create your account
          </div>
          <div className="w-full flex flex-col gap-20">
            <div className="flex flex-col phone-big:flex-row gap-10 w-full">
              <Input updateFunction={(e)=>updateValue('firstName',e)} label="First Name" regex={/^[a-zA-Z]+$/}/>
              <Input updateFunction={(e)=>updateValue('lastName',e)} label="Last Name" regex={/^[a-zA-Z]+$/}/>
            </div>
            <div className="flex flex-col phone-big:flex-row gap-10 w-full">
              <Input updateFunction={(e)=>updateValue('email',e)} label="Email address"/>
            </div>
            <div className="flex justify-start gap-10"><input type="checkbox" checked={admin} onChange={(e)=>setAdmin(e.currentTarget.checked)}/> I am an admin/teacher</div>
            <Button label="Create Account" onClick={()=>!loading && onSubmit()} disabled={disabled || loading} loading={loading}/>
            <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">Already have an account? <span className="text-black font-semibold cursor-pointer" onClick={()=> navigate('/auth/signin')}>Log In</span> </div>
          </div>
        </div>
        <div className="flex flex-col absolute top-[100px] right-[30px] notification-container gap-20"></div>
      </div>}
    </>
  )
}

export default SignUp