import React from 'react'
import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import SignUpPage from './Components/SignUpPage'
import AccountPage from './Components/AccountPage'
import {Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/> }/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/SignUp' element={<SignUpPage/>}/>
        <Route path='/Account' element={<AccountPage/>}/>
      </Routes>
    </div>
  )
}

export default App