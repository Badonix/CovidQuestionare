import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '@/context';
import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';
export const usePrivateInfoForm = () => {
  const navigate = useNavigate();
  const methods = useContext(FormContext);
  const { control, setValue } = methods;
  const watchedFields = useWatch({ control });

  useEffect(() => {
    const privateInfoData = JSON.parse(localStorage.getItem('privateInfo'));

    if (privateInfoData) {
      Object.entries(privateInfoData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [setValue]);

  useEffect(() => {
    localStorage.setItem('privateInfo', JSON.stringify(watchedFields));
  }, [watchedFields, setValue]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = methods;

  const validateEmail = (email) =>
    email.endsWith('@redberry.ge')
      ? true
      : 'ელფოსტა უნდა დამთავრდეს @redberry.ge-ით';
  const onSubmit = (data) => {
    navigate('/covid-condition');
  };

  return {
    register,
    errors,
    handleSubmit,
    validateEmail,
    onSubmit,
  };
};
