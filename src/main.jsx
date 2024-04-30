import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Me from './components/Me.jsx'
import Recent from './components/Recent.jsx'
import Email from './components/Email.jsx'
import AboutMe2 from './components/AboutMe2.jsx'
import Profile from './components/Profile.jsx'
const router =createBrowserRouter([
  {
  path: '/',
  element: <App />,
  children:[
 {
  path: "",
  element:[<About/>,<Me />,<Skills />,<Recent />,<Email />]
 },
 {
  path:"About",
  element:[<Me />,<AboutMe2/>]
 },
 {
  path:"Skills",
  element:<Skills />
 },
 {
  path:"Portfolio",
  element:<Recent />
 },
 {
  path:"Contact",
  element:<Email />

 },
 {
  path:"Profile",
  element:<Profile />

 }


  ]

  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
