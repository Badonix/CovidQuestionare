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
    const covidConditionData = JSON.parse(
      localStorage.getItem('covidCondition')
    );

    if (covidConditionData) {
      Object.entries(covidConditionData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem('covidCondition', JSON.stringify(watchedFields));
  }, [watchedFields, setValue]);
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
