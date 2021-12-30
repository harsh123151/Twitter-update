import './App.css'
import Main from './components/Main'
import Login from './components/login'
import { Context } from './context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Context>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/main' element={<Main />} />
          </Routes>
        </div>
      </Context>
    </Router>
  )
}

export default App
