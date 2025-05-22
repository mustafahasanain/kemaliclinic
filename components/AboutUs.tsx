"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-16 scroll-mt-20" ref={ref}>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-2 md:order-1"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              من نحن
            </h2>
            <p className="text-text-gray">
              نُقدّم رعاية طبية وجمالية متكاملة بمستوى عالمي لمرضانا من جميع
              أنحاء العالم. من زراعة الشعر المتقدمة وطب الأسنان التجميلي إلى
              أحدث جراحات العيون، يجمع فريقنا الخبير بين التميز الطبي والعناية
              الشخصية في بيئة حديثة ومريحة. ابدأ رحلتك نحو الثقة والجمال من هنا.
              مع الوجهة الأمثل للسياحة العلاجية
            </p>
            <h3>لماذا تختار كمالي كلينك؟</h3>
            <p className="text-text-gray">
              لأننا نضع رضاك في المقدمة، ونوفّر خدمات طبية وتجميلية بأعلى معايير
              الجودة والاحتراف. نهتم بأدق التفاصيل، ونحرص على تقديم تجربة
              متكاملة وآمنة تلبي تطلعاتك الجمالية والصحية بكل ثقة وتميّز
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=905352785119&text=${encodeURIComponent(
                "مرحباً، أود معرفة المزيد عن مركز السياحة الطبية"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-dark-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              تعرف علينا أكثر
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="images/about-us.jpg"
              alt="فريق المركز الطبي"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
