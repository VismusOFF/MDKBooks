import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/header'
import Home from './components/home/home'
import Login from './components/auth/login/login'
import Register from './components/auth/register/register'
import { AuthProvider } from './context'
import AdminTable from './components/table/table'

function App() {

  return (
    <AuthProvider>
    <BrowserRouter>
      <Header></Header>

      <Routes>

        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/table' element={<AdminTable/>}></Route>

      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
