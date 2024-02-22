import React from 'react'
import {useState} from "react"

interface Form {
    // nama:string,
    email:string,
    password:string,
    // label:string
}

const Profile = {
    name: '',
    email:'',
    age:'',
    address:''
  }
  
  const Activities = {
    hobbies:'baseball',
    FavoriteMeal:'bakso',
    state:'Indonesia'
  }
    
const profileAdded = {...Profile, ...Activities}

const FormHandle = ({email,password}:Form) => {

  const [emailCount, setCount] = useState(0)
  const [update, setUpdate] = useState(false)
  
  const incrementing = ()=>{
    setCount(emailCount + 0)
    if(emailCount === 1){
      setUpdate(false)
    }
    return 
  }

  const decrementing = ()=>{
    setCount(emailCount - 1)
    if(emailCount === 1){
      setUpdate(true)
    }
    return 
  }

 
  return (
    <>
    
      {/* <div className="h-screen flex justify-center items-center bg-blue-400 max-w-full mb-2 ">
            <div className='rounded-md w-96 bg-slate-500 border p-6'>
                <h1 className='capitalize mb-3 text-center border-b-2 p-5 text-3xl font-medium'>login</h1>
                <div className="mb-3 mt-6">
                  <label htmlFor={email} className="block text-base mb-2">email</label>
                  <input type="email" name={email} id="email" className="w-full rounded px-2 py-1 focus:outline-none border" />
                </div>
                <div className="mb-3 mt-6">
                  <label htmlFor={password} className="block text-base mb-2">password</label>
                  <input type="password" name={password} id="password" className="w-full rounded px-2 py-1 focus:outline-none border" />
                </div>
                <div className="flex flex-row justify-between align-middle items-center mb-3 p-2">
                  <input type="checkbox" className="cursor-pointer rounded size-3"id=""/>
                  <label htmlFor="remember-me" className="cursor-pointer">remember me</label>
                  <a href="#" className="capitlize text border-b-white">forgot password?</a>
                </div>
              <div className="mt-1">
                <button className="w-full rounded-md capitalize bg-blue-500 p-2 ">
                {update ? <>

                  <div className="w-96 rounded-md bg-slate-400 justify-center items-center mb-2 p-3">
                    <div className="w-full capitalize bg-gray-200 rounded">
                      u are log in!
                    </div>
                  </div>

                </>: <div className='' onClick={incrementing}>login here</div>}</button>
              </div>

             </div>
       </div> */}
     

    </>

  )
    
  
}

export default FormHandle