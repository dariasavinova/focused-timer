import { createBrowserRouter } from 'react-router-dom'

import App from '../App.tsx'
import PageNotFound from '../pages/PageNotFound/PageNotFound.tsx'
import Home from '../pages/Home/Home.tsx'
import Timer from '@/pages/Timer/Timer.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/timer',
        element: <Timer />
      },
      {
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
])

export default router