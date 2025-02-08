import './App.css'
import { Button } from './components/buttons'
import { PlusIcon } from './icons/PlusIcons'
import { ShareIcon } from './icons/ShareIcon'
function App() {

  return (
    <>
      {/* <Button startIcon={<PlusIcon size='md' />} endIcon={<ShareIcon size='md'/>} variant="primary" size="sm" onClick={() => {}} text={"hello"}/> */}
      <Button startIcon={<PlusIcon size='md' />} endIcon={<ShareIcon size='md'/>} variant="primary" size="md" onClick={() => {}} text={"hello"}/>
      <Button startIcon={<PlusIcon size='sm' />} endIcon={<ShareIcon size='md'/>} variant="secondary" size="sm" onClick={() => {}} text={"hello"}/>
      <Button startIcon={<PlusIcon size='lg' />} endIcon={<ShareIcon size='md'/>} variant="primary" size="lg" onClick={() => {}} text={"hello"}/>

      </>

  )
}

export default App
