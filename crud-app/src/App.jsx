import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './components/Create'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Read } from './components/Read'
import { Update } from './components/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path='/' Component={Read} />
          <Route path='/create' Component={Create} />
          <Route path='/update' Component={Update}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
