import { Routes, Route } from 'react-router-dom'
import { MainPage, FavouritesPage, NotFoundPage } from './pages'
import { Header } from './components'
import './App.css'

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/teammate' element={<MainPage />} />  {/* подставить нужную страницу */}
        <Route path='/favorites' element={<FavouritesPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}