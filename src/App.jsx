import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import { NotFound } from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='*' element={<NotFound />} />
    </>
  )
)

export function App() {
  return <RouterProvider router={router} />
}
