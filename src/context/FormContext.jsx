import { createContext, useContext, useState } from 'react';

const FormContext = createContext(1);

const FormProvider = ({ children }) => {
  const [name, setName] = useState('zd');
  return (
    <FormContext.Provider value={{ name, setName }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};

export { FormProvider };
