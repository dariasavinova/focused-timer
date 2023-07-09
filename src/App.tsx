import { Outlet } from 'react-router-dom'

import './styles/base.scss'
import './styles/reset.scss'
import './styles/variables.scss'

import Header from '@/components/Header/Header.tsx'

const App = () => (
  <>
    <Header />
    <div className="container">
      <Outlet />
    </div>
  </>
)


export default App