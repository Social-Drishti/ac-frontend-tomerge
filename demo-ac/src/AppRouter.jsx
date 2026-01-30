import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Calculator from "./pages/Calculator";
import AboutUs from "./pages/AboutUs";
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
import Vastu from "./pages/Vastu";
import Astrology from "./pages/Astrology";
import Gemmology from "./pages/Gemmology";
import FaceReading from "./pages/FaceReading";
import Insights from "./pages/Insights";
import Blogs from "./pages/Blogs";
import Numerology from "./pages/Numerology";
import Remedies from "./pages/Remedies";
import ThumbReading from "./pages/ThumbReading";
import BirthChartAnalysis from "./pages/BirthChartAnalysis";
import SelfAwareness from "./pages/SelfAwareness";
import Relationships from "./pages/Relationships";
import LifeDirection from "./pages/LifeDirection";
import OAuthCallback from "./pages/OAuthCallback";

export default function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/about" element={<AboutUs />} />
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
          <Route path="/numerology" element={<Numerology />} />
          <Route path="/remedies" element={<Remedies />} />
          <Route path="/thumb-reading" element={<ThumbReading />} />
          <Route
            path="/birth-chart-analysis"
            element={<BirthChartAnalysis />}
          />
          <Route path="/self-awareness" element={<SelfAwareness />} />
          <Route path="/relationships" element={<Relationships />} />
          <Route path="/life-direction" element={<LifeDirection />} />
          <Route path="/auth/callback" element={<OAuthCallback />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
