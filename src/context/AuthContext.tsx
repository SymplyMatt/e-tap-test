import { createContext, useState, PropsWithChildren, useEffect} from 'react';


interface ContextValue {
    formInputs: FormInputs;
}

export interface FormInputs {
    phone: string;
}
export const Context = createContext<ContextValue>({
    formInputs: {
        phone: '',
    }
});

const AuthContext = ({ children }: PropsWithChildren<{}>) => {
    const [formInputs, setFormInputs] = useState<FormInputs>({
        phone: '',
    });

    useEffect(()=>{
        setFormInputs({
            phone: '',
        });
    },[]);
    
    const value: ContextValue = {
        formInputs,
    };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default AuthContext;
