
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
const VerificationProgress = () => {

  const user = useSelector((state) => state.user);
  const steps = useSelector((state) => state.user.verificationSteps);
  const startedAt = useSelector((state) => state.user.VerificationStartedAt);
  const progressPercent = (steps.filter(s => s.completed).length / steps.length) * 100;

 const navigate = useNavigate();
  return (

    <section className="bg-white w-full overflow-x-hidden  pb-4 flex flex-col gap-12  ">
        <div className="relative flex items-center justify-center z-40 bg-gradient-to-b from-blue-400 via-blue-300 to-amber-100 h-30 w-full ">
        <span className="absolute top-10 left-5 p-2 bg-white rounded-full w-34 h-34 flex items-center justify-center">
          {<img src={user.profileImage || '/svgs/camera-icon.svg'} alt="profile" /> }
        </span>
         
          <span className="absolute cursor-pointer  top-4 right-5 p-2 bg-white rounded-full w-8 h-8 flex items-center justify-center" 
          onClick={() => navigate("/student-dashboard/profile")}>
            <img src="/svgs/cancel.svg" width={30}/>
          </span>
        
        <div className="flex text-center md:place-self-center place-self-start justify-start flex-col">
            <h1 className="text-white">Account Verification</h1>
            <p className="text-sm text-blue-800">Complete the Verification to Unlock All Features</p>
        </div>
      </div>

      <div className="  flex flex-col px-7 relative">
            <p className="text-xl font-bold">{user.name}</p>
            <p className="text-gray-500 text-sm mt-2">{user.role}</p>
            <p className="text-gray-500 text-sm">{user.location || 'set location'}</p>
            
         <div className="mt-4 text-sm text-gray-600 absolute right-5">
          <p><span className="font-semibold">Verification in progress</span></p>
          <p>Started on <span className="text-gray-700">{startedAt}</span></p>
         </div>
        </div>
         
      <div className="p-4">

       <div className="w-full bg-gray-200 h-2 mt-4 rounded">
          <div className="bg-green-500 h-2 rounded" style={{ width: `${progressPercent}%` }}></div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-700 mt-2">
          {steps.map((step, ) => (
            <div key={step.id} className="flex-1 text-center space-y-2">
            {step.completed?<img src="/svgs/completed-icon.svg" alt="check" className="w-6 h-6 mx-auto" />: <img src="/svgs/not-completed-icon.svg" alt="pending" className="w-5 h-5 mx-auto" />}
            <p className="mt-1">{step.label}</p>
        
            </div>
          ))}
        </div>
      </div>

      
      <div className="mt-4 space-y-3 p-4">
        {steps.map((step) => (
          <div key={step.id} className="bg-gray-50 p-3 rounded-lg flex md:gap-10">
            <div className="flex gap-3 ">
                 {step.completed ? (
                  <img src="/svgs/filled-checkbox.svg" alt="check" className="w-6 h-6 text-green-500" />
                ) : (
                  <img src="/svgs/checkbox.svg" alt="in progress" className="w-6 h-6 text-gray-500" />
                )}

              <span className="font-medium flex flex-col gap-1 ">
                <h2 className="text-base md:text-xl">{step.label}</h2>
                <p className="text-xs md:text-sm text-gray-500">
                {step.completed ? step.success:step.inProgress}
                </p>
                {step.documentFront && step.documentBack &&(
                    <div className="flex gap-2 mt-2">
                        <div className="w-1/2">
                            <img className='w-full h-full object-fit'src={step.documentFront} alt="" />
                        </div>
                        <div className="w-1/2">
                            <img className='w-full h-full object-fill'src={step.documentBack} alt="" />
                        </div>
                    </div>
                )}
                {step.uploadedOn && step.completed &&
                    <p className="text-xs md:text-sm text-green-500 flex items-center"><img src="/svgs/tick.svg" width={14} /> Uploaded on {step.uploadedOn}</p>
                }
                {step.verifiedOn && step.completed &&
                    <p className="text-xs md:text-sm text-green-500 flex items-center"><img src="/svgs/tick.svg" width={14} /> Verified on {step.verifiedOn}</p>
                }
                <span className="text-xs text-gray-500 inline-flex items-center gap-1">
                    {step.reviewStartedOn && !step.completed &&
                    <p className="text-xs md:text-sm text-gray-500 flex items-center"> <img src="/svgs/not-completed-icon.svg" width={14} /> &nbsp;Started on {step.reviewStartedOn}</p>
                    }
                         &nbsp;
                    {step.estimatedCompletion && 
                    <p className="text-xs md:text-sm text-gray-500">Estimated Completion: {step.estimatedCompletion}</p>
                   }
                </span>
              </span>   
             
            </div>


            <span className={`text-xs font-semibold px-2 py-1 h-6 w-22 flex items-center justify-center rounded ${step.completed ? 'bg-green-100 text-green-700' : 'bg-primary text-gray-500'}`}>
              {step.completed ? 'Completed' : 'in Progress'}
            </span>
          </div>
        ))}
        <p className="text-sm mt-10 text-gray-500">Need help with verification? <span>Contact Support</span></p>
      </div>
       
    </section>
  );
};

export default VerificationProgress;
