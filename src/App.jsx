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
import CollegesPage from './pages/CollegeList'
import EquipmentPage from './pages/Equipment'
import ResearchLabsPage from './pages/ResearchLabs'
import IncubationCentersPage from './pages/Incubation'
import EquipmentDetailPage from './pages/EquipmentDetails'

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

  {
    path: '/recommendedclg',
    element: (
      <>
      <Navbar/>
      <CollegesPage/>
      <Footer/>
      </>
    )
  },

  {
    path: '/equipments',
    element: (
      <>
      <Navbar/>
      <EquipmentPage/>
      <Footer/>
      </>
    )
  },

  {
    path: '/researchlabs',
    element: (
      <>
      <Navbar/>
      <ResearchLabsPage/>
      <Footer/>
      </>
    )
  },

  {
    path: '/incubation',
    element: (
      <>
      <Navbar/>
      <IncubationCentersPage/>
      <Footer/>
      </>
    )
  },

  {
    path: '/equipmentdetails',
    element: (
      <>
      <Navbar/>
      <EquipmentDetailPage/>
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
