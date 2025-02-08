import './App.css'
import { MainPage } from './Pages/main-page/MainPage'
import { Routes, Route } from 'react-router-dom'
import NotFoundPage from './pages/not-found-page/NotFoundPage'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/teammate' element={<MainPage />} />  {/* подставить нужную страницу */}
        <Route path='/favorites' element={<MainPage />} /> {/* подставить нужную страницу */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App