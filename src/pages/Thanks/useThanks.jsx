import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const useThanks = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem('private_validated') != 'true' ||
      localStorage.getItem('condition_validated') != 'true' ||
      localStorage.getItem('vaccine_validated') != 'true' ||
      localStorage.getItem('tips_validated') != 'true'
    ) {
      navigate('/vaccine');
    }
  });
};
