import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context} from '../../../context/DashboardContext';
import makeRequest from '../../../services/axios';

const AdminMiddleware: React.FC = () => {
  const {setUserDetails, userDetails} = useContext(Context);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getLoggedInUser = async () =>{
    const res:any = await makeRequest('GET',`/auth/getLoggedInUser`,userDetails?.token || location.state?.token);
    return res.data?.user
  }
  useEffect(()=>{
    async function getUserDetails(){
      const user = userDetails || location.state?.user || await getLoggedInUser();
      const token = userDetails?.token || location?.state?.token || ' ';
      if(user){
        user.token = token;
        setUserDetails(user);
        (user?.role === 'admin' || user?.role === 'teacher') && setIsAuthenticated(true);
        (user?.role !== 'admin' && user?.role !== 'teacher') && navigate('/subjects', {replace : true});
      }else{
        navigate('/auth/signin', {replace : true});
      }    
    }
    getUserDetails();
  },[location.pathname, location.state]);

  if (!isAuthenticated) {
    return <></>;
  }else{
      return <Outlet />;
  }

};

export default AdminMiddleware;
