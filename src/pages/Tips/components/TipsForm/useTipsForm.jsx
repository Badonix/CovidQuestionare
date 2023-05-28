import { useContext } from 'react';
import { FormContext } from '@/context';
import { useNavigate } from 'react-router-dom';
export const useTipsForm = () => {
  const method = useContext(FormContext);
  const { register, handleSubmit } = method;
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/thanks');
  };
  return {
    register,
    handleSubmit,
    onSubmit,
  };
};
