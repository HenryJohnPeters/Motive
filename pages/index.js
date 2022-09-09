import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/Layout/Header";
import SideBar from "../components/Layout/SideNav";
import { Map } from "../components/Map/map";
import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.js"></script>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />
      <Map />
      <SideBar />
    </div>
  );
}
