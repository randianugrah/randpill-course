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
        <Route path="/website-course" Component={HomePage} />
        <Route path="/website-course/kelas" Component={KelasPage} />
        <Route path="/website-course/testimonial" Component={TestimonialPage} />
        <Route
          path="/website-course/syarat-ketentuan"
          Component={SyaratKetentuanPage}
        />
        <Route path="/website-course/faq" Component={FaqPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
