import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home.jsx';
import Contact from './component/Contact.jsx';
import About from './component/About.jsx';
import Users from './component/Users.jsx';
import UserDetails from './component/UserDetails.jsx';
import Posts from './Posts.jsx';



const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/contacts",
        element:<Contact></Contact>
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        path: "/users",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path: "/user/:userId",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path: "/posts",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      }

      

    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
