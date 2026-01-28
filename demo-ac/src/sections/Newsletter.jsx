export default function Newsletter() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="md:text-4xl">
          Stay aligned with the Astrochitra
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Receive monthly planetary forecasts, guidance tailored to your sign.
        </p>

        
        <form
          action="https://YOUR_MAILCHIMP_PREFIX.usX.list-manage.com/subscribe/post?u=YOUR_U_ID&amp;id=YOUR_ID"
          method="post"
          target="_blank"
          className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="Your email address"
            required
            className="flex-1 rounded-lg border border-gray-300 px-5 py-3 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
          >
            Subscribe
          </button>
        </form>

        {/* <p className="mt-4 text-sm text-gray-500">
          We respect your inbox. Unsubscribe anytime.
        </p> */}
      </div>
    </section>
  );
}
