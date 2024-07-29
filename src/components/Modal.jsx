import React from 'react'
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
const Modal = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    return (
        <dialog id="my_modal_5" className="modal modal-middle  sm:modal-middle">
            <div className="modal-box">           
                <div className="modal-action flex flex-col justify-center mt-0 ">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    htmlFor = "my_modal_5"
                    onClick={()=>document.getElementById('my_modal_5').close()}>✕</button>
                        <h3 className="font-bold text-lg">Login please!</h3>
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
                            <button className="btn bg-green text-white">Login</button>
                        </div>
                        <p className='text-center mt-4'>Donot have an account? <Link to="/signup" className="text-red underline">SignUp Now</Link></p>
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
            </div>
        </dialog>
    )
}

export default Modal
