import React from 'react'
import img from '../Assets/vageta.jpg'

//AccountPage is for Main Profile after Login/SignUp
const AccountPage = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="bg-gray-100 border border-gray-400 w-94 h-screen  justify-center">
        <div className="w-full h-20 bg-white shadow py-7 px-7">
            <p className='font-semibold text-gray-600 text-2xl '>Account Settings</p>
        </div>
        <div className="shadow ">
             <div className="p-4 rounded-lg mx-4  w-72 shrink-0">
            <div className="flex gap-2">
                <img className="size-11 rounded-full" src={img} alt="User Image"/>
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p className='font-medium'>Ankit Mishra</p>
                    </div>
                    <span className="text-xs text-slate-500">ankitmishra16127@gmail.com</span>
                </div>
            </div>
        </div>
          <div className=" p-3 text-sm">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountPage