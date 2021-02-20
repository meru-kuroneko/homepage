import React from 'react';
import { Helmet } from "react-helmet"

const MetaData = () => {

  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>ANFANG - はじまり はじまり -</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@meru_lotte" />
        <meta name="twitter:creator" content="@meru_lotte" />
        <meta property="og:url" content="https://www.meru-lotte.com/" />
        <meta property="og:title" content="ANFUNG  - はじまり はじまり -" />
        <meta property="og:description" content="イラスト制作とホームページ制作" />
        <meta property="og:image" content="https://www.meru-lotte.com/topimage.png" />
      </Helmet>
    </div>
  );
}
export default MetaData;