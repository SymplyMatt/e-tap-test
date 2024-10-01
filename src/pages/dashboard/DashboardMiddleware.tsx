import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context} from '../../context/DashboardContext';
import makeRequest from '../../services/axios';

export const getLoggedInUser = async () =>{
  const res:any = await makeRequest('GET',`/auth/getLoggedInUser`);
  console.log('res: ', res);
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
      if(user){
        setUserDetails(user);
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
