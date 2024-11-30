import React, { Children } from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/Root';
import { Login } from './pages/Login';
import Signup from './pages/Signup';
import BoardList from './pages/board/BoardList';
import BoardWrite  from './pages/board/BoardWrite';

function App() {
    const router = createBrowserRouter([
      {
        path:'/',
        element : <Root/>,
        children: [
        {path: '/login',element:<Login/> },
        {path:'/signup',element:<Signup/>},
        {path:'/board',element:<BoardList/>},
        {path:'/board/new',element:<BoardWrite/>}
        
        ]
      },
    
    ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
