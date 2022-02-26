import React from "react";
import { Helmet } from "react-helmet";
import { setConfig } from "cloudinary-build-url";

import "../styles/global.css";

setConfig({
  cloudName: "morireality",
  apiKey: "465321175721736",
  apiSecret: "71xSUQ9WJBuUtLTVwlBy5BwOQ74",
});

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
