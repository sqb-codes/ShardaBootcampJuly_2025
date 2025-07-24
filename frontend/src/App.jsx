import './App.css'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Dashboard } from './components/pages/Dashboard';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold underline">Welcome to my React App</h1>

      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      
      <div className="flex justify-center items-start mt-10 gap-8">
        <div className="w-1/2">
          {/* Register Component */}
          {/* <Register /> */}
        </div>
        <div className="w-1/2">
          {/* Login Component */}
          {/* <Login /> */}
        </div>
      </div>

    </div>
  )  
}

export default App
