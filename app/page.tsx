import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { SafariDemo } from "@/components/HowItWorks";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <SafariDemo />
      <Footer />
    </main>
  );
}
