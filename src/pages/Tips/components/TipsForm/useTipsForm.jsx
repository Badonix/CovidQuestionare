import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext, useWatch } from 'react-hook-form';
export const useTipsForm = () => {
  const [hasSubmited, setHasSubmited] = useState(false);
  const { register, handleSubmit, setValue } = useFormContext();
  const navigate = useNavigate();
  const watchedFields = useWatch();

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
    setHasSubmited(true);
    setTimeout(() => {
      navigate('/thanks');
    }, 2000);
  };
  return {
    register,
    handleSubmit,
    onSubmit,
    hasSubmited,
  };
};
