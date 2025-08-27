import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Logic for if User had't fill one of the credientials Login button will not click
const FormField = ({ id, label, type = 'text', value, onChange }) => (
  <fieldset
    tabIndex={0}
    onClick={(e) => e.currentTarget.querySelector('input')?.focus()}
    className='w-full p-1 border rounded focus-within:border-black focus-within:ring-1 focus-within:ring-black cursor-text'>
    <legend className='text-[oklch(60.6%_.25_292.717)] font-semibold px-1 bg-gray-100'>{label}</legend>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={`Enter your ${label.toLowerCase()}`}
      className='w-full bg-transparent outline-none border-none'
      value={value}
      onChange={onChange}
      autoComplete={type === 'password' ? 'current-password' : 'email'}
    />
  </fieldset>
)

//LoginPage if user had alredy SignUp
const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isFormValid = email.trim() !== '' && password.trim() !== ''

  const navigate = useNavigate()

  const buttonBase = 'w-full font-semibold rounded py-2 text-white disabled:opacity-50 disabled:cursor-not-allowed'
  const buttonEnabled = 'bg-[oklch(60.6%_.25_292.717)] hover:bg-[oklch(38%_.189_293.745)]'
  const buttonDisabled = 'bg-[oklch(0.708_0_0)]'

  return (
    <div className='flex justify-center items-center '>
      <div className="bg-gray-100 border border-gray-400 w-94 h-screen flex justify-center">
        <div className="w-84 mt-10 h-[350px] space-y-4">
          <div className="w-full h-[128px] flex flex-col gap-y-4">
            <p className="font-bold text-3xl leading-none ">Sign in to your PopX account</p>
            <p className='font-normal text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='space-y-6'>
            <FormField id='email' label='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormField id='password' label='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => navigate('/Account')}
              className={`${buttonBase} ${isFormValid ? buttonEnabled : buttonDisabled}`}
              disabled={!isFormValid}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default LoginPage