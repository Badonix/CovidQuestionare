import { useContext, useEffect } from 'react';
import { FormContext } from '@/context';
import { useNavigate } from 'react-router-dom';
import { useWatch } from 'react-hook-form';
export const useTipsForm = () => {
  const method = useContext(FormContext);
  const { register, handleSubmit, control, setValue } = method;
  const navigate = useNavigate();
  const watchedFields = useWatch({ control });

  useEffect(() => {
    const tipsData = JSON.parse(localStorage.getItem('tips'));

    if (tipsData) {
      Object.entries(tipsData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem('tips', JSON.stringify(watchedFields));
  }, [watchedFields, setValue]);
  const onSubmit = (data) => {
    navigate('/thanks');
  };
  return {
    register,
    handleSubmit,
    onSubmit,
  };
};
