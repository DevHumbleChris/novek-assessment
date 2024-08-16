import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Toaster } from 'sonner'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './pages/Signup.tsx'
import PrivateRoute from './PrivateRoute.tsx'
import Dashboard from './pages/Dashboard.tsx'
import NewFreight from './pages/NewFreight.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/user",
    element: <PrivateRoute />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'new-freight',
        element: <NewFreight />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster richColors />
    <RouterProvider router={router} />
  </StrictMode>,
)
