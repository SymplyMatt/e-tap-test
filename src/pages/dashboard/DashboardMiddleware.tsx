import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context} from '../../context/DashboardContext';
import makeRequest from '../../services/axios';

export const getLoggedInUser = async () =>{
  const res:any = await makeRequest('GET',`/auth/getLoggedInUser`);
  return res.data?.user
}
const DashboardMiddleware: React.FC = () => {
  const {setUserDetails, userDetails} = useContext(Context);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    async function getUserDetails(){
      const user= userDetails || location.state?.user || await getLoggedInUser();
      const token = userDetails?.token || location?.state?.token || ' ';
      if(user){
        user.token = token;
        setUserDetails(user);
        (user?.role === 'admin' || user?.role === 'teacher') && navigate('/admin/subjects', {replace : true});
        setIsAuthenticated(true);
      }else{
        navigate('/auth/signin', {replace : true});
      }    
    }
    getUserDetails();
  },[location.pathname]);

  if (!isAuthenticated) {
    return <></>;
  }else{
      return <Outlet />;
  }

};

export default DashboardMiddleware;
