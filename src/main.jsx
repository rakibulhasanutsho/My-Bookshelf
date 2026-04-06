import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layout/Mainlayout';
import Homepage from './Pages/homepage/Homepage';
import Books from './Pages/books/Books';

const router = createBrowserRouter([
  {
    path: "/",
    element : <MainLayout></MainLayout>,
    children : [
      {
        index:true,
        element: <Homepage></Homepage>
      },
      {
        path:"/books",
        element:<Books></Books>
      }
    ]
    
    
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
