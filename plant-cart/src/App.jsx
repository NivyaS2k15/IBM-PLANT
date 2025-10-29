
import './App.css'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Cart from './pages/Cart'
import Footer from './components/Footer'

function App() {
  

  return (
   <>
   <BrowserRouter>
   <Routes>
  <Route path='/' element ={<Home/>} />
  <Route path='/wishlist' element ={<Wishlist/>} />
   <Route path='/cart' element ={<Cart/>} />
  <Route path='/:id/view' element ={<View/>} />
  <Route path='/*' element ={<Pnf/>} />



  
   </Routes>
   {/* footer part  */}
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
