"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { slides } from "@/constants";

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full h-[700px] sm:h-[700px] md:h-[800px] lg:h-[800px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[700px] sm:h-[700px] md:h-[800px] lg:h-[800px]">
              {/* Responsive image handling with different images per device */}
              <div className="relative w-full h-full">
                <picture>
                  {/* Mobile image (displayed on screens under 640px) */}
                  {slide.mobileImage && (
                    <source
                      media="(max-width: 639px)"
                      srcSet={slide.mobileImage}
                    />
                  )}
                  {/* Tablet image (displayed on screens 640px-1023px) */}
                  {slide.tabletImage && (
                    <source
                      media="(min-width: 640px) and (max-width: 1023px)"
                      srcSet={slide.tabletImage}
                    />
                  )}
                  {/* Desktop image (displayed on screens 1024px and above) */}
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    priority
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 100vw"
                    quality={90}
                    className="object-cover w-full h-full"
                  />
                </picture>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-almost-black/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-12 lg:p-16 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="max-w-3xl mb-8 md:mb-12"
                >
                  <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-gray-100"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <a
                      href={`https://wa.me/+905352785119?text=${encodeURIComponent(
                        "مرحباً، أود الاستفسار عن خدمات مركز السياحة الطبية"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-white bg-primary px-8 text-base font-bold text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      <MessageSquare className="ml-2 h-5 w-5" />
                      تواصل معنا
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
