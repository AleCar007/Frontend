import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/Index'

function App () {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
