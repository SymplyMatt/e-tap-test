import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/DashboardContext';

const DashboardMiddleware: React.FC = () => {
  const { token , setToken} = useContext(Context);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!token){
        if (location.state?.userInfo || localStorage.getItem('userInfo')) {
            const userInfo = localStorage.getItem('userInfo');
            const token = location.state?.userInfo.token ? location.state?.userInfo.token : userInfo ? JSON.parse(userInfo)?.token : null;
            if(token){
                setToken(token);
                setIsAuthenticated(true);
            }else{
                navigate('/auth/signin', {replace : true});
            }
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
