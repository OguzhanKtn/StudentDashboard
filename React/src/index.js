import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Register from './Register';
import Home from './Home';


const router = 
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>

</BrowserRouter>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 router 
);

