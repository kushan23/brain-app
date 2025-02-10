import { Input } from "../components/Input"
import { Button } from "../components/buttons"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Signin (){
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    async function signin(){
    const password = passwordRef.current?.value
    const username = usernameRef.current?.value
    try {
    const response = await axios.post(BACKEND_URL + "/api/v1/signin",{
        data:{
            username,
            password
        }
    })
    alert("You are Signed in")
    const jwt = response.data.token;
    localStorage.setItem('token', jwt);
    navigate('/dashboard')

}catch(e){
    console.log(e);
}
    //redirect to dashboard
    }


    return <div className="flex items-center justify-center w-screen h-screen bg-slate-700">
        <div className="bg-white border rounded min-w-48">
            <div className="flex flex-col justify-center">
            <Input placeholder={"Username"} ref={usernameRef}/>
            <Input placeholder={"Passowrd"} type={"password"} ref={passwordRef} />
            <div className="flex justify-center pt-3 pb-3">
            <Button variant='primary' size='md' text='Signin' onClick={signin} />
            </div>
            </div> 

        </div>

    </div>
}


