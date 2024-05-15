import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import google from '../../assets/images/google.svg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import Select from "../../components/common/Select";
import utils from "../../utils/utils";
import makeRequest from "../../services/request";
interface inputs{
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  dateOfBirth: string,
  phoneNumber: string,
  gender: string,
  address: string,
}
const SignUp = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState<inputs>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    phoneNumber: '',
    gender: 'male',
    address: ''
  });
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const onSubmit = async () =>{
    setLoading(true);
    if( !utils.isValidEmail(inputValues.email)){
      toast.error('Enter a valid email!');
      return
    }
    const payload = {...inputValues, fullName: `${inputValues.firstName} ${inputValues.lastName}`}
    const res = await makeRequest('POST', '/sendverification','',payload);
    console.log('res: ', res);
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
    <div className="flex flex-col items-center justify-center text-center relative px-40 py-20 h-screen overflow-auto">
      <div className="w-full flex justify-between absolute top-0 px-40 py-20">
        <div className="font-inter font-semibold cursor-pointer" onClick={()=> navigate('/')}>LOGO</div>
        <div className="flex items-center gap-20">
        </div>
      </div>
      <div className="flex flex-col justify-center  gap-20 w-[40%] mmd:w-[30%]">
        <div className="font-hiragino font-extrabold text-28 leading-36.88 tracking-tight text-left items-start text-recruitBlue">
          Now, create your account
        </div>
        <div className="w-full flex flex-col gap-20">
          <div className="flex gap-10 w-full">
            <Input updateFunction={(e)=>updateValue('firstName',e)} label="First Name" regex={/^[a-zA-Z]+$/}/>
            <Input updateFunction={(e)=>updateValue('lastName',e)} label="Last Name" regex={/^[a-zA-Z]+$/}/>
          </div>
          <div className="flex gap-10 w-full">
            <Input updateFunction={(e)=>updateValue('phoneNumber',e)} label="Phone Number"/>
            <Input updateFunction={(e)=>updateValue('email',e)} label="Email address"/>
          </div>
          <div className="flex gap-10 w-full">
            <Input updateFunction={(e)=>updateValue('dateOfBirth',e)} label="Date of Birth" type="date"/>
            <Select options={['Male', 'Female']} updateFunction={(e)=>updateValue('gender',e)} inFocus={false}/>
          </div>
          <Input updateFunction={(e)=>updateValue('address',e)} label="Address"/>
          <div className="flex gap-10 w-full">
            <Input updateFunction={(e)=>updateValue('password',e)} label="Password" type="password"/>
            <Input updateFunction={(e)=>updateValue('confirmPassword',e)} label="Re-Enter Password" placeholder="Re-Enter Password" type="password"/>
          </div>
          <Button label="Create Account" onClick={()=>!loading && onSubmit()} disabled={disabled || loading}/>
          <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">Already have an account? <span className="text-black font-semibold cursor-pointer" onClick={()=> navigate('/auth/signin')}>Log In</span> </div>
        </div>
        {/* <div className="w-full flex flex-col gap-10">
          <div className="flex items-center justify-center gap-10"><div className="h-[1px] w-full bg-borderGray"></div>Or <div className="h-[1px] w-full bg-borderGray"></div></div>
          <div className="border border-solid border-borderGray rounded-8 h-[45px] flex justify-center items-center px-10 w-full font-semibold gap-10 cursor-pointer"><img src={google} alt="" /> Sign up with Google</div>
        </div> */}
      </div>
      <ToastContainer />
    </div>
  )
}

export default SignUp