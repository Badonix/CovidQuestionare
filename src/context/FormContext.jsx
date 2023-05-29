import { createContext } from 'react';
import { useForm } from 'react-hook-form';
const FormContext = createContext();

const FormProvider = ({ children }) => {
  const methods = useForm({ shouldUnregister: false });
  const { errors } = methods;
  return (
    <FormContext.Provider value={{ ...methods, errors }}>
      {children}
    </FormContext.Provider>
  );
};

export { FormProvider, FormContext };
