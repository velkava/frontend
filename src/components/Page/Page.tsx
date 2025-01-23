import { FC } from "react";
import { Helmet } from "react-helmet";

import { PageProps } from "./Page.types";
import { APP_NAME } from "shared/constants";

/**
 * A reusable Page component.
 *
 * @example
 * ```tsx
 * // Example usage of the Page component:
 * <Page title="Home" description="Landing page of the application">
 *   <Heading>Home page</Heading>
 * </Page>
 * ```
 */
const Page: FC<PageProps> = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{title || APP_NAME}</title>

        {description && <meta name="description" content={description} />}
      </Helmet>
      {children}
    </>
  );
};

export default Page;
