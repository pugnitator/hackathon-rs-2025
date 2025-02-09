import {Route, Routes} from "react-router-dom";
import {FavouritesPage, MainPage, NotFoundPage} from "./pages";
import "./App.css";
import {Header} from "./components/header";
import {CreateUser} from "./pages/create-user/create-user.jsx";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/teammate" element={
            <>
              <Header />
              <MainPage /> {/* страничка участнкиа */}
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
          <Route path="/create" element={
              <>
                  <Header/>
                  <CreateUser/>
              </>
          }/>
      </Routes>
    </>
  );
};
