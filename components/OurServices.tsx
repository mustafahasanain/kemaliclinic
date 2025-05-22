"use client";

import { useRef, useState, useLayoutEffect, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/constants";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () =>
      setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isDesktop;
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isDesktop = useIsDesktop();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: isDesktop ? 0 : Math.floor(index / 2) * 0.2,
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card
        className="relative service-card h-full overflow-hidden shadow-md hover:shadow-lg"
        style={{
          backgroundColor: "#051326",
          border: "3px solid #979DA6",
          textAlign: "center",
          color: "#F2F2F2",
        }}
      >
        {/* Overlay Logo */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <Image
            src="/images/background-overlay.png"
            alt="Background Logo"
            fill
            className="object-contain object-center"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="relative w-full h-36 flex items-center justify-center overflow-hidden">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={120}
              height={120}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <CardHeader className="p-4">
            <CardTitle
              className="text-lg"
              style={{ color: "#F2F2F2", textAlign: "center" }}
            >
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <CardDescription
              className="text-sm line-clamp-2 hidden sm:block"
              style={{ color: "#F2F2F2", textAlign: "center" }}
            >
              {service.description}
            </CardDescription>
          </CardContent>
          <CardFooter className="p-4 pt-0 justify-center">
            <a
              href={`https://wa.me/+905352785119?text=${encodeURIComponent(
                service.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-[#061f40] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              احجز الان
              <ArrowRight className="mr-2 h-5 w-5" />
            </a>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}

export default function ServicesSlider() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const displayedServices = isMobile
    ? services
    : showAll
    ? services
    : services.slice(0, 5);

  return (
    <section id="services" className="py-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          خدماتنا المتميزة
        </h2>
        <p className="text-text-gray text-lg max-w-2xl mx-auto">
          نقدم مجموعة متكاملة من الخدمات الطبية المتميزة بأعلى معايير الجودة
          وبأيدي نخبة من الأطباء المتخصصين
        </p>
      </motion.div>

      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <AnimatePresence>
            {displayedServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {services.length > 5 && !isMobile && (
        <div className="flex justify-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-primary bg-transparent px-8 py-2 text-base font-medium text-primary shadow-sm transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              {showAll ? (
                <>
                  <ChevronUp className="ml-2 h-5 w-5" />
                  عرض أقل
                </>
              ) : (
                <>
                  <ChevronDown className="ml-2 h-5 w-5" />
                  عرض المزيد
                </>
              )}
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
