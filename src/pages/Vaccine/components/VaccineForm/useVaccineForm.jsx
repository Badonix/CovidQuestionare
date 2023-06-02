import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export const useVaccineForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useFormContext();
  const watchedFields = useWatch();
  const isVaccinated = watchedFields.vaccinated;
  const step = watchedFields.step;
  const waitingFor = watchedFields.waitingFor;
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('vaccine', JSON.stringify(watchedFields));
  }, [watchedFields, setValue]);
  useEffect(() => {
    if (
      localStorage.getItem('private_validated') != 'true' ||
      localStorage.getItem('condition_validated') != 'true'
    ) {
      navigate('/covid-condition');
    }
  });
  const onSubmit = (data) => {
    localStorage.setItem('vaccine_validated', true);
    navigate('/tips');
  };
  errors && localStorage.setItem('vaccine_validated', false);
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
