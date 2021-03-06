import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register'
import Cart from './pages/Cart/Cart';
import Header from './shared/components/Header/Header';
import ProductDetail from './pages/product/component/ProductDetail/ProductDetail';
import ProductList from './pages/product/component/ProductList/ProductList';
import Footer from './shared/components/Footer/Footer';
import Users from './pages/Users/Users';
import Layout from './shared/components/Layout/Layout';
import Admin from './pages/Admin/Admin';
import Contact from './pages/Contact/Contact';
import OrderList from './shared/Orders/OrderList';
import AboutUs from './shared/components/AboutUs/AboutUs';
import ProductEdit from './pages/product/component/ProductEdit/ProductEdit';
import ProductCreate from './pages/product/component/ProductCreate/ProductCreate';

function App() {
  
  return (

    <Layout>
      <Header />
      <Routes>
        <Route path='cart' element={<Cart />} />
        <Route path='login' element={<Login />} />
        <Route path='admin' element={<Admin />} />
        <Route path='contact' element={<Contact />} />
        <Route path='register' element={<Register />} />
        <Route path='/' element={<ProductList />} />
        <Route path='admin/produclist' element={<ProductList />} />
        <Route path='admin/orderlist' element={<ProductList />} />
        <Route path='productdetail/:_id' element={<ProductDetail />} />
        <Route path='productcreate' element={<ProductCreate />} />
        <Route path='productedit/:id' element={<ProductEdit />} />
        <Route path='users' element={<Users />} />
        <Route path='orderList' element={<OrderList />} />
        <Route path='aboutus' element={<AboutUs />} />
      </Routes>
      <Footer />
    </Layout>

  )
}

export default App;

