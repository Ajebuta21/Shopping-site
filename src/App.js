import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from './Components/Layout';
import Layouttwo from './Components/Layouttwo';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Product from './Pages/Product';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layouttwo><Home/></Layouttwo> } />
        <Route path='/signup' element={<Layout><Signup/></Layout> } />
        <Route path='/login' element={<Layout><Login/></Layout> } />
        <Route path='/product/:id' element={<Layout><Product/></Layout> } />
      </Routes></>
  )
}

export default App