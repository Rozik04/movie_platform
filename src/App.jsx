import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainRouters from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black'>
        <MainRouters/>
      </div>
    </>
  )
}

export default App
