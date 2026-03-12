import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayOut } from './Layout/layout.tsx';
import { Book } from './pages/client/book.tsx';
import { Home } from './pages/client/home.tsx';
import { Login } from './pages/client/auth/login.tsx';
import { Register } from './pages/client/auth/register.tsx';
import 'styles/styles.scss'
import App from './App.tsx';
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
     <RouterProvider router={router} />

    </App>
  </StrictMode>,
)
