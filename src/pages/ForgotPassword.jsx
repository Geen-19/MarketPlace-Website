import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import OAuth from '../Components/OAuth'
export default function ForgotPassword() {
  const[email, setEmail] = useState("");
  function onChange (e){
    setEmail(e.target.value);
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
      <div className='flex justify-center flex-wrap items-center mx-auto px-6 py-12 '>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="pics"
          className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form >
         
            <input className='w-full px-4 py-2 text-xl 
            text-grey-700 
            mb-6
            bg-white border-gray-300
             rounded transition ease-in-out'
                type="email" 
                id = "email"           
                value = {email} 
                onChange = {onChange}
                placeholder = "Email Address"
                />

               
                <div className='flex justify-between whitespace-nowrap
                text-sm sm:text-lg'>
                  <p className='mb-6'>Have an account? 
                    <Link to= "/signUp" className='text-red-600 
                    hover:text-red-700 transition duration-200 ease-in-out
                    ml-1'>Register?</Link>
                  </p>
                  <p> <Link to= "/signIn" className='text-blue-600 
                    hover:text-blue-800 transition duration-200 ease-in-out
                    ml-1'>SignIn instead</Link> </p>
                </div>
                <button className='w-full bg-blue-500 text-white px-7 py-3
          text-sm font-medium uppercase rounded shadow-lg
          hover:bg-blue-700 transition duration-150
          active:bg-blue-800' type="submit"> Send reset password
                </button>
          <div className='flex items-center my-4 before:border-t  before:flex-1
          before:border-gray-300
          after:border-t  after:flex-1
          after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAuth />
          </form>
       
        </div>
      </div>
    </section>
  )
}
