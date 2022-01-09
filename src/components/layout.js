import React from "react";
import { Helmet } from "react-helmet";

import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mori Reality</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Helmet>
      {children}
    </div>
  );
}
