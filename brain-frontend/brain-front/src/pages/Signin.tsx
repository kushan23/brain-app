import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Brain} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BACKEND_URL } from "../config";

export function Signin (){
    const navigate = useNavigate();
    console.log("HAHHAHHAHHAHAHHHAHAHAHA")
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    async function signin(){
    const password = passwordRef.current?.value
    const username = usernameRef.current?.value
    try {
    const response = await axios.post(BACKEND_URL + "signin",{
        data:{
            username,
            password
        }
    })
    console.log("SUP");
    const jwt = response.data.token;
    localStorage.setItem('token', jwt);
    console.log(response);
    navigate('/dashboard')
    

}catch(e){
    console.log(e);
}
    //redirect to dashboard
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full max-w-md">
          <div className="p-8 bg-white shadow-sm rounded-xl">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Brain className="w-10 h-10 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Sign In</h1>
            </div>
  
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  ref={usernameRef}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="you@example.com"
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
              </div>
  
              <div className="flex items-center justify-between">
                <div className="text-sm">
                </div>
              </div>
              <button
                onClick={signin}
                className="w-full px-4 py-2 font-medium text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Sign In
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );

}


