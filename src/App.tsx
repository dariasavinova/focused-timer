import { Outlet } from 'react-router-dom'
import Header from '@/components/Header/Header.tsx'

import './styles/base.scss'
import './styles/reset.scss'
import './styles/variables.scss'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
