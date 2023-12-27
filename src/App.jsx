import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/about' element={<AboutPage />}></Route>
        <Route exact path='/search' element={<SearchPage />}></Route>
        <Route exact path='/product/:id' element={<ProductPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
