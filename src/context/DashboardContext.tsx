import { createContext, useState, PropsWithChildren} from 'react';


interface ContextValue {
    token: string | null;
    setToken : Function;
}

export const Context = createContext<ContextValue>({
    token : null,
    setToken : ()=>{}
});

const DashboardContext = ({ children }: PropsWithChildren<{}>) => {
    const [token, setToken] = useState<string | null>(null);

    
    const value: ContextValue = {
        token,
        setToken
    };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default DashboardContext;
