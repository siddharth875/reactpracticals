import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Components/Layout/Layout.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github from './Components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
    <Route path='' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/:id' element={<User/>}/>
    <Route path='github' element={<Github/>} 
    loader={async()=>{
      const res = await fetch("https://api.github.com/users/hiteshchoudhary");
      return res.json();
    }}
    />
   </Route>
  )
)
// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout/>,
//     children : [
//       {path: "", element: <Home/>},{path: "about", element: <About/>},{path: "contact", element: <Contact/>}
//     ]
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
