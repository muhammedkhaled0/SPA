import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
const routes=createHashRouter([
  {
    path:'',element:<Layout/>,children:[
      {
        path:'',element:<Home/>,
      },
      {
        path:'about',element:<About/>
      },
      {
        path:'portfolio',element:<Portfolio/>
      },
      {
        path:'contact',element:<Contact/>
      }
    ]
  }
])
function App() {
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
