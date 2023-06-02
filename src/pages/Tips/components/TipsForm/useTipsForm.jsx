import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormContext, useWatch } from 'react-hook-form';
export const useTipsForm = () => {
  const [hasSubmited, setHasSubmited] = useState(false);
  const { register, handleSubmit, setValue } = useFormContext();
  const navigate = useNavigate();
  const watchedFields = useWatch();

  useEffect(() => {
    localStorage.setItem('tips', JSON.stringify(watchedFields));
  }, [watchedFields, setValue]);
  useEffect(() => {
    if (
      localStorage.getItem('private_validated') != 'true' ||
      localStorage.getItem('condition_validated') != 'true' ||
      localStorage.getItem('vaccine_validated') != 'true'
    ) {
      navigate('/vaccine');
    }
  });
  const onSubmit = (data) => {
    setHasSubmited(true);
    localStorage.setItem('tips_validated', true);
    setTimeout(() => {
      navigate('/thanks');
    }, 2000);
  };
  !JSON.parse(localStorage.getItem('tips'))?.offlineDays ||
    (!JSON.parse(localStorage.getItem('tips'))?.onlineMeets &&
      localStorage.setItem('tips_validated', false));
  return {
    register,
    handleSubmit,
    onSubmit,
    hasSubmited,
  };
};
