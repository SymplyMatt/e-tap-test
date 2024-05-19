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

interface ContextValue {
    user: userInfo | null;
    setUser : Function;
}

export const Context = createContext<ContextValue>({
    user : null,
    setUser : ()=>{}
});

const DashboardContext = ({ children }: PropsWithChildren<{}>) => {
    const [user, setUser] = useState<userInfo | null>(null);

    
    const value: ContextValue = {
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
