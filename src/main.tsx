import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from './router/router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router} />)
