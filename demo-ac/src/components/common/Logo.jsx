import "./Logo.css";

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      <img
        src="/astrochitra-logo.png"
        alt="AstroChitra Logo"
        className="w-20 h-20 mb-2 object-contain logo-img"
      />
      {/* <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        AstroChitra
      </span> */}
    </div>
  );
}
