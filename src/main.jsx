import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layout/Mainlayout';
import Homepage from './Pages/homepage/Homepage';
import Books from './Pages/books/Books';
import WishList from './Pages/wishlist/WishList';

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
      },
      {
        path:"/wishlist",
        element:<WishList></WishList>
      }
    ]

    
    
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
