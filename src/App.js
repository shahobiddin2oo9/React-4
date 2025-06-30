import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import HomeUs from "./pages/HomeUs";
import NewsUs from "./pages/NewsUs";
import ContactUs from "./pages/ContactUs";
import ServicesUs from "./pages/ServicesUs";
import Layout from "./layout/Layout";
import NotfounPage from "./pages/NotfounPage";

function App() {
  return (
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
  );
}

export default App;
