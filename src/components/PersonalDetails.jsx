
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
function PersonalDetails() {

    const {
    register,
    handleSubmit,
    formState: { isValid }
   } = useForm({
    mode: 'onChange' 
   });

  const onSubmit = (data) => {
    console.log(data);
  }; 

    const navigate = useNavigate();
 
  return (
    <section className='w-full overflow-x-hidden  ml-0 sm:max-w-xl md:ml-0 md:max-w-2xl bg-gray-50'>
      <span className='flex items-center mb-6 gap-6 w-full pr-4 p-3 bg-primary'>
        <img 
        onClick={()=>navigate(-1)}
        src='/svgs/left-arrow-icon.svg' className='cursor-pointer'width={24}/>
        <h1>Personal Details</h1>
      </span>

      <div className='w-full flex flex-col items-center justify-center pl-3 pr-3'>
       <img 
       src="/imgs/profile.png"  width={150} alt="" />

      <form onSubmit={handleSubmit(onSubmit)} className="w-full p-4 space-y-4 ">
      <div className="flex flex-col w-full">
        
            <input
            type="text"
            {...register('firstname', { required: true })}
            className="border border-gray-300 px-3 py-4 rounded focus:outline-none  focus:border-primary"
            placeholder="First name"
            />
        </div>

        <div className="flex flex-col">
            
            <input
            type="text"
            {...register('lastname', { required: true })}
            className="border border-gray-300 px-3 py-4 rounded focus:outline-none focus:border-primary"
            placeholder="Last name"
            />
      </div>

      <div className="flex flex-col">
       
        <select
          {...register('sex', { required: true })}
          className="border border-gray-300 px-3 py-4 rounded focus:outline-none focus:border-primary"
        >
          <option value="">Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={` px-4 py-2 w-full rounded text-white ${isValid ? 'bg-amber-500 cursor-pointer  hover:bg-amber-600' : 'bg-amber-200 cursor-not-allowed'}`}
      >
        Save
      </button>
    </form>
      </div>
    </section>
  )
}

export default PersonalDetails
