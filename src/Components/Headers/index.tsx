import React, { useContext } from "react";
import Callout from "plaid-threads/Callout";
import Button from "plaid-threads/Button";
import InlineLink from "plaid-threads/InlineLink";

import Link from "../Link";
import Context from "../../Context";

import styles from "./index.module.scss";

const Header = () => {
  const {
    itemId,
    accessToken,
    linkToken,
    linkSuccess,
    isItemAccess,
    backend,
  } = useContext(Context);

  return (
    <div className={styles.grid}>
      <h3 className={styles.title}>Plaid API Testing</h3>

      {!linkSuccess ? (
        <>
          <h4 className={styles.subtitle}>
            API Testing of Plaid API Using Golang
          </h4>
          <p className={styles.introPar}>
            This is a simulation of how the Plaid API functions
            with a Golang backend. This login information is
            not real but the accessing of the endpoints is.
          </p>
          {/* message if backend is not running and there is no link token */}
          {linkToken == null || backend === false ? (
            <Callout warning>
              Unable to fetch link_token: please make sure your backend server
              is running and that your .env file has been configured with your
              <code>PLAID_CLIENT_ID</code> and <code>PLAID_SECRET</code>.
            </Callout>
          ) : linkToken === "" ? (
            <div className={styles.linkButton}>
              <Button large disabled>
                Loading...
              </Button>
            </div>
          ) : (
            <div className={styles.linkButton}>
              <Link />
            </div>
          )}
        </>
      ) : (
        <>
          {isItemAccess ? (
            <h4 className={styles.subtitle}>
              Success! A test account was linked which created an{" "}
              <InlineLink
                href="http://plaid.com/docs/quickstart/glossary/#item"
                target="_blank"
              >
                Item
              </InlineLink>
              .
            </h4>
          ) : (
            <h4 className={styles.subtitle}>
              <Callout warning>
                Unable to create an item. Please check your backend server
              </Callout>
            </h4>
          )}
          <div className={styles.itemAccessContainer}>
            <p className={styles.itemAccessRow}>
              <span className={styles.idName}>item_id</span>
              <span className={styles.tokenText}>{itemId}</span>
            </p>

            <p className={styles.itemAccessRow}>
              <span className={styles.idName}>access_token</span>
              <span className={styles.tokenText}>{accessToken}</span>
            </p>
          </div>
          {isItemAccess && (
            <p className={styles.requests}>
              By creating a test account, you now have an access_token
              which can be used to make all of the requests from the
              backend:
            </p>
          )}
        </>
      )}
    </div>
  );
};

Header.displayName = "Header";

export default Header;
