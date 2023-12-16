import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePageDesktop from "./pages/HomePageDesktop";
import SignUpPageDesktop from "./pages/SignUpPageDesktop";
import LoginPageDesktop from "./pages/LoginPageDesktop";
import ContactPageDesktop from "./pages/ContactPageDesktop";
import AboutUsPageDesktop from "./pages/AboutUsPageDesktop";
import CoursesOpenPageDesktop from "./pages/CoursesOpenPageDesktop";
import CoursesPageDesktop from "./pages/CoursesPageDesktop";
import HomePageDesktop1 from "./pages/HomePageDesktop1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/login-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/contact-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/about-us-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/courses-open-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/courses-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/home-page-desktop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePageDesktop />} />
      <Route path="/sign-up-page-desktop" element={<SignUpPageDesktop />} />
      <Route path="/login-page-desktop" element={<LoginPageDesktop />} />
      <Route path="/contact-page-desktop" element={<ContactPageDesktop />} />
      <Route path="/about-us-page-desktop" element={<AboutUsPageDesktop />} />
      <Route
        path="/courses-open-page-desktop"
        element={<CoursesOpenPageDesktop />}
      />
      <Route path="/courses-page-desktop" element={<CoursesPageDesktop />} />
      <Route path="/home-page-desktop" element={<HomePageDesktop1 />} />
    </Routes>
  );
}
export default App;
