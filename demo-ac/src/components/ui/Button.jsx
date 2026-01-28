import { cn } from "../../lib/utils";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  loading = false,
  disabled = false,
  block = false,
  className,
  ...props
}) {
  const baseClass = "btn";

  const sizeClasses = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
    xl: "btn-xl",
  };

  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    accent: "btn-accent",
    light: "btn-light",
    dark: "btn-dark",
  };

  return (
    <button
      className={cn(
        baseClass,
        sizeClasses[size],
        variantClasses[variant],
        icon && "btn-icon",
        loading && "loading",
        block && "btn-block",
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {icon && iconPosition === "left" && <span className="icon">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="icon">{icon}</span>}
    </button>
  );
}
