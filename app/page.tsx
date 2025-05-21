import type { Metadata } from "next";
import HeroSlider from "@/components/hero-slider";
import OffersSection from "@/components/offers-section";
import ServicesSlider from "@/components/services-slider";
import AboutUs from "@/components/about-us";
import OurApproach from "@/components/our-approach";
import ContactUs from "@/components/contact-us";
import OurJourney from "@/components/our-journey";

export const metadata: Metadata = {
  title: "مركز السياحة الطبية | الرعاية الطبية المتميزة",
  description:
    "مركز متخصص في السياحة الطبية يقدم خدمات طبية متميزة بأيدي نخبة من الأطباء المتخصصين",
  openGraph: {
    title: "مركز السياحة الطبية | الرعاية الطبية المتميزة",
    description:
      "مركز متخصص في السياحة الطبية يقدم خدمات طبية متميزة بأيدي نخبة من الأطباء المتخصصين",
    images: ["/images/clinic-og.jpg"],
  },
};

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#F2F2F2] overflow-x-hidden"
      dir="rtl"
      lang="ar"
    >
      <HeroSlider />
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <OurJourney />
        <OffersSection />
        <ServicesSlider />
        <AboutUs />
        <OurApproach />
        <ContactUs />
      </div>
    </main>
  );
}
