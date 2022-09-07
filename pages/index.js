import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../components/Layout/Header";
import SideBar from "../components/Layout/SideNav";
import { Map } from "../components/Map/map";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Map />
      <SideBar />
    </div>
  );
}
