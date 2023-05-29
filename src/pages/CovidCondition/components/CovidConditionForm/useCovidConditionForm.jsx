import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '@/context';
import { useWatch } from 'react-hook-form';
import { useEffect } from 'react';
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
  const watchedFields = useWatch({ control });

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
