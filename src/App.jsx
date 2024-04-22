import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKetentuanPage from "./pages/SyaratKetentuanPage";
import FaqPage from "./pages/FaqPage";
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/randpill-course/" Component={HomePage} />
        <Route path="/randpill-course/kelas" Component={KelasPage} />
        <Route
          path="/randpill-course/testimonial"
          Component={TestimonialPage}
        />
        <Route
          path="/randpill-course/syarat-ketentuan"
          Component={SyaratKetentuanPage}
        />
        <Route path="/randpill-course/faq" Component={FaqPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
