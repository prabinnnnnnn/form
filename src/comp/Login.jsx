import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import {useForm} from 'react-hook-form'
function Login() {
  
  const [hidePassword, setHidePassword] = useState('password')

  const { register, formState,handleSubmit } = useForm({
    defaultValues: {      
      email: '',
      password:''
    },
    mode:'all'
  })

  const { errors } = formState
  
  const onSubmt = (() => {
    
  })

  const onError = ((error) => {
    console.log(error)
  })
  return (
    <div className='h-[70%] w-[27%] border bg-stone-50 flex  p-5 rounded-md max-md:h-[40%] max-md:w-[90%]'>
      <form className='flex flex-col w-full h-full gap-1' onSubmit={handleSubmit(onSubmt,onError)}>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email">Email address</label>
          <input type="email" placeholder='example@gmail.com' name="email" autoComplete='true' id="email"
            className='p-2 bg-white border rounded-md outline-1 outline-sky-400 invalid:outline-red-600'  {...register('email', {
            required: {
              value: true,
              message:'Email address is required'
              },
              pattern:{
                value: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
                message: 'Emali is invalid'
              },
              validate: ((value) => {
                return (
                  value !== 'example@gmail.com' || 'Please enter different email'
                )
              })
            })} />
            
          {!errors.email?.message ? <p className='text-sm text-red-500 error-text'>invalid</p> : <p className='text-sm text-red-500 '>{errors.email?.message}</p>}
        </div>
        
        <div className='relative flex flex-col gap-1'>
          <label htmlFor="password">Password</label>
          <input type={hidePassword} id='password' name='password'
            className='p-2 border rounded-md outline-1 outline-sky-400 invalid:outline-red-500' {...register('password', {
              required: {
                value: true,
                message:'Please create a password'
              },
              minLength: {
                value: 8,
                message:'Your password must contain 8 letters'
              },
              maxLength: {
                value: 18,
                message:'Your password must be less than 18 letters'
              },
              pattern:
                {
                value: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/,
                message:'Password must contain one uppercase and number'
              },
              validate: {
                nospace: (value) => /^(?!.* )/.test(value) || 'Password should not contain space',
                sepcialCharacter: (value) => /^(?=.*[#\$\%\&\*\@])/.test(value) || "Password should contain '@','#','&','*','%','$'" ,
              }
            })} />
          {hidePassword === 'password'? <FaEye className='absolute right-3 top-[45%] cursor-pointer' onClick={()=> setHidePassword('text')} /> : <FaEyeSlash className='absolute right-3 top-[45%] cursor-pointer' onClick={()=> setHidePassword('password')} />}
            {errors.password?.message ? <p className='text-sm text-red-500 '>{errors.password?.message}</p>: <p className='text-sm text-red-500 error-text'>invalid</p>}
        </div>

        <div className='flex flex-col gap-3'>
          <div className='flex justify-between'>
            <div className='flex gap-x-1'>
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className='text-sm opacity-75'>Remember password</label>
            </div>
            <a href="" className='text-sm font-medium text-sky-500 hover:underline'>Forget password</a>
          </div>
          
          <button className='p-2 mt-3 text-white rounded-md bg-sky-500'>Create account</button>
          <div className='flex justify-center'>
            <p className='text-sm opacity-60'>or continues</p>
          </div>
          {/* sign up by others */}
          <div className='flex gap-2'>
            <div className='flex items-center justify-center w-full h-12 border rounded-md'>
              <img src="/google.png" alt="" className='' />
            </div> 
            <div className='flex items-center justify-center w-full h-12 border rounded-md' >
              <img src="/facebook.png" alt="" />
            </div>
            <div className='flex items-center justify-center w-full h-12 border rounded-md'>
              <img src="/instagram.png" alt="" />
            </div>
          </div>
          
          <div className='flex justify-center mt-2 gap-x-1 opacity-70'>
            <p className='text-sm'>Have an account?</p>
            <a href="" className='text-sm underline text-sky-500'>Sign In</a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login