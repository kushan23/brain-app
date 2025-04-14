import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Brain, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Signup (){
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    async function signup(){
    const password = passwordRef.current?.value
    const username = usernameRef.current?.value
    const response = await axios.post(BACKEND_URL + "/signup",{
            username,
            password
        })
    
    // alert("You have signed up")
    const jwt = response.data.token;
    localStorage.setItem('token', jwt);
    console.log(response);
    console.log(jwt);
    navigate('/dashboard')
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2 mb-8 text-gray-600 transition-colors hover:text-gray-900">
          <ArrowLeft className="w-5 h-5" />
          Back to home
        </Link>
        
        <div className="p-8 bg-white shadow-sm rounded-xl">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Brain className="w-10 h-10 text-purple-600" />
            <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                type="username"
                ref={usernameRef}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                ref={passwordRef}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="••••••••"
              />
              <p className="mt-1 text-sm text-gray-500">
                Must be at least 8 characters long
              </p>
            </div>

        

            <button
              onClick={signup}
              className="w-full px-4 py-2 font-medium text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              Create Account
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="font-medium text-purple-600 hover:text-purple-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );


    // return <div className="flex items-center justify-center w-screen h-screen bg-slate-700">
    //     <div className="bg-white border rounded min-w-48">
    //         <div className="flex flex-col justify-center">
    //         <Input placeholder={"Username"} ref={usernameRef}/>
    //         <Input placeholder={"Passowrd"} type={"password"} ref={passwordRef} />
    //         <div className="flex justify-center pt-3 pb-3">
    //         <Button variant='primary' size='md' text='Signup' onClick={signup} />
    //         </div>
    //         </div> 

    //     </div>

    // </div>
}


