import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Logout() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate("/login");
    }, 1500);
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
          onSubmit={handleLogout}
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Logout</h2>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 font-medium transition"
          >
            Logout
          </button>
        </form>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white p-6 rounded shadow text-center">
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
