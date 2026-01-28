
import { cn } from "../../lib/utils"; 

export default function Button({ children, variant = "primary", className, ...props }) {
  const base = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-indigo-500",
    outline: "border border-white/40 text-white hover:bg-white/10",
  };

  return (
    <button
      className={cn(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}