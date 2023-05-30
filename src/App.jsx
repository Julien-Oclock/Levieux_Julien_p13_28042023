import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './Pages/HomePage'
import SignIn from './Pages/SignIn'
import User from './Pages/User'

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