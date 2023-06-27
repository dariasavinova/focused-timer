import { Outlet } from 'react-router-dom'

import './styles/base.scss'
import './styles/reset.scss'
import './styles/variables.scss'

import Header from '@/components/Header/Header.tsx'

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Outlet />
    </div>
  </div>
)


export default App