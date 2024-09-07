import React, { Children } from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import { Login } from './pages/Login';

function App() {
    const router = createBrowserRouter([
      {
        path:'/',
        element : <Root/>,
        children: [
        {path: '/login',element:<Login/> }
        
        ]
      },
    
    ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
