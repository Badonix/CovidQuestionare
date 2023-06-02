import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
export const usePrivateInfoForm = () => {
  const navigate = useNavigate();
  const {
    setValue,
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext();
  const watchedFields = useWatch();

  useEffect(() => {
    localStorage.setItem('privateInfo', JSON.stringify(watchedFields));
  }, [watchedFields, setValue]);
  const validateEmail = (email) =>
    email.endsWith('@redberry.ge')
      ? true
      : 'ელფოსტა უნდა დამთავრდეს @redberry.ge-ით';
  const onSubmit = (data) => {
    localStorage.setItem('private_validated', true);
    navigate('/covid-condition');
  };
  errors && localStorage.setItem('private_validated', false);

  return {
    register,
    errors,
    handleSubmit,
    validateEmail,
    onSubmit,
  };
};
