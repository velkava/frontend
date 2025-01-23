import classNames from "classnames";
import "./Badge.css";
import { BadgeProps, BadgeVariant } from "./Badge.types";

const DEFAULT_BADGE_VARIANT: BadgeVariant = "info";

/**
 * A reusable Badge component.
 *
 * @example
 * ```tsx
 * // Example usage of the Badge component:
 * <Badge variant="success">Success</Badge>
 * <Badge>Info</Badge>
 * ```
 */
const Badge: PresentationalComponent<BadgeProps> = ({
  children,
  variant = DEFAULT_BADGE_VARIANT,
}) => {
  const className = classNames("Badge", {
    [`Badge--${variant}`]: variant,
  });

  return <span className={className}>{children}</span>;
};

export default Badge;
