import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Calendar from "./pages/Calendar";
import Calculator from "./pages/Calculator";
import AboutUs from "./pages/AboutUs";
import NatalChart from "./pages/NatalChart";
import Synastry from "./pages/Synastry";
import Progressions from "./pages/Progressions";
import Compatibility from "./pages/Compatibility";
import LunarNodes from "./pages/LunarNodes";
import Retrogrades from "./pages/Retrogrades";
import Aspects from "./pages/Aspects";
import CareerAstrology from "./pages/CareerAstrology";
import Transits from "./pages/Transits";
import Palmistry from "./pages/Palmistry";
import Guruji from "./pages/Guruji";
import Reading from "./pages/Reading";
import Vastu from "./pages/Vastu";
import Astrology from "./pages/Astrology";
import Gemmology from "./pages/Gemmology";
import FaceReading from "./pages/FaceReading";
import Insights from "./pages/Insights";
import Blogs from "./pages/Blogs";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/natal-chart" element={<NatalChart />} />
        <Route path="/synastry" element={<Synastry />} />
        <Route path="/progressions" element={<Progressions />} />
        <Route path="/compatibility" element={<Compatibility />} />
        <Route path="/lunar-nodes" element={<LunarNodes />} />
        <Route path="/retrogrades" element={<Retrogrades />} />
        <Route path="/aspects" element={<Aspects />} />
        <Route path="/career-astrology" element={<CareerAstrology />} />
        <Route path="/transits" element={<Transits />} />
        <Route path="/palmistry" element={<Palmistry />} />
        <Route path="/guruji" element={<Guruji />} />
        <Route path="/vastu" element={<Vastu />} />
        <Route path="/astrology" element={<Astrology />} />
        <Route path="/gemmology" element={<Gemmology />} />
        <Route path="/face-reading" element={<FaceReading />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  );
}
