import './App.css'
import { MainPage } from './Pages/main-page/MainPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/teammate' element={<MainPage />} />  {/* подставить нужную страницу */}
      <Route path='/favorites' element={<MainPage />} /> {/* подставить нужную страницу */}
    </Routes>
    </>
  )
}

export default App