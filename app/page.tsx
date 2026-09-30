import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SelectedWork from "./components/projects-done";
import Experience from "./components/experiences";
import Technologies from "./components/technologies";
import Footer from "./components/footer";
import Education from "./components/education";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <SelectedWork/>
      <Experience/>
      <Technologies/>
      <Education/>
      <Footer/>
    </div>
  );
}
