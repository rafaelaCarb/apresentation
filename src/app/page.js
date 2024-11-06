import HeroSection from "../components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar></Navbar>
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
