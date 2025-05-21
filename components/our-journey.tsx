"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function OurJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="journey" className="py-16" ref={ref}>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              رحلتك معنا
            </h2>
            <p className="text-text-gray">
              نحرص على تقديم تجربة علاجية متكاملة ومريحة منذ لحظة تواصلك معنا.
              نبدأ باستشارة طبية مجانية لتقييم حالتك، ثم نرسل لك خطة علاج مفصلة
              تشمل التكاليف والمدة. بعد تأكيدك، نقوم بحجز موعد العملية والفندق
              المناسب لإقامتك.
            </p>

            <p className="text-text-gray">
              عند وصولك، يتم استقبالك بسيارة VIP من المطار. نخضعك للفحوصات
              الطبية اللازمة قبل الإجراء، وتُجرى العملية في مستشفى مرخص وبإشراف
              أطباء مختصين. بعد العملية، نتابع حالتك الصحية ونقدم الرعاية
              اللازمة خلال فترة التعافي، ثم نوصلك إلى المطار عند انتهاء
              البرنامج، مع استمرار المتابعة عن بُعد عند الحاجة
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="images/our-journey.jpg"
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
