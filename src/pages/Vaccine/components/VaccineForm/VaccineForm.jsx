import { VaccineNavigation } from '../VaccineNavigation';
import { useWatch } from 'react-hook-form';
import { useContext } from 'react';
import { FormContext } from 'context';
import { useNavigate } from 'react-router-dom';
function VaccineForm() {
  const method = useContext(FormContext);
  const { register, control, handleSubmit, reset, setValue } = method;
  const isVaccinated = useWatch({ control, name: 'vaccinated' });
  const step = useWatch({ control, name: 'step' });
  const waitingFor = useWatch({ control, name: 'waitingFor' });
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/tips');
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full h-auto max-w-lg flex flex-col justify-between'
    >
      <div className='flex flex-col gap-11 pt-8'>
        <div className='flex flex-col gap-5'>
          <label className='text-xl font-bold'>უკვე აცრილი ხარ?*</label>
          <div className='flex items-center gap-3'>
            <input
              {...register('vaccinated', { required: true })}
              value='yes'
              type='radio'
              className='w-6 h-6'
              onChange={() => {
                isVaccinated === 'no' && reset();
                setValue('vaccinated', 'yes');
              }}
            />
            <label className='text-xl'>კი</label>
          </div>
          <div className='flex items-center gap-3'>
            <input
              {...register('vaccinated', { required: true })}
              value='no'
              type='radio'
              className='w-6 h-6'
              onChange={() => {
                isVaccinated === 'yes' && reset();
                setValue('vaccinated', 'no');
              }}
            />
            <label className='text-xl'>არა</label>
          </div>
        </div>
        {isVaccinated === 'yes' && (
          <div className='flex flex-col gap-5'>
            <label className='text-xl font-bold'>აირჩიე რა ეტაპზე ხარ*</label>
            <div className='flex items-center gap-3'>
              <input
                {...register('step', { required: true })}
                value='first dose completed, registered on second'
                type='radio'
                className='w-6 h-6'
              />
              <label className='text-xl whitespace-nowrap'>
                პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('step', { required: true })}
                value='fully vaccinated'
                type='radio'
                className='w-6 h-6'
              />
              <label className='text-xl'>სრულად აცრილი ვარ</label>
            </div>
            <div>
              <div className='flex items-center gap-3'>
                <input
                  {...register('step', { required: true })}
                  value='first dose completed, not registered on second'
                  type='radio'
                  className='w-6 h-6'
                />
                <label className='text-xl whitespace-nowrap'>
                  პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
                </label>
              </div>
              {step === 'first dose completed, not registered on second' && (
                <>
                  <p className='ml-6 mt-4 max-w-230 text-xl '>
                    რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
                  </p>
                  <a
                    className='ml-6 mt-4 text-xl text-blue-500'
                    href='https://booking.moh.gov.ge/'
                  >
                    https://booking.moh.gov.ge/
                  </a>
                </>
              )}
            </div>
          </div>
        )}

        {isVaccinated === 'no' && (
          <div className='flex flex-col gap-5'>
            <label className='text-xl font-bold'>რას ელოდები?*</label>
            <div className='flex items-center gap-3'>
              <input
                {...register('waitingFor', { required: true })}
                value='registered and waiting'
                type='radio'
                className='w-6 h-6'
              />
              <label className='text-xl whitespace-nowrap'>
                დარეგისტრირებული ვარ და ველოდები რიცხვს
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('waitingFor', { required: true })}
                value='not going to'
                type='radio'
                className='w-6 h-6'
              />
              <label className='text-xl'>არ ვგეგმავ</label>
            </div>
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <input
                  {...register('waitingFor', { required: true })}
                  value='already had and going to get vaccinated'
                  type='radio'
                  className='w-6 h-6'
                />
                <label className='text-xl whitespace-nowrap'>
                  გადატანილი მაქვს და ვგეგმავ აცრას
                </label>
              </div>
              {waitingFor === 'already had and going to get vaccinated' && (
                <a
                  className='ml-6 text-xl text-blue-500'
                  href='https://booking.moh.gov.ge/'
                >
                  👉 https://booking.moh.gov.ge/
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      <VaccineNavigation />
    </form>
  );
}

export default VaccineForm;
