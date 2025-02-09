import { Route, Routes } from "react-router-dom";
import { FavouritesPage, MainPage, NotFoundPage } from "./pages";
import "./App.css";
import { Header } from "./components/header";
import { MemberPage } from "./pages/member-page/member-page.jsx";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/teammate/:id"
          element={
            <>
              <Header />
              <MemberPage />
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              <Header />
              <FavouritesPage />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header />
              <NotFoundPage />
            </>
          }
        />
        <Route
          path="/member-not-exist"
          element={
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
