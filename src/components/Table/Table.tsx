import classNames from "classnames";
import "./Badge.css";
import { FC } from "react";
import { TableProps } from "./Table.types";

const BLOCK_CLASS = "Table";

/**
 * A reusable Table component.
 *
 * @example
 * ```tsx
 * // Example usage of the Table component:
 * // TODO:
 * ```
 */
const Table: FC<TableProps> = ({ caption, children }) => {
  const className = classNames(BLOCK_CLASS);

  return (
    <table className={className}>
      {caption && <caption>{caption}</caption>}

      {children}
    </table>
  );
};

export default Table;
