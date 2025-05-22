"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { offers } from "@/constants";

// Hook to detect if viewport is desktop
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => setIsDesktop(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isDesktop;
}

function OfferCard({ offer, index }: { offer: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isDesktop = useIsDesktop();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, x: 0 }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: isDesktop ? 0 : index * 0.15, // Delay only on mobile
      }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <div className="relative h-48 w-full">
          <div className="absolute top-0 right-0 bg-primary text-white py-1 px-4 rounded-bl-lg z-10 font-bold">
            عرض خاص
          </div>
          <Image
            src={offer.image || "/placeholder.svg"}
            alt={offer.title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-primary">{offer.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-text-gray">{offer.description}</p>
        </CardContent>
        <CardFooter>
          <a
            href={`https://wa.me/+905352785119?text=${encodeURIComponent(
              offer.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-dark-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            احجز العرض الآن
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function OffersSection() {
  return (
    <section
      id="offers"
      className="py-16 bg-gradient-to-b from-white to-gray-50 rounded-xl scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            عروضنا المميزة
          </h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">
            استفد من عروضنا الحصرية على مجموعة متنوعة من الخدمات الطبية
            والتجميلية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <OfferCard key={offer.id} offer={offer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
