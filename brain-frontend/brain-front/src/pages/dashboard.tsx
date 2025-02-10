import { Button } from '../components/buttons'
import { PlusIcon } from '../icons/PlusIcons'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/card'
import { CreateContentModal } from '../components/createContentModal'
import { useEffect, useState } from 'react'
import { Sidebar } from '../components/sidebar'
import { useContent } from '../hooks/useContent'
import { BACKEND_URL } from '../config'
import axios from 'axios'
function Dashboard() {
  const [modalOpen,setModalOpen] = useState(false);
  const {contents, refresh } = useContent();
  useEffect(() => {
    refresh();
  }, [modalOpen])

  return <div>
    <Sidebar />
    <div className='min-h-screen p-4 bg-gray-100 ml-72 '>
    <CreateContentModal open={modalOpen} onClose={() => { setModalOpen(false)}} />
      <div className='flex justify-end gap-4'>
      <Button size='md' onClick={() =>{ setModalOpen(true) }} variant='primary' text='Add content' startIcon={<PlusIcon size='md' />}></Button>
      <Button size='md' onClick={async () =>{
         const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
            share: true
          },
          {
            headers:{
              "token": localStorage.getItem('token')
            }
          }
        );
          const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
          alert(shareUrl);
          //Add share brain page 
      }} 
      
      variant='secondary' text='Share brain' startIcon={<ShareIcon size='md' />}></Button>
      </div>

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

export default Dashboard
