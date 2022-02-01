import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import HomeScreen from './pages/homeScreen/HomeScreen';
import CartScreen from './pages/cartScreen/CartScreen.js';
import Product from './components/product/Product';
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { DatePicker,Row,Col } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import {PATHS } from './core/enums/paths';
//import products from './products';
import { map } from 'rxjs/operators';
import ProductScreen from './pages/productScreen/ProductScreen.js';
import LoginScreen from './pages/loginScreen/LoginScreen.js';
import RegisterScreen from './pages/registerScreen/RegisterScreen.js';
import ProfileScreen from './pages/profileScreen/ProfileScreen.js';
function App() {
  return (
    <div className="App">
      <Header />
       <BrowserRouter>
        <Routes> 
          <Route  path={PATHS.HOME} element={<HomeScreen />} /> 
          { /*  <Route  path={PATHS.PRODUCT} element={<ProductScreen  />} /> */}
        
          { /* // quand on veut creer un route on envoyer des données nom user par exp...
                <Route path={PATHS.ABOUT} element={<Test1 title="{props.title}" />} /> */}

{ /*  <Route  path={PATHS.PRODUCT} element={<ProductScreen   />} /> */}
          
      
            <Route path={PATHS.SIGNIN} element={<LoginScreen />} /> 
            <Route path={PATHS.REGISTER} element={<RegisterScreen />} /> 
            <Route path={PATHS.PROFILE} element={<ProfileScreen />} /> 
            <Route path={PATHS.PRODUCT} element={<ProductScreen />} /> 
            <Route path="/cart/:id"  element={<CartScreen />}   />
        
            <Route path="/" element={<Navigate replace to="/home" />} exact /> 
        
          

        </Routes>
      </BrowserRouter>
      <Footer /> 
      
     
      
       
    
    </div>
  );
}

export default App;
