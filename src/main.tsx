import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayOutClient } from './shared/components/client/LayoutClient/layoutClient.tsx';
import { Book } from './pages/client/book.tsx';
import { Home } from './pages/client/home.tsx';
import { Login } from './features/auth/login/login.tsx';
import { Register } from './features/auth/register/register.tsx';
import 'styles/styles.scss'
import { App } from 'antd';
import { AppProvider } from './shared/context/app.context.tsx';
import ProtectedRoute from './shared/auth/auth.tsx';
import { LayoutAdmin } from './shared/components/admin/layoutAdmin/layoutAdmin.tsx';
import { Dashboard } from './pages/admin/dashboard.tsx';
import { Manager } from './pages/admin/manage.tsx';
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <LayOutClient />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "book", 
        element: <Book />,
      },
      {
        path: "home", 
        element: <Home />,
      },
      {
        path: "checkout", 
        element: (
          <ProtectedRoute>
            <div>checkout</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutAdmin />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "manager", 
        element: <Manager />,
      },
    ],
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
