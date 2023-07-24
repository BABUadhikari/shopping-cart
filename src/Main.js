import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from './components/Home'
import Products from './components/Products'
import Navigation from './components/Navigation'
import Cart from './components/Cart'

function Main() {
  return (
    <>
    <Router>
    <Navigation/>
    <Routes>
        <Route path='/' exact Component = { Home }></Route>
        <Route path='/products' Component = { Products }></Route>
        <Route path='/cart' Component={ Cart }></Route>
    </Routes>

    </Router>
    </>
  )
}

export default Main


