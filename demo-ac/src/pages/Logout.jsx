import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useAuth } from "../context/AuthContext";

export default function Logout() {
  const [showModal, setShowModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const { logout, isAuthenticated } = useAuth();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  async function handleLogout(e) {
    e.preventDefault();
    setIsLoggingOut(true);

    try {
      await logout();
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error("Logout error:", err);
      // Still redirect on error
      navigate("/");
    } finally {
      setIsLoggingOut(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-[#faf7f2]">
        <form
          className="bg-[#faf7f2] p-8 rounded-lg shadow-md w-full max-w-md border border-[#654e12]/20"
          onSubmit={handleLogout}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Logout</h2>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 font-medium transition"
            disabled={isLoggingOut}
          >
            {isLoggingOut ? "Logging out..." : "Logout"}
          </button>
        </form>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-[#faf7f2] p-6 rounded shadow text-center">
              <div className="text-green-600 font-bold mb-2">
                You have been logged out.
              </div>
              <div className="text-gray-600 text-sm">
                Redirecting to login...
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
