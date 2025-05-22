"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Award, Clock, Users, Shield, Globe } from "lucide-react";

const approaches = [
  {
    id: 1,
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "رعاية شخصية",
    description: "نقدم رعاية مخصصة لكل مريض حسب احتياجاته الفردية",
  },
  {
    id: 2,
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "جودة عالية",
    description: "نلتزم بأعلى معايير الجودة في جميع خدماتنا الطبية",
  },
  {
    id: 3,
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "متابعة مستمرة",
    description: "نوفر متابعة مستمرة للمرضى قبل وأثناء وبعد العلاج",
  },
  {
    id: 4,
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "فريق متكامل",
    description: "فريق متكامل من الأطباء والممرضين والفنيين ذوي الخبرة",
  },
  {
    id: 5,
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "سلامة المرضى",
    description: "نضع سلامة المرضى على رأس أولوياتنا في جميع الإجراءات",
  },
  {
    id: 6,
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "خدمات متكاملة",
    description: "نقدم خدمات متكاملة تشمل الإقامة والتنقل والترجمة",
  },
];

export default function OurApproach() {
  return (
    <section id="approach" className="py-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          نهجنا في العلاج
        </h2>
        <p className="text-text-gray text-lg max-w-2xl mx-auto">
          نتبع نهجاً متكاملاً في العلاج يركز على احتياجات المريض ويضمن تقديم
          أفضل رعاية ممكنة
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {approaches.map((item, index) => (
          <AnimatedCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function AnimatedCard({
  item,
  index,
}: {
  item: (typeof approaches)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024); // Tailwind 'lg' breakpoint ~1024px
    }
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: isDesktop ? -20 : 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{item.icon}</div>
        <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
        <p className="text-text-gray">{item.description}</p>
      </div>
    </motion.div>
  );
}
