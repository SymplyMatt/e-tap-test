import {  Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AuthMiddleware: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();
  useEffect(()=>{
    const userInfo = localStorage.getItem('userInfo');
    const token = userInfo ? JSON.parse(userInfo)?.accessToken : null;
    if(token){
        navigate('/projects');
        setIsAuthenticated(true);
    }else{
        setIsAuthenticated(false);
    }
  },[location.pathname]);

  if (isAuthenticated === false) {
      return <Outlet />;
    }else{
      return <></>;
  }

};

export default AuthMiddleware;
