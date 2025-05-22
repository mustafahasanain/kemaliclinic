import type { Metadata } from "next";
import {
  HeroSlider,
  OffersSection,
  OurServices,
  AboutUs,
  OurApproach,
  ContactUs,
  OurJourney,
} from "@/components/index";

export const metadata = {
  title: "Kemali Clinic",
  description:
    "مركز متخصص في السياحة الطبية يقدم خدمات طبية متميزة بأيدي نخبة من الأطباء المتخصصين",
  icons: {
    icon: "/images/favicon.ico",
  },
  openGraph: {
    title: "Kemali Clinic",
    description:
      "مركز متخصص في السياحة الطبية يقدم خدمات طبية متميزة بأيدي نخبة من الأطباء المتخصصين",
    images: ["/images/favicon.ico"],
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
        <OurServices />
        <AboutUs />
        <OurApproach />
        <ContactUs />
      </div>
    </main>
  );
}
