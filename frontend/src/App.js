import React from 'react'
import './App.css';
import Header from './component/Header/Header';
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import Footer from './component/Footer/Footer';
import MainPage from './screens/MainPage/MainPage';
import Category from './screens/Category/Category';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <main >
         <Route path='/' component={MainPage} exact />  
         <Route path='/category' component={Category} />  
      </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App