import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '@/context';
import { useWatch } from 'react-hook-form';

export const useCovidConditionForm = () => {
  const methods = useContext(FormContext);
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = methods;
  const hadCovid = useWatch({ control, name: 'hadCovid' });
  const hadAntibodyTest = useWatch({ control, name: 'antiBody' });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate('/vaccine');
  };
  return {
    register,
    handleSubmit,
    reset,
    setValue,
    errors,
    hadCovid,
    hadAntibodyTest,
    onSubmit,
  };
};
