import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage";
import SubscriberPage from "./pages/SubscriberPage";
import SubNamesPage from "./pages/SubNamesPage";
import SingleSubscriberPage from "./pages/SingleSubscriberPage";
import PageNotFound from "./pages/PageNotFound";

axios.defaults.baseURL = "https://almabetter-yt-subscribers.onrender.com/";
axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscribers" element={<SubscriberPage />} />
        <Route path="/subscribers/names" element={<SubNamesPage />} />
        <Route path="/subscribers/:id" element={<SingleSubscriberPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
