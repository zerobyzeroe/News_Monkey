
import News from './BaseNews';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Newhel from './Components/Newhel';
import Newspo from './Components/Newspo';
import Newtech from './Components/Newtech';
import Newent from './Components/Newent';
export default class App extends Component {
  render() {
    const router=createBrowserRouter([
      {path:"/",
      element:<><Navbar/><News/></>
    },
      {path:"/health",
    element:<><Navbar /><Newhel/></>},
      {path:"/sports",
    element:<><Navbar /><Newspo/></>},
    {path:"/technology",
      element:<><Navbar /><Newtech/></>},
    {path:"/entertainment",
      element:<><Navbar /><Newent/></>},
    ])
    return (
      <div>
        <RouterProvider router={router}/>
      </div>
    )
  }
}