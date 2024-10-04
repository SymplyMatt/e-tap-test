import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context} from '../../context/DashboardContext';
import makeRequest from '../../services/axios';

const AuthMiddleware: React.FC = () => {
  const {setUserDetails, userDetails} = useContext(Context);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const getLoggedInUser = async () =>{
    const res:any = await makeRequest('GET',`/auth/getLoggedInUser`,userDetails?.token);
    return res.data?.user
  }
  useEffect(()=>{
    async function getUserDetails(){
      const user= userDetails || location.state?.user || await getLoggedInUser();
      if(user){
        setUserDetails(user);
        setIsAuthenticated(true);
        (user?.role === 'admin' || user?.role === 'teacher') && navigate('/admin/subjects', {replace : true});
        navigate('/subjects', {replace : true});
      }else{
        setIsAuthenticated(false);
      }    
    }
    getUserDetails();
  },[location.pathname]);

  if (isAuthenticated || isAuthenticated === null) {
    return <></>;
  }else{
      return <Outlet />;
  }

};

export default AuthMiddleware;
