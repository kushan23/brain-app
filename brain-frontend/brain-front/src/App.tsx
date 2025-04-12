import './App.css'
import Dashboard from './pages/dashboard';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import ShareDashboard from './components/shareDashboard';
import {Home} from './pages/Home';
function App() {
  
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/share/:id' element={<ShareDashboard/>} />
    </Routes>
  </BrowserRouter>
      
  
}

export default App
