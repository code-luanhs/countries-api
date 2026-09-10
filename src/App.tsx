import { Routes, Route } from "react-router";
import { HomePage } from "./pages/home";
import { CountryPage } from "./pages/country";
import { NotFoundPage } from "./pages/404";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:id" element={<CountryPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
