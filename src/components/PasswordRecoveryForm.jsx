import { useForm } from "react-hook-form";
import emailIcon from '/svgs/email-icon.svg'
import leftArrow from '/svgs/left-arrow-icon.svg'
import { Link, useParams } from "react-router-dom";
function PasswordRecoveryForm(){
    const{register,handleSubmit,formState:{errors}}=useForm();
    const {role}=useParams();

    function onSubmit(data){
        console.log(data);
    }

    return(
        <div className="w-full max-w-xl flex flex-col border rounded-xl py-25 px-5 relative ">
            <Link to={`/auth/login/${role}`}>
            <img src={leftArrow} alt="left-arrow-icon"className="absolute w-6 h-6  top-8 cursor-pointer" />
            </Link>
            
            <h1 className="text-center text-black text-2xl ">Password Recovery</h1>
            <p className="text-center mt-2 text-gray-500">Enter your email to recover your password</p>

            <form 
            className="w-full flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mt-7 relative">
                <img src={emailIcon} alt="email icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                    className="w-full border border-gray-400 px-12 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-100"
                    type='email'
                    {...register('email',{required:'email address is required',
                        pattern:{
                            message:'Please enter a valid email address'
                        }
                        })}
                        />
                    
                </div>
                {errors.email && <p>{errors.email.message}</p>}

                <button
                className="w-50 self-center mt-4 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold py-3 rounded-md transition duration-200" 
                type="submit">
                Recover password
                </button>
            </form>
            
        </div>
    )
}
export default PasswordRecoveryForm;