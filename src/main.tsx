import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import router from './router/router.tsx'
import { store } from '@/store/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<Provider store={store}>
  <RouterProvider router={router} />
</Provider>)
