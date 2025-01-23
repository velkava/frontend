import { FC, PropsWithChildren } from "react";

declare global {
  /**
   * A semantic type for container components in a React application.
   *
   * This type provides clarity by explicitly differentiating container components
   * from presentational components. Container components typically handle logic,
   * state management, or data fetching, and pass props down to presentational components.
   *
   * Using this type improves code readability and enforces a clear separation of concerns.
   *
   * @template P The type of the props accepted by the component. Defaults to an empty object (`{}`).
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export type ContainerComponent<P = {}> = FC<PropsWithChildren<P>>;

  /**
   * A semantic type for presentational components in a React application.
   *
   * This type provides clarity by explicitly differentiating presentational components
   * from container components. Presentational components are focused on rendering UI,
   * often stateless and relying solely on the props passed to them.
   *
   * Using this type improves code readability and enforces a clear separation of concerns.
   *
   * @template P The type of the props accepted by the component. Defaults to an empty object (`{}`).
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export type PresentationalComponent<P = {}> = FC<PropsWithChildren<P>>;
}

export {}