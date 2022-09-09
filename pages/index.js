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
      <Header />
      <Map />
      <SideBar />
    </div>
  );
}
