import React from 'react'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './Home';
// import Aboutus from './Aboutus';
// import Service from './Service';


export default function Nav() {
  return (
    <BrowserRouter>

      <Routes>
     
        {/* <Route path='/aboutus' element={<Aboutus/>}/> */}
        {/* <Route path='/service' element={<Service/>}/> */}
        <Route path='/' element={<Home/>}/>
        
    </Routes>

    </BrowserRouter>
  )
};