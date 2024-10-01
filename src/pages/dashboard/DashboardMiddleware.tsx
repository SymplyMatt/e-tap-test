import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context, userDetails } from '../../context/DashboardContext';

const DashboardMiddleware: React.FC = () => {
  const {setUserDetails, userDetails} = useContext(Context);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    if(!userDetails){
        if (location.state?.user) {
            const userInfo: userDetails = location.state?.user;
            setUserDetails({
              id:userInfo.id,
              firstName: userInfo.firstName,
              lastName: userInfo.lastName,
              createdAt: userInfo.createdAt,
              email: userInfo.email
            })
            setIsAuthenticated(true);
        }else{
            navigate('/auth/signin', {replace : true});
        }
    }else{
        setIsAuthenticated(true);
    }
  },[location.pathname]);

  if (!isAuthenticated) {
    return <></>;
  }else{
      return <Outlet />;
  }

};

export default DashboardMiddleware;
