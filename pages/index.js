import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <Header />
      </div>
    </main>
  );
}
