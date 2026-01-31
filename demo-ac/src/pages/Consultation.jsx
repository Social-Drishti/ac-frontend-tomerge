import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useForm } from "react-hook-form";

export default function Consultation() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    // TODO: Integrate with backend or email service
    alert("Thank you for reaching out. We will respond soon.");
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#FAF7F2] min-h-screen pt-24 pb-12 px-4">
        <section className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="font-yatra text-4xl md:text-5xl font-bold text-[#5f6b3a] mb-4">
            Consultation & Guidance
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-2">
            We welcome your astrology questions, guidance requests, and general
            support inquiries. Our team is committed to providing ethical,
            clear, and supportive responses.
          </p>
          <p className="text-base text-gray-600">You may reach out for:</p>
          <ul className="text-base text-gray-700 mt-2 mb-0 list-disc list-inside">
            <li>Astrology consultations</li>
            <li>Guidance questions</li>
            <li>General support or clarification</li>
          </ul>
        </section>

        <section className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 mb-10">
          <h2 className="font-yatra text-2xl text-[#5f6b3a] mb-6">
            Contact Form
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-5 text-left">
              <label htmlFor="name" className="block font-semibold mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5f6b3a] ${errors.name ? "border-red-500" : "border-gray-300"}`}
                {...register("name", { required: "Full name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="mb-5 text-left">
              <label htmlFor="email" className="block font-semibold mb-1">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5f6b3a] ${errors.email ? "border-red-500" : "border-gray-300"}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-5 text-left">
              <label htmlFor="message" className="block font-semibold mb-1">
                Message / Inquiry<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5f6b3a] ${errors.message ? "border-red-500" : "border-gray-300"}`}
                {...register("message", {
                  required: "Please enter your inquiry",
                })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>
            <div className="mb-5 text-left">
              <label
                htmlFor="contactMethod"
                className="block font-semibold mb-1"
              >
                Preferred Contact Method
              </label>
              <select
                id="contactMethod"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5f6b3a] border-gray-300"
                {...register("contactMethod")}
              >
                <option value="">No preference</option>
                <option value="Email">Email</option>
                <option value="Call">Call</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>
            <div className="mb-5 text-left">
              <label htmlFor="topic" className="block font-semibold mb-1">
                Topic of Inquiry
              </label>
              <input
                id="topic"
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#5f6b3a] border-gray-300"
                {...register("topic")}
                placeholder="e.g. Career, Relationships, General"
              />
            </div>
            <div className="mb-6 text-left text-xs text-gray-500">
              Your information is kept private and used only to respond to your
              inquiry. We never share your details.
            </div>
            <button
              type="submit"
              className="w-full bg-[#5f6b3a] text-white font-semibold py-3 rounded-xl transition disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Consultation"}
            </button>
            {isSubmitSuccessful && (
              <div className="mt-4 text-green-600 text-center">
                Thank you for your inquiry. We will respond within 24-48 hours.
              </div>
            )}
          </form>
        </section>

        <section className="max-w-xl mx-auto mb-10">
          <div className="bg-[#f5f3eb] rounded-lg p-6 text-gray-700 text-sm">
            <h3 className="font-yatra text-lg text-[#5f6b3a] mb-2">
              What Happens Next?
            </h3>
            <ul className="list-disc list-inside mb-2">
              <li>
                Our team will review your inquiry and respond within 24-48
                hours.
              </li>
              <li>
                All guidance is provided ethically and respectfully. We do not
                offer emergency, medical, or legal advice.
              </li>
              <li>Your privacy and comfort are our priority.</li>
            </ul>
          </div>
        </section>

        {/* Optional: Physical Location */}
        <section className="max-w-xl mx-auto mb-10">
          <div className="bg-white rounded-lg p-6 text-gray-700 text-sm border border-gray-100">
            <h3 className="font-yatra text-lg text-[#5f6b3a] mb-2">
              In-Person Consultation (Optional)
            </h3>
            <p>
              If you prefer an in-person session, please mention this in your
              message. Our main location:
            </p>
            <address className="not-italic mt-2 mb-2">
              Astro Chitra, 2nd Floor, Harmony Plaza,
              <br />
              MG Road, Bengaluru, Karnataka 560001
            </address>
            <div className="w-full h-48 rounded overflow-hidden mt-2">
              <iframe
                title="Astro Chitra Location"
                src="https://www.google.com/maps?q=MG+Road+Bengaluru&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              In-person consultations are subject to availability.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
