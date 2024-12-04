import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { NotFound } from './pages/NotFound'
import { Error } from './pages/Error'
import { Login } from './routes/Login'
import { Register } from './routes/Register'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/entrar' element={<Login />} errorElement={<Error />} />
      <Route
        path='/cadastrar'
        element={<Register />}
        errorElement={<Error />}
      />
      <Route path='*' element={<NotFound />} />
    </>
  )
)

export function App() {
  return <RouterProvider router={router} />
}
