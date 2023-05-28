import { ErrorMessage } from '@hookform/error-message';
import { PrivateInfoNavigation } from '../PrivateInfoNavigation';
import { usePrivateInfoForm } from './usePrivateInfoForm';
function PrivateInfoForm() {
  const { register, errors, handleSubmit, validateEmail, onSubmit } =
    usePrivateInfoForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full max-w-lg flex flex-col justify-between'
    >
      <div className='flex flex-col gap-11 pt-8'>
        <div className='flex flex-col gap-1 relative'>
          <label className='text-xl font-bold'>სახელი*</label>
          <input
            {...register('firstName', {
              required: 'სახელის ველი აუცილებელია',
              minLength: {
                value: 3,
                message: 'სახელი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
              },
            })}
            className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
            placeholder='იოსებ'
            type='text'
          />
          <p className='text-orange-600 whitespace-nowrap text-base ml-2 absolute -bottom-8'>
            <ErrorMessage errors={errors} name={'firstName'} />
          </p>
        </div>
        <div className='flex flex-col gap-1 relative'>
          <label className='text-xl font-bold'>გვარი*</label>
          <input
            {...register('lastName', {
              required: 'გვარის ველი აუცილებელია',
              minLength: {
                value: 3,
                message: 'გვარი უნდა შედგებოდეს მინიმუმ 3 სიბმოლოსგან',
              },
            })}
            className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
            placeholder='ჯუღაშვილი'
            type='text'
          />
          <p className='text-orange-600 whitespace-nowrap text-base ml-2 absolute -bottom-8'>
            <ErrorMessage errors={errors} name={'lastName'} />
          </p>
        </div>
        <div className='flex flex-col gap-1 relative'>
          <label className='text-xl font-bold'>მეილი*</label>
          <input
            {...register('email', {
              required: 'ელფოსტის ველი აუცილებელია',
              validate: validateEmail,
            })}
            className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
            placeholder='fbi@redberry.ge'
            type='email'
          />
          <p className='text-orange-600 whitespace-nowrap text-base ml-2 absolute -bottom-8'>
            <ErrorMessage errors={errors} name={'email'} />
          </p>{' '}
        </div>
      </div>
      <div className='border-t border-t-black w-72 pt-3'>
        <p className='text-zinc-600 text-base'>
          *-ით მონიშნული ველების შევსება სავალდებულოა
        </p>
      </div>
      <PrivateInfoNavigation />
    </form>
  );
}

export default PrivateInfoForm;
