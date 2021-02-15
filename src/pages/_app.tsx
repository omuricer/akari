import React, { useState, useEffect } from "react";
import App, { AppProps } from "next/app";
import Theme from "components/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { ParallaxProvider } from 'react-scroll-parallax';
import "styles/index.scss";
import "styles/destyle.css";
// import "tailwindcss/tailwind.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// TODO: index_old.jsの中身をコンポーネントに移行する!
// require("index_old.js");
import { global_onload } from "index_old.js";

const MyApp: React.FC<AppProps> = (props) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Theme>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <props.Component {...props.pageProps} />; */}
        {/* <ParallaxProvider> */}
        <props.Component {...props.pageProps} onLoad={global_onload} />
        {/* </ParallaxProvider> */}
      </Theme>
    </>
  );
};

export default MyApp;
