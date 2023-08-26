// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";


// const router = createBrowserRouter([

// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//  <RouterProvider router={router} />
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import {

  RouterProvider,
} from "react-router-dom";
import {router} from './Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<div className='max-w-screen-lg mx-auto'>
  <RouterProvider router={router} />
  </div>

  </React.StrictMode>,
)