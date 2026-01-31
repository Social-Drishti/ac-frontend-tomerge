export default function Newsletter() {
  return (
    <section
      className="relative flex justify-center items-center"
      style={{ minHeight: "260px" }}
    >
      {/* Top border image */}
      <img
        src="/strip.png"
        alt="Newsletter frame top border"
        className="absolute top-0 left-0 w-full h-12 object-cover"
        style={{ pointerEvents: "none" }}
      />
      {/* Bottom border image */}
      <img
        src="/strip.png"
        alt="Newsletter frame bottom border"
        className="absolute bottom-0 left-0 w-full h-12 object-cover rotate-180"
        style={{ pointerEvents: "none" }}
      />
      <div
        className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center justify-center"
        style={{
          padding: "8px 0",
          backgroundImage: "url(/strip.png)",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
          backgroundSize: "100% 48px",
          minHeight: "120px",
        }}
      >
        <h2 className="md:text-4xl text-center text-white">
          Stay aligned with the Astrochitra
        </h2>
        <p className="mt-2 text-lg text-gray-200 text-center">
          Receive monthly planetary forecasts, guidance tailored to your sign.
        </p>
        <form
          action="https://YOUR_MAILCHIMP_PREFIX.usX.list-manage.com/subscribe/post?u=YOUR_U_ID&amp;id=YOUR_ID"
          method="post"
          target="_blank"
          className="mt-6 w-full max-w-md flex flex-col sm:flex-row gap-2"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Your email address"
            required
            className="flex-1 rounded-lg border"
          />
          <button
            type="submit"
            className="px-6 py-2 font-medium text-white bg-olive-700 rounded-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
