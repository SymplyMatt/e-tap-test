import { createContext, useState, PropsWithChildren} from 'react';

interface userInfo{
  organizationId: string;
  emailaddress: string;
  fullName : string;
  image_url : string;
  role : string;
  phone : string;
  can : string;
  exp : string;
}

interface ContextValue {
    token: string | null;
    setToken : Function;
    user: userInfo | null;
    setUser : Function;
}

export const Context = createContext<ContextValue>({
    token : null,
    setToken : ()=>{},
    user : null,
    setUser : ()=>{}
});

const DashboardContext = ({ children }: PropsWithChildren<{}>) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<userInfo | null>(null);

    
    const value: ContextValue = {
        token,
        setToken,
        user,
        setUser
    };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default DashboardContext;
