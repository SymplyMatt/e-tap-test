import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context} from '../../context/DashboardContext';
import makeRequest from '../../services/axios';

export const getLoggedInUser = async () =>{
  const res:any = await makeRequest('GET',`/auth/getLoggedInUser`);
  return res.data?.user
}
const AuthMiddleware: React.FC = () => {
  const {setUserDetails, userDetails} = useContext(Context);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    async function getUserDetails(){
      const user= userDetails || location.state?.user || await getLoggedInUser();
      if(user){
        setUserDetails(user);
        setIsAuthenticated(true);
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
