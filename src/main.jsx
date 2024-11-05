import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
import Product from './Component/ProductCard.jsx'
import Mbepoxy from './Component/Mbepoxy.jsx'

import Floorcoating from './Component/Floorcoating.jsx'
import Crackfiller from './Component/Crackfiller.jsx'
import Granite from './Component/Granite.jsx'
import Grounting from './Component/Grounting.jsx'
import Italian from './Component/Italian.jsx'
import Lamination from './Component/Lamination.jsx'
import Artresign from './Component/Artresign.jsx'
import Whitepaste from './Component/Whitepaste.jsx'
import Contact from './Component/Contact.jsx'
import Electricmaterial from './Component/Electricmaterial.jsx'
import Coatingmaterial from './Component/Coatingmaterial.jsx'
import Coatingprocess from './Component/Coatingprocess.jsx'
import Electricprocess from './Component/Electricprocess.jsx'
import About from './Component/About.jsx'
import Shop from './Component/Shop.jsx'
import ProductPopup from './Component/ProductPopup.jsx'
import CateGrainite from './Component/CateGrainite.jsx'
import CateFloorcoating from './Component/CateFloorcoating.jsx'
import CateWaterproofing from './Component/CateWaterproofing.jsx'
import CateGrouting from './Component/CateGrouting.jsx'
import Roller from './Component/Roller.jsx'
import Brush from './Component/Brush.jsx'
import Spary from './Component/Spary.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/seeproduct' element={<Product/>}/>
      <Route path='/mbepoxy' element={<Mbepoxy/>}/>
      <Route path='/floorcoating' element={<Floorcoating/>}/>
      <Route path='/crackfiller' element={<Crackfiller/>}/>
      <Route path='/granite' element={<Granite/>}/>
      <Route path='/grounting' element={<Grounting/>}/>
      <Route path='/italian' element={<Italian/>}/>
      <Route path='/lamination' element={<Lamination/>}/>
      <Route path='/artresign' element={<Artresign/>}/>
      <Route path='/whitepaste' element={<Whitepaste/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/electricmaterial' element={<Electricmaterial/>}/>
      <Route path='/coatingmaterial' element={<Coatingmaterial/>}/>
      <Route path='/coatingprocess' element={<Coatingprocess/>}/>
      <Route path='/electricprocess' element={<Electricprocess/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/productpopup' element={<ProductPopup/>}/>
      <Route path='/categrainite' element={<CateGrainite/>}/>
      <Route path='/catefloorcoating' element={<CateFloorcoating/>}/>
      <Route path='/catewaterprofing' element={<CateWaterproofing/>}/>
      <Route path='/categrouting' element={<CateGrouting/>}/>
      <Route path='/productpopup' element={<ProductPopup/>}/>
      <Route path='/catelamination' element={<CateFloorcoating/>}/>
      <Route path='/roller' element={<Roller/>}/>
      <Route path='/brush' element={<Brush/>}/>
      <Route path='/spary' element={<Spary/>}/>


    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
