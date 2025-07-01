import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./layout/Layout";
import Loading from "./loading/Loading";

// import AboutUs from "./pages/AboutUs";
// import HomeUs from "./pages/HomeUs";
// import NewsUs from "./pages/NewsUs";
// import ContactUs from "./pages/ContactUs";
// import ServicesUs from "./pages/ServicesUs";
// import NotfounPage from "./pages/NotfounPage";

const HomeUs = lazy(() => import("./pages/HomeUs"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const NewsUs = lazy(() => import("./pages/NewsUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const ServicesUs = lazy(() => import("./pages/ServicesUs"));
// const Loading = lazy(() => import("./loading/Loading"));
const NotfounPage = lazy(() => import("./pages/NotfounPage"));
// const Layout = lazy(() => import("./layout/Layout"));
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<HomeUs />} />
            <Route path="aboutUS" element={<AboutUs />} />
            <Route path="contactUS" element={<ContactUs />} />
            <Route path="newsUS" element={<NewsUs />} />
            <Route path="servicesUS" element={<ServicesUs />} />
          </Route>
          <Route path="*" element={<NotfounPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
