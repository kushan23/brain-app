import { useParams } from "react-router-dom"
import { Sidebar } from "./sidebar"
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Card } from "./card";

function ShareDashboard (){
    const [contents,setContents] = useState([]);
    const param = useParams()
    useEffect( () => {
    axios.get(`${BACKEND_URL}/api/v1/brain/${param.id}`)
            .then((response) => {
                setContents(response.data.content)
            })
    }, [] )
    console.log(contents);

    
    return<div>
    <Sidebar />
    <div className='min-h-screen p-4 bg-gray-100 ml-72 '>
       <div className='flex flex-wrap gap-5 pt-2 justify-items-start'>
          {contents.map(({type,url,title}) => 
          <Card 
          title={title} 
          link={url}
          type={type}
          />
          )}
          </div>
          </div>
    
    </div>
}
export default ShareDashboard