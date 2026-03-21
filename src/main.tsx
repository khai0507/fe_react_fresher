import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LayOutClient } from './modules/client/components/LayoutClient/layoutClient.tsx';
import { Book } from './modules/client/pages/book.tsx';
import { Home } from './modules/client/pages/home.tsx';
import { Login } from './features/auth/login/login.tsx';
import { Register } from './features/auth/register/register.tsx';
import 'styles/styles.scss'
import { App } from 'antd';
import { AppProvider } from './shared/context/app.context.tsx';
import ProtectedRoute from './shared/auth/auth.tsx';
import { LayoutAdmin } from './modules/admin/components/layoutAdmin/layoutAdmin.tsx';
import { Dashboard } from './modules/admin/pages/dashboard.tsx';
import { Manager } from './modules/admin/pages/manage.tsx';
import { Role } from './shared/constants/role.ts';
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
      { index: true, element: <Home /> },
      { path: "book", element: <Book /> },
      // Route yêu cầu đăng nhập, ai cũng vào được
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
 // KHU VỰC ADMIN
  {
    path: "/admin",
    element: (
      // Khai báo rõ route này cần quyền ADMIN
      <ProtectedRoute allowedRoles={[Role.ADMIN]}>
        <LayoutAdmin />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "manager", element: <Manager /> },
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
