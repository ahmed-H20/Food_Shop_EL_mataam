import React from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom' 
import Modal from './Modal'

const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <div className='max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20'>
         <form className="card-body" onSubmit={handleSubmit(onSubmit)}>            
            <h3 className="font-bold text-lg">Create an account!</h3>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"  {...register("email")}/>
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered"  {...register("password")}/>
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn bg-green text-white">Signup</button>
            </div>
            <p className='text-center mt-4'>Do you have an account? <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="text-red underline">Signin</button></p>
            <Modal/>
            <div className='flex justify-center space-x-3 my-6'>
                <button className="btn btn-circle">
                    <FaGoogle />
                </button>
                <button className="btn btn-circle">
                    <FaFacebookF />
                </button>
                <button className="btn btn-circle">
                    <FaGithub />
                </button>
               
            </div>
        </form>
    </div>
  )
}

export default Signup
