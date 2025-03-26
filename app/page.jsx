import HeroSection from "@/components/hero";
import Stats from "@/components/stats";
import HowItWorks from "@/components/howItWorks";
import Testimonial from "@/components/testimonial";
import Faqs from "@/components/faqs";
import CtaButton from "@/components/CtaButton";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Home</h1>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <Features />

      {/* Stats Section */}
      <Stats />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonial Section */}
      <Testimonial />

      {/* FAQ Section */}
      <Faqs />

      {/* CTA Section */}
      <CtaButton />
    </>
  );
}
