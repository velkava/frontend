/**
 * Defines the possible variants for the Badge component.
 * These variants control the appearance of the badge, including its background color and text style.
 */
export type BadgeVariant =
  /** Represents a neutral badge with a gray background and text. */
  | "neutral"
  /** Represents an error badge, with a red background and text. */
  | "error"
  /** Represents a warning badge, with a yellow background and text. */
  | "warning"
  /** Represents a success badge, with a green background and text. */
  | "success"
  /** Represents an informational badge, with a blue background and text. */
  | "info"
  /** Represents a highlighted badge, with an indigo background and text. */
  | "highlight"
  /** Represents a special badge, with a purple background and text. */
  | "special"
  /** Represents a prominent badge, with a pink background and text. */
  | "prominent";

/**
 * Props for the Badge component.
 */
export type BadgeProps = {
  /**
   * The variant of the badge that controls its appearance.
   * If not provided, the badge will default to the "info" variant.
   */
  variant?: BadgeVariant;

  /**
   * The text content displayed inside the badge.
   * This is a required property, and it should be a string.
   */
  children: string;
};
