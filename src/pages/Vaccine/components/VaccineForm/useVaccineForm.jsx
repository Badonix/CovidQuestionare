import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export const useVaccineForm = () => {
  const { register, handleSubmit, reset, setValue } = useFormContext();
  const isVaccinated = useWatch({ name: 'vaccinated' });
  const step = useWatch({ name: 'step' });
  const waitingFor = useWatch({ name: 'waitingFor' });
  const navigate = useNavigate();
  const watchedFields = useWatch();

  useEffect(() => {
    const vaccineData = JSON.parse(localStorage.getItem('vaccine'));

    if (vaccineData) {
      Object.entries(vaccineData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem('vaccine', JSON.stringify(watchedFields));
  }, [watchedFields, setValue]);
  const onSubmit = (data) => {
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
