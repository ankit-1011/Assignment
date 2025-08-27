import React from 'react'
import { useNavigate } from 'react-router-dom'


//SignUpPage is for if you had't loginIn
const SignUpPage = () => {
  const navigate = useNavigate()

    return (
        <div className='flex justify-center items-center '>
            <div className="bg-gray-100 border border-gray-400 w-94 h-screen flex justify-center">
                <div className=" m-4 p-3 top-10 space-y-5">
                    <p className='font-bold text-3xl leading-none'>Create your PopX Account</p>

                    <fieldset
                        tabIndex={0}
                        onClick={(e) => e.currentTarget.querySelector('input')?.focus()}
                        className='w-full  border rounded focus-within:border-black focus-within:ring-1 focus-within:ring-black cursor-text'>
                        <legend className='text-[#6c25ff] font-semibold px-1 bg-gray-100 text-xs'>Full Name<span className="text-red-500">*</span>
                        </legend>
                        <input
                            type='text'
                            placeholder='Enter your Full Name'
                            className='w-full bg-transparent outline-none border-none p-1'/>
                    </fieldset>

                    <fieldset
                        tabIndex={0}
                        onClick={(e) => e.currentTarget.querySelector('input')?.focus()}
                        className='w-full p-1 border rounded focus-within:border-black focus-within:ring-1 focus-within:ring-black cursor-text'>
                        <legend className='text-[#6c25ff] font-semibold px-1 bg-gray-100 text-xs'>Phone Number<span className="text-red-500">*</span></legend>
                        <input
                            type='number'
                            placeholder='Enter your Phone Number'
                            className='w-full bg-transparent outline-none border-none'/>
                    </fieldset>

                    <fieldset
                        tabIndex={0}
                        onClick={(e) => e.currentTarget.querySelector('input')?.focus()}
                        className='w-full p-1 border rounded focus-within:border-black focus-within:ring-1 focus-within:ring-black cursor-text'>
                        <legend className='text-[#6c25ff] font-semibold px-1 bg-gray-100 text-xs'>Email Address<span className="text-red-500">*</span></legend>
                        <input
                            type='email'
                            placeholder='Enter your Email Address'
                            className='w-full bg-transparent outline-none border-none'/>
                    </fieldset>

                    <fieldset
                        tabIndex={0}
                        onClick={(e) => e.currentTarget.querySelector('input')?.focus()}
                        className='w-full p-1 border rounded focus-within:border-black focus-within:ring-1 focus-within:ring-black cursor-text'>
                        <legend className='text-[#6c25ff] font-semibold px-1 bg-gray-100 text-xs'>Password<span className="text-red-500">*</span></legend>
                        <input
                            type='password'
                            placeholder='Enter your Password'
                            className='w-full bg-transparent outline-none border-none'/>
                    </fieldset>

                    <fieldset
                        tabIndex={0}
                        onClick={(e) => e.currentTarget.querySelector('input')?.focus()}
                        className='w-full p-1 border rounded focus-within:border-black focus-within:ring-1 focus-within:ring-black cursor-text'>
                        <legend className='text-[#6c25ff] font-semibold px-1 bg-gray-100 text-xs'>Company Name<span className="text-red-500">*</span></legend>
                        <input
                            type='text'
                            placeholder='Enter your Company Name'
                            className='w-full bg-transparent outline-none border-none'/>
                    </fieldset>

                    <div className="space-x-2 mb-0">
                        <p className='font-medium gap-2'>Are you an Agency?</p>
                        <label><input type="radio" name="choice" value="yes" />Yes</label>
                        <label><input type="radio" name="choice" value="no" />No</label>
                   </div>
                    <button type="button" onClick={()=> navigate('/Account')} className=' w-full bg-[#6c25ff] p-2 rounded font-semibold text-white hover:bg-[oklch(38%_.189_293.745)] cursor-pointer'>
                        Create Account
                    </button>
                </div>
           </div>
        </div>
    )
}

export default SignUpPage