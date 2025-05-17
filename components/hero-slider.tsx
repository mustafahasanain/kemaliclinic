"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=800&width=1920",
    title: "رعاية طبية متميزة",
    subtitle: "نقدم أفضل الخدمات الطبية بأيدي نخبة من الأطباء المتخصصين",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=800&width=1920",
    title: "تجربة علاجية فريدة",
    subtitle: "نهتم بكل التفاصيل لضمان تجربة علاجية مريحة وناجحة",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=800&width=1920",
    title: "أحدث التقنيات الطبية",
    subtitle: "نستخدم أحدث التقنيات والأجهزة الطبية لضمان أفضل النتائج",
  },
]

export default function HeroSlider() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh]">
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
            <div className="relative w-full h-full">
              <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-almost-black/80 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="max-w-3xl mb-12"
                >
                  <motion.h1
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-lg md:text-xl mb-6 text-gray-100"
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
                      href={`https://wa.me/+1234567890?text=${encodeURIComponent("مرحباً، أود حجز موعد في مركز السياحة الطبية")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow transition-colors hover:bg-dark-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      احجز الآن
                    </a>
                    <a
                      href={`https://wa.me/+1234567890?text=${encodeURIComponent("مرحباً، أود الاستفسار عن خدمات مركز السياحة الطبية")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center rounded-md border border-white bg-transparent px-8 text-base font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
  )
}
