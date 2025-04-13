import { useRef, useState } from "react";
import { CrossIcon } from "../icons/Cross";
import { Button } from "./buttons";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
enum ContentType {
    Youtube = 'youtube',
    Twitter = 'twitter'
}
interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
  }

export function CreateContentModal ({open, onClose} : CreateContentModalProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type,setType] = useState(ContentType.Youtube);

    async function addContent () {
        const title = titleRef.current?.value
        const url = linkRef.current?.value
       const response = await axios.post(`${BACKEND_URL}/api/v1/content`,{
            url,
            title,
            type
    },
        {
            headers: {
                "token": localStorage.getItem('token')
            }
        }
    )
    console.log(response)
    onClose();
    console.log(localStorage.getItem('token'));
    }
    return <div>
    {open && <div className="fixed top-0 left-0 flex justify-center w-screen h-screen opacity-100 bg-opacity-60 bg-slate-200">
        <div className="flex flex-col justify-center">
        <span className="p-4 bg-white rounded opacity-100">
            <div className="flex justify-end">
                {/* // Add outside click close */}
                <div onClick={onClose} className="cursor-pointer">
                <CrossIcon />
                </div>
            </div>
            <div className="flex flex-col">
            <Input ref={titleRef} placeholder={"Title"}  />
            <Input placeholder={"Link"} ref={linkRef}/>
            <div className="flex justify-center pt-1">
            <h1 className='font-serif'>Type</h1>
            </div>
            <div className="flex justify-center pt-2"> 
            <div className="p-2">
                <Button size='sm' text="Youtube" variant={type === ContentType.Youtube ? "primary": "secondary"} onClick={() => setType(ContentType.Youtube)} ></Button>
                </div>
            <div className="p-2">
                <Button size='sm' text='Twitter' variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() =>setType(ContentType.Twitter)}></Button>
            </div>
            </div>
            <div className="flex justify-center pt-2">
            <Button onClick={addContent} variant="primary" text="Submit" size="sm" />
            </div>
            </div>
        </span>
        </div> 
        
    </div>}
    </div>

}

