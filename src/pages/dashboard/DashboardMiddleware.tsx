import {  Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context/DashboardContext';
import utils from '../../utils/utils';

const DashboardMiddleware: React.FC = () => {
  const { setUser, user} = useContext(Context);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!user){
        if (location.state?.userInfo || localStorage.getItem('userInfo')) {
            const userInfo = localStorage.getItem('userInfo');
            const token = location.state?.userInfo?.accessToken ? location.state?.userInfo?.accessToken : userInfo ? JSON.parse(userInfo)?.accessToken : null;
            
            if(token){
                const decodedToken = utils.decodeJWT(token);
                setUser({
                  userId: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
                  organizationId: decodedToken["organisationId"],
                  emailaddress: decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
                  fullName : decodedToken["fullName"],
                  image_url : decodedToken["image_url"],
                  role : decodedToken["role"],
                  phone : decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone"],
                  can : decodedToken['can'],
                  exp : decodedToken["exp"],
                  token : token
                });
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
