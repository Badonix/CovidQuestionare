import { useNavigate } from 'react-router-dom';
import { useFormContext, useWatch } from 'react-hook-form';
import { useEffect } from 'react';
export const useCovidConditionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useFormContext();
  const watchedFields = useWatch();
  const hadCovid = watchedFields.hadCovid;
  const hadAntibodyTest = watchedFields.antiBody;

  useEffect(() => {
    localStorage.setItem('covidCondition', JSON.stringify(watchedFields));
  }, [watchedFields, setValue]);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('private_validated') != 'true') {
      navigate('/privateinfo');
    }
  });
  const onSubmit = (data) => {
    localStorage.setItem('condition_validated', true);
    navigate('/vaccine');
  };
  errors && localStorage.setItem('condition_validated', false);

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
