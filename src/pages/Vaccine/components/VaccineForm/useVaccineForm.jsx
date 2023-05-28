import { useContext } from 'react';
import { FormContext } from 'context';
import { useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export const useVaccineForm = () => {
  const method = useContext(FormContext);
  const { register, control, handleSubmit, reset, setValue } = method;
  const isVaccinated = useWatch({ control, name: 'vaccinated' });
  const step = useWatch({ control, name: 'step' });
  const waitingFor = useWatch({ control, name: 'waitingFor' });
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/tips');
  };
  return {
    register,
    handleSubmit,
    reset,
    setValue,
    isVaccinated,
    step,
    waitingFor,
    onSubmit,
  };
};
