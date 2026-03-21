import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayOut } from './shared/Layout/layout.tsx';
import { Book } from './pages/client/book.tsx';
import { Home } from './pages/client/home.tsx';
import { Login } from './features/auth/login/login.tsx';
import { Register } from './features/auth/register/register.tsx';
import 'styles/styles.scss'
import { App } from 'antd';
import { AppProvider } from './shared/components/context/app.context.tsx';
import ProtectedRoute from './shared/auth/auth.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut/>,
    children :[

      

      {
        index :true,
        element :<Home/>
        
      },
      {


        path: "/book",
        element: <Book/>
      },
      {
        path: "/Home",
        element: <Home/>,
      },
      {
        path: "/checkout",
        element: <>
        
          <ProtectedRoute>
          <div>checkout</div>

          </ProtectedRoute>
        
        </>,
      },
       {
        path: "/admin",
        element: <>
        <ProtectedRoute>
          <div>admin page</div>

          </ProtectedRoute>
        </>,
      },
     
    ]
  },
   {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <App>

      <AppProvider>
         <RouterProvider router={router} />
       </AppProvider>
     </App>
  </StrictMode>,
)
