import { cn } from "../../lib/utils";

export default function Card({
  children,
  variant = "elevated",
  size = "md",
  accent,
  interactive = false,
  dark = false,
  className,
  ...props
}) {
  const baseClass = "card";

  const variantClasses = {
    default: "",
    elevated: "card-elevated",
    outlined: "card-outlined",
    filled: "card-filled",
  };

  const sizeClasses = {
    sm: "card-sm",
    md: "",
    lg: "card-lg",
    xl: "card-xl",
  };

  const accentClasses = {
    left: "card-accent-left",
    top: "card-accent-top",
    gradient: "card-accent-gradient",
  };

  return (
    <div
      className={cn(
        baseClass,
        variantClasses[variant],
        sizeClasses[size],
        accent && accentClasses[accent],
        interactive && "card-interactive",
        dark && "card-dark",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Card Sub-components
export function CardHeader({ children, icon, className, ...props }) {
  return (
    <div className={cn("card-header", className)} {...props}>
      {icon && <span className="card-header-icon">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3 className={cn("card-title", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardSubtitle({ children, className, ...props }) {
  return (
    <p className={cn("card-subtitle", className)} {...props}>
      {children}
    </p>
  );
}

export function CardBody({ children, className, ...props }) {
  return (
    <div className={cn("card-body", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }) {
  return (
    <div className={cn("card-footer", className)} {...props}>
      {children}
    </div>
  );
}

export function CardLink({ children, href, className, ...props }) {
  return (
    <a href={href} className={cn("card-link", className)} {...props}>
      {children}
      <span className="card-link-arrow">→</span>
    </a>
  );
}

// Specialized Card Types
export function FeatureCard({ icon, title, description, className, ...props }) {
  return (
    <Card
      variant="elevated"
      className={cn("card-feature", className)}
      {...props}
    >
      {icon && <span className="card-feature-icon">{icon}</span>}
      <h4 className="card-feature-title">{title}</h4>
      <p className="card-feature-text">{description}</p>
    </Card>
  );
}

export function ServiceCard({
  icon,
  title,
  description,
  link,
  linkText = "Learn More",
  className,
  ...props
}) {
  return (
    <Card
      variant="elevated"
      className={cn("card-service", className)}
      {...props}
    >
      {icon && <div className="card-service-icon">{icon}</div>}
      <h4 className="card-service-title">{title}</h4>
      <p className="card-service-description">{description}</p>
      {link && (
        <div className="card-service-link">
          <CardLink href={link}>{linkText}</CardLink>
        </div>
      )}
    </Card>
  );
}

export function TestimonialCard({
  text,
  author,
  role,
  avatar,
  className,
  ...props
}) {
  return (
    <Card
      variant="elevated"
      className={cn("card-testimonial", className)}
      {...props}
    >
      <p className="card-testimonial-text">{text}</p>
      <div className="card-testimonial-author">
        <div className="card-testimonial-avatar">
          {avatar || author?.charAt(0).toUpperCase()}
        </div>
        <div>
          <div className="card-testimonial-name">{author}</div>
          {role && <div className="card-testimonial-role">{role}</div>}
        </div>
      </div>
    </Card>
  );
}

export function StatCard({ value, label, className, ...props }) {
  return (
    <Card variant="filled" className={cn("card-stat", className)} {...props}>
      <div className="card-stat-value">{value}</div>
      <div className="card-stat-label">{label}</div>
    </Card>
  );
}
