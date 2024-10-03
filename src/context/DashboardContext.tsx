import { createContext, useState, PropsWithChildren} from 'react';

interface userInfo{
  organizationId: string;
  userId: string;
  token: string;
  emailaddress: string;
  fullName : string;
  image_url : string;
  role : string;
  phone : string;
  can : string;
  exp : string;
}
export interface userDetails{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt : Date;
  role?: string;
}

interface ContextValue {
    user: userInfo | null;
    setUser : Function;
    userDetails: userDetails | null;
    setUserDetails : Function;
}

export const Context = createContext<ContextValue>({
    user : null,
    setUser : ()=>{},
    userDetails : null,
    setUserDetails : ()=>{}
});

const DashboardContext = ({ children }: PropsWithChildren<{}>) => {
    const [user, setUser] = useState<userInfo | null>(null);
    const [userDetails, setUserDetails] = useState<userDetails | null>(null);

    
    const value: ContextValue = {
        user,
        setUser,
        userDetails,
        setUserDetails
    };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default DashboardContext;
