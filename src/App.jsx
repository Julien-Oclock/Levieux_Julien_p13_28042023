import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import SignIn from './pages/SignIn'
import User from './pages/User'

import './styles.scss'

function App() {
  return (
    <BrowserRouter>
      <main className='container content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App