import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MaturitySection from "@/components/MaturitySection";
import MethodologySection from "@/components/MethodologySection";
import FindingsSection from "@/components/FindingsSection";
import ComparisonSection from "@/components/ComparisonSection";
import RecommendationsSection from "@/components/RecommendationsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-24 overflow-x-hidden">
        <HeroSection />
        <MaturitySection />
        <MethodologySection />
        <FindingsSection />
        <ComparisonSection />
        <RecommendationsSection />
      </main>
      <Footer />
    </>
  );
}
