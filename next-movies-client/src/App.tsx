import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/movies" element={<MainPage />} />
        <Route path="*" element={<Navigate replace to="/movies" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
