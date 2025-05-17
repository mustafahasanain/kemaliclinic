"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-16" ref={ref}>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">من نحن</h2>
            <p className="text-text-gray">
              مركز السياحة الطبية هو مركز طبي متكامل يقدم خدمات طبية متميزة للمرضى من مختلف أنحاء العالم. تأسس المركز
              عام 2010 على يد نخبة من الأطباء المتخصصين بهدف تقديم رعاية طبية عالية الجودة بأسعار منافسة.
            </p>
            <p className="text-text-gray">
              يضم المركز فريقاً متكاملاً من الأطباء والممرضين والفنيين ذوي الخبرة والكفاءة العالية، ويحرص على توفير بيئة
              علاجية مريحة وآمنة للمرضى. كما يتميز المركز باستخدام أحدث التقنيات والأجهزة الطبية لضمان أفضل النتائج.
            </p>
            <p className="text-text-gray">
              نفخر بتقديم خدمات متكاملة للمرضى تشمل الاستشارات الطبية، والفحوصات التشخيصية، والعلاج، والمتابعة بعد
              العلاج، بالإضافة إلى خدمات الإقامة والتنقل والترجمة للمرضى القادمين من خارج البلاد.
            </p>
            <a
              href={`https://wa.me/+1234567890?text=${encodeURIComponent("مرحباً، أود معرفة المزيد عن مركز السياحة الطبية")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-dark-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              تعرف علينا أكثر
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
            <Image src="/placeholder.svg?height=800&width=600" alt="فريق المركز الطبي" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
