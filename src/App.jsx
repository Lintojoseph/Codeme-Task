
import Mainroutes from './Routes/Allroutes';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

import {  BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  

  return (
  
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/*'element={<Mainroutes /> } />
        </Routes>
        </BrowserRouter>
        
        
      </div>
      
  
  )
}

export default App
