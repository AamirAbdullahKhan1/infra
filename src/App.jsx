import { useState } from 'react'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MapComponent from './components/Map'
import Stats from './components/Stats'
import Features from './components/Features'
import AboutHome from './components/HomeAbout'
import Footer from './components/Footer'
import Login from './pages/Login'
import Resource from './pages/Resources'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Navbar/>
      <Hero />
      <MapComponent/>
      <Stats />
      <Features />
      <AboutHome/>
      <Footer />
      </>
    )
  },

  {
    path: '/about',
    element: (
      <>
      <Navbar/>
      <AboutPage/>
      <Footer/>
      </>
    )
  },

  {
    path: '/resources',
    element: (
      <>
      <Navbar/>
      <Resource/>
      <Footer/>
      </>
    )
  },

  {
    path: '/contact',
    element: (
      <>
      <Navbar/>
      <ContactPage/>
      <Footer/>
      </>
    )
  },
])


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
