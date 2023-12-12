import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Companies from './components/Companies'
import Searching from './components/Searching';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/components' element={<Companies/>} />
        <Route path='/search' element={<Searching/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
