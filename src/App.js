import React from 'react'
import { Route, Routes } from "react-router-dom";
import Layout from './Components/Layout';
import Layouttwo from './Components/Layouttwo';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Product from './Pages/Product';
import Jewelry from './Categories/Jewelry';
import Electronics from './Categories/Electronics';
import Mens from './Categories/Mens';
import Womens from './Categories/Womens';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layouttwo>
              <Home />
            </Layouttwo>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/product/:id"
          element={
            <Layout>
              <Product />
            </Layout>
          }
        />
        <Route
          path="/jewelry"
          element={
            <Layout>
              <Jewelry />
            </Layout>
          }
        />
        <Route
          path="/electronics"
          element={
            <Layout>
              <Electronics />
            </Layout>
          }
        />
        <Route
          path="/men's-clothing"
          element={
            <Layout>
              <Mens />
            </Layout>
          }
        />
        <Route
          path="/women's-clothing"
          element={
            <Layout>
              <Womens />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App