import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Provider } from 'react-redux'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Product from './Pages/Product/Product'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import Cart from './Pages/Cart/Cart'
import store from './redux/store'

const router = createBrowserRouter([
  {
      path:"/",
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/products',
          element:<Products/>
        },
        {
          path:'/product/:id',
          element:<Product/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/cart',
          element:<Cart/>
        }
      ]
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);