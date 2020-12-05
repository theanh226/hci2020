import Head from "next/head";
import Layout from "../layouts";
import LandingPage from "./landing-page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Student Group Finder</title>
        <link
          rel="icon"
          href="https://cdn4.iconfinder.com/data/icons/electricity/500/Energy_lightning_power_electric_electricity-512.png"
        />
      </Head>
      <LandingPage />
    </div>
  );
}
