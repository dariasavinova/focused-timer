import { createBrowserRouter } from 'react-router-dom'

import App from '../App.tsx'
import PageNotFound from '../pages/PageNotFound/PageNotFound.tsx'
import Home from '../pages/Home/Home.tsx'

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
        path: '*',
        element: <PageNotFound />
      }
    ]
  }
])

export default router