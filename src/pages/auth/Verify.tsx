import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import { useEffect, useState } from "react";
import makeRequest from "../../services/request";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Verify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const remainingSeconds = seconds % 60;
  const [showResent, setShowResent]= useState(false);
  const [inputValues, setInputValues] = useState<Array<string>>(['','','','','','']);
  const [disabled, setDisabled] = useState(false);
  const [sessionHash, setSessionHash] = useState<string>('');
  const updateValue = (index: number, value: string) => {
    const updatedInputValues : Array<string> = [...inputValues];
    updatedInputValues[index] = value;
    setInputValues(updatedInputValues);
  };
  useEffect(() => {
    if (seconds === 0) return;
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);
  useEffect(()=>{
    if(!location.state?.sessionHash || !location.state?.email ){
      navigate('/', {replace : true, state: null});
    }else{
      setSessionHash(location.state?.sessionHash);
    }
  },[]);
  useEffect(()=>{
    setDisabled(!inputValues.every(Boolean))
  },[inputValues])
  const resendCode = async () =>{
    setLoading(true);
    const res = await makeRequest('POST', '/organization/sendverification',null,{email : location.state?.email, phoneNumber: 'test'});
    setLoading(false);
    if(res.type === 'success'){
      setShowResent(true);
      setSessionHash(res.data.data.sessionHash);
      setTimeout(()=>{
        setShowResent(false);
        setSeconds(60);
      },1000);
    }
  }
  const verify = async () =>{
    setLoading(true);
    const res = await makeRequest('POST', '/organization/validateotp',null,{sessionHash, code: inputValues.join('') });
    setLoading(false);
    if(res.type === 'success'){
      toast.success('Account Verification successful!');
      setTimeout(()=>{
        navigate('/auth/signup', { replace: true, state: { sessionHash,email : location.state?.email  } });
      },200);
    }else if(res.type === 'failed'){
      toast.error('Incorrect token, a new one has been sent');
      resendCode();
    }
  }

  return (
    <>
      {location.state?.sessionHash && location.state?.email && <div className="flex flex-col items-center justify-center text-center relative px-40 py-20 h-screen">
        <div className="w-full flex justify-between absolute top-0 px-40 py-20">
          <div className="font-inter font-semibold cursor-pointer" onClick={()=> navigate('/')}>LOGO</div>
          <div className=""></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-20 w-full mt-20">
          <div className="flex flex-col gap-10 w-[95%] mm:w-[60%]">
              <div className="font-hiragino font-extrabold text-28 leading-36.88 tracking-tight text-center items-center text-recruitBlue">
              Check your email
              </div>
              <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">We've sent a 6-digit verification code to <span className="text-black font-semibold cursor-pointer underline">{location.state?.email}</span> </div>
              <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">If you don't see it, please check your spam folder and make sure your email address is spelled correctly  </div>
          </div>
          <div className="flex flex-col gap-20">
              <div className="grid grid-cols-6 gap-10">
                  <div className="h-50 w-50">
                      <Input updateFunction={(e)=>updateValue(0,e)} label="" inputExtraClass="text-center" regex={/^(?:[0-9]+|)$/} single={true}/>
                  </div>
                  <div className="h-50 w-50">
                      <Input updateFunction={(e)=>updateValue(1,e)} label="" inputExtraClass="text-center" regex={/^(?:[0-9]+|)$/} single={true}/>
                  </div>
                  <div className="h-50 w-50">
                      <Input updateFunction={(e)=>updateValue(2,e)} label="" inputExtraClass="text-center" regex={/^(?:[0-9]+|)$/} single={true}/>
                  </div>
                  <div className="h-50 w-50">
                      <Input updateFunction={(e)=>updateValue(3,e)} label="" inputExtraClass="text-center" regex={/^(?:[0-9]+|)$/} single={true}/>
                  </div>
                  <div className="h-50 w-50">
                      <Input updateFunction={(e)=>updateValue(4,e)} label="" inputExtraClass="text-center" regex={/^(?:[0-9]+|)$/} single={true}/>
                  </div>
                  <div className="h-50 w-50">
                      <Input updateFunction={(e)=>updateValue(5,e)} label="" inputExtraClass="text-center" regex={/^(?:[0-9]+|)$/} single={true}/>
                  </div>
              </div>
              <Button label="Verify Account" onClick={()=>verify()} disabled={disabled || loading} loading={loading}/>
              <>
                {!showResent ? <>
                  {seconds > 0 && <div className="font-poppins text-base font-normal leading-6 text-center text-textFade mt-[-10px]">Resend code in <span className="text-black font-semibold cursor-pointer">00:{`${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}</span> </div>}
                  {seconds === 0 && <div className={`font-poppins text-base font-normal leading-6 text-center mt-[-10px]  font-semibold cursor-pointer ${loading ? 'text-textFade' : 'text-black'}`} onClick={()=> !loading && resendCode()}>Resend code</div>}
                </>
                : 
                  <div className="font-poppins text-base font-normal leading-6 text-center mt-[-10px] text-activeText font-semibold">Resent!</div>
                }
              </>
          </div>
        </div>
        <ToastContainer />
      </div>}
    </>
  )
}

export default Verify