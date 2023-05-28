import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '@/context';

export const usePrivateInfoForm = () => {
  const navigate = useNavigate();
  const methods = useContext(FormContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;

  const validateEmail = (email) =>
    email.endsWith('@redberry.ge')
      ? true
      : 'ელფოსტა უნდა დამთავრდეს @redberry.ge-ით';
  const onSubmit = () => {
    navigate('/covid-condition');
  };

  return {
    register,
    errors,
    handleSubmit,
    validateEmail,
    onSubmit,
  };
};
