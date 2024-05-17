import { useNavigate } from "react-router-dom"
import Button from "../components/common/Button"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import utils from "../utils/utils";
import makeRequest from "../services/request";
const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmit = async () =>{
    setLoading(true);
    if( !utils.isValidEmail(email)){
      toast.error('Enter a valid email!');
      return
    }
    const res = await makeRequest('POST', '/sendverification',null,{email, phoneNumber: 'test'});
    setLoading(false);
    if(res.type === 'success'){
      const {sessionHash} = res?.data.data || '';
      navigate('/auth/verify', { replace: true, state: { sessionHash,email  } });
    }
    console.log('res: ', res);
  }
  return (
    <div className="h-screen w-screen mm:px-40 px-10 py-20 text-recruitBlue flex flex-col items-center justify-center relative">
        <div className="w-full flex justify-between absolute top-0 mm:px-40 px-10 py-20 items-center">
            <div className="font-inter font-semibold cursor-pointer" onClick={()=> navigate('/')}>LOGO</div>
            <div className="flex items-center gap-20">
                <div className="font-semibold cursor-pointer" onClick={()=> navigate('/auth/signin')}>Log in</div>
                <Button label="Create Project" onClick={()=>{}} disabled={loading}/>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-20">
            <div className="text-recruitBlue font-extrabold text-[40px] sm:text-[60px] text-center sm:big-text font-hiragino-sans">The simplest way to manage project teams</div>
            <div className="text-recruitBlue max-w-[700px] flex justify-center items-center m-auto text-center">A tool for project managers to easily track project lifespan and team members engagement during the course of the project </div>
            <div className="flex flex-col justify-center gap-10">
              <div className="flex justify-center p-10 border-solid border border-gray-borderGray rounded-xl gap-100">
                <input type="text" className={`outline-none border-none ${email ? 'text-recruitBlue' : 'text-lightBlack'}`} placeholder="Enter email address" value={email} onChange={(e)=> setEmail(e.currentTarget.value)}/>
                <div className="flex items-center justify-center bg-lightBlack h-[30px] w-[30px] rounded-50 text-white cursor-pointer" onClick={()=> !loading && onSubmit()}><i className="fa-solid fa-arrow-right"></i></div>
              </div>
              <div className="text-center flex justify-center text-recruitBlue">*Sign up is required</div>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Home