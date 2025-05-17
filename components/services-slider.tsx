"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Updated services list with the specific services requested
const services = [
  {
    id: 1,
    title: "شد ورفع الصدر",
    description: "عملية شد ورفع الصدر لاستعادة مظهر شبابي وجذاب مع نتائج طبيعية",
    image: "/placeholder.svg?height=400&width=600&text=شد+ورفع+الصدر",
    whatsappMessage: "مرحباً، أود الاستفسار عن عملية شد ورفع الصدر لديكم",
  },
  {
    id: 2,
    title: "شد الوجه مع الذقن والرقبة",
    description: "تقنيات متطورة لشد الوجه والذقن والرقبة للحصول على مظهر أكثر شباباً",
    image: "/placeholder.svg?height=400&width=600&text=شد+الوجه",
    whatsappMessage: "مرحباً، أود الاستفسار عن عملية شد الوجه مع الذقن والرقبة لديكم",
  },
  {
    id: 3,
    title: "شد ونحت الجسم",
    description: "إجراءات متكاملة لشد ونحت الجسم للحصول على قوام متناسق ومشدود",
    image: "/placeholder.svg?height=400&width=600&text=شد+ونحت+الجسم",
    whatsappMessage: "مرحباً، أود الاستفسار عن عمليات شد ونحت الجسم لديكم",
  },
  {
    id: 4,
    title: "حقن الدهون",
    description: "تقنيات آمنة لحقن الدهون الذاتية لتعزيز حجم وشكل مناطق مختلفة من الجسم",
    image: "/placeholder.svg?height=400&width=600&text=حقن+الدهون",
    whatsappMessage: "مرحباً، أود الاستفسار عن إجراءات حقن الدهون لديكم",
  },
  {
    id: 5,
    title: "شد الجفون",
    description: "عمليات دقيقة لشد الجفون وإزالة الترهلات للحصول على نظرة أكثر انتعاشاً",
    image: "/placeholder.svg?height=400&width=600&text=شد+الجفون",
    whatsappMessage: "مرحباً، أود الاستفسار عن عملية شد الجفون لديكم",
  },
  {
    id: 6,
    title: "زراعة وعلاج الاسنان",
    description: "خدمات متكاملة لزراعة وعلاج الأسنان باستخدام أحدث التقنيات",
    image: "/placeholder.svg?height=400&width=600&text=زراعة+الاسنان",
    whatsappMessage: "مرحباً، أود الاستفسار عن خدمات زراعة وعلاج الاسنان لديكم",
  },
  {
    id: 7,
    title: "تجميل الانف",
    description: "عمليات تجميل الأنف بتقنيات متطورة للحصول على شكل متناسق ووظيفة تنفسية أفضل",
    image: "/placeholder.svg?height=400&width=600&text=تجميل+الانف",
    whatsappMessage: "مرحباً، أود الاستفسار عن عمليات تجميل الانف لديكم",
  },
  {
    id: 8,
    title: "زراعة الشعر",
    description: "تقنيات حديثة لزراعة الشعر بنتائج طبيعية ودائمة مع فترة تعافي قصيرة",
    image: "/placeholder.svg?height=400&width=600&text=زراعة+الشعر",
    whatsappMessage: "مرحباً، أود الاستفسار عن عمليات زراعة الشعر لديكم",
  },
  {
    id: 9,
    title: "هوليوود سمايل",
    description: "تقنيات متطورة للحصول على ابتسامة هوليوود المثالية بأحدث المواد والتقنيات",
    image: "/placeholder.svg?height=400&width=600&text=هوليوود+سمايل",
    whatsappMessage: "مرحباً، أود الاستفسار عن خدمة هوليوود سمايل لديكم",
  },
  {
    id: 10,
    title: "تصحيح النظر",
    description: "عمليات متطورة لتصحيح النظر والتخلص من النظارات والعدسات اللاصقة",
    image: "/placeholder.svg?height=400&width=600&text=تصحيح+النظر",
    whatsappMessage: "مرحباً، أود الاستفسار عن عمليات تصحيح النظر لديكم",
  },
]

export default function ServicesSlider() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [showAll, setShowAll] = useState(false)

  // Display only first 5 services initially
  const displayedServices = showAll ? services : services.slice(0, 5)

  const handleToggleServices = () => {
    setShowAll(!showAll)
  }

  return (
    <section id="services" className="py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">خدماتنا المتميزة</h2>
        <p className="text-text-gray text-lg max-w-2xl mx-auto">
          نقدم مجموعة متكاملة من الخدمات الطبية المتميزة بأعلى معايير الجودة وبأيدي نخبة من الأطباء المتخصصين
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <AnimatePresence>
              {displayedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="service-card h-full overflow-hidden shadow-md hover:shadow-lg">
                    <div className="relative h-36 w-full">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="text-text-gray text-sm line-clamp-2">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <a
                        href={`https://wa.me/+1234567890?text=${encodeURIComponent(service.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-dark-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      >
                        احجز الآن
                      </a>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {services.length > 5 && (
          <div className="flex justify-center mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                onClick={handleToggleServices}
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
      </div>
    </section>
  )
}
