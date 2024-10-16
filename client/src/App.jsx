import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import BackToTop from "./components/UI/BackToTop";
import Footer from "./components/UI/Footer";
import HomePage from "./pages/HomePage";
import Upload from "./pages/Upload";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <BackToTop />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
