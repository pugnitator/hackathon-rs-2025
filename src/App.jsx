import { Routes, Route } from "react-router-dom";
import { MainPage, FavouritesPage, NotFoundPage } from "./pages";
// import { Header } from './components'
import "./App.css";
import { Header } from "./components/header";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/teammate" element={
            <>
              <Header />
              <MainPage /> {/* подставить нужную страницу */}
            </>
          }
        />
        <Route path="/favorites" element={
            <>
              <Header />
              <FavouritesPage />
            </>
          }
        />
        <Route path="*" element={
            <>
              <Header />
              <NotFoundPage />
            </>
          }
        />
      </Routes>
    </>
  );
};
