import React from 'react'
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
const navigate = useNavigate();

  return (
    <div className='min-h-screen flex justify-center items-center '>
      <div className="bg-gray-100 border border-gray-400 w-94 h-screen flex justify-center items-center">
        <div className="w-96 h-[500px] p-6 relative flex flex-col justify-end">
          <div className="space-y-3">
            <div>
              <h1 className='font-bold text-3xl text-gray-800 mb-2'>Welcome to PopX</h1>
              <p className=' text-base text-gray-600 font-normal'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit
               </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <button type='button' onClick={()=> navigate('/SignUp')} className='rounded py-2 w-full bg-[#6C25FF] text-white font-semibold hover:bg-[oklch(38%_.189_293.745)]  cursor-pointer'>
                Create Account
              </button>
              <button type="button" onClick={()=> navigate('/Login')} className='font-semibold rounded py-2 w-full bg-[#CEBAFB] text-[oklch(0.38_0.189_293.745)] hover:bg-[oklch(60.6%_.25_292.717)] hover:text-white cursor-pointer'>
                Already Registered? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage