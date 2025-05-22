const slides = [
  {
    id: 1,
    image: "/images/hero/desktop/caring.jpg",
    title: "رعاية متميزة",
    subtitle: "نقدّم لك أفضل الخدمات منذ لحظة وصولك",
    tabletImage: "/images/hero/tablet/caring.jpg",
    mobileImage: "/images/hero/mobile/caring.jpg",
  },
  {
    id: 2,
    image: "/images/hero/desktop/reception.jpg",
    title: "الابتكار هو بداية الراحة",
    subtitle: "نوفر لك بيئة علاجية تجمع بين التكنولوجيا والاهتمام الحقيقي",
    tabletImage: "/images/hero/tablet/reception.jpg",
    mobileImage: "/images/hero/mobile/reception.jpg",
  },
  {
    id: 3,
    image: "/images/hero/desktop/tech.jpg",
    title: "أحدث التقنيات الطبية",
    subtitle: "نستخدم أحدث التقنيات والأجهزة الطبية لضمان أفضل النتائج",
    tabletImage: "/images/hero/tablet/tech.jpg",
    mobileImage: "/images/hero/mobile/tech.jpg",
  },

  // Desktop image size: (1920x800px)
  // Tablet image size: (1200×600px)
  // Mobile image size: (430×700px)
];

const offers = [
  {
    id: 1,
    title: "عرض شفط 360 + شد البطن + تعبئة المؤخرة",
    description:
      "احصل على باقة تجميل كاملة تشمل شفط الدهون 360 درجة، شد البطن، وتعبئة المؤخرة بأسعار مميزة.",
    image: "/images/offers/body-offer.jpg",
    whatsappMessage:
      "مرحباً، أود الاستفسار عن عرض شفط 360 + شد البطن + تعبئة المؤخرة",
  },
  {
    id: 2,
    title: "عرض ابتسامة هوليوود",
    description:
      "ابتسامة هوليوود المثالية بأسعار تنافسية وتشمل تصميم الابتسامة وعدسات الأسنان.",
    image: "/images/offers/teeth-offer.jpg",
    whatsappMessage: "مرحباً، أود الاستفسار عن عرض ابتسامة هوليوود",
  },
  {
    id: 3,
    title: "عرض تجميل الأنف",
    description:
      "احصل على خصم خاص على عملية تجميل الأنف مع أفضل الجراحين وخدمات عالية الجودة.",
    image: "/images/offers/noise-offer.jpg",
    whatsappMessage: "مرحباً، أود الاستفسار عن عرض تجميل الأنف",
  },
];

const services = [
  {
    id: 1,
    title: "شد ورفع الصدر",
    description:
      "عملية شد ورفع الصدر لاستعادة مظهر شبابي وجذاب مع نتائج طبيعية",
    image: "/images/services/breast-lift.png",
    whatsappMessage: "مرحباً، أود الاستفسار عن عملية شد ورفع الصدر لديكم",
  },
  {
    id: 2,
    title: "شد الوجه والرقبة",
    description:
      "تقنيات متطورة لشد الوجه والذقن والرقبة للحصول على مظهر أكثر شباباً",
    image: "/images/services/face-lift.png",
    whatsappMessage:
      "مرحباً، أود الاستفسار عن عملية شد الوجه مع الذقن والرقبة لديكم",
  },
  {
    id: 3,
    title: "شد ونحت الجسم",
    description: "إجراءات متكاملة لشد ونحت الجسم للحصول على قوام متناسق ومشدود",
    image: "/images/services/body-sculpting.png",
    whatsappMessage: "مرحباً، أود الاستفسار عن عمليات شد ونحت الجسم لديكم",
  },
  {
    id: 4,
    title: "حقن الدهون",
    description:
      "تقنيات آمنة لحقن الدهون الذاتية لتعزيز حجم وشكل مناطق مختلفة من الجسم",
    image: "/images/services/fat-injection.png",
    whatsappMessage: "مرحباً، أود الاستفسار عن إجراءات حقن الدهون لديكم",
  },
  {
    id: 5,
    title: "شد الجفون",
    description:
      "عمليات دقيقة لشد الجفون وإزالة الترهلات للحصول على نظرة أكثر انتعاشاً",
    image: "/images/services/eyelid-surgery.png",
    whatsappMessage: "مرحباً، أود الاستفسار عن عملية شد الجفون لديكم",
  },
  {
    id: 6,
    title: "زراعة وعلاج الاسنان",
    description: "خدمات متكاملة لزراعة وعلاج الأسنان باستخدام أحدث التقنيات",
    image: "/images/services/dental-implants.png",
    whatsappMessage: "مرحباً، أود الاستفسار عن خدمات زراعة وعلاج الاسنان لديكم",
  },
  {
    id: 7,
    title: "تجميل الانف",
    description:
      "عمليات تجميل الأنف بتقنيات متطورة للحصول على شكل متناسق ووظيفة تنفسية أفضل",
    image: "/images/services/rhinoplasty.png",
    whatsappMessage: "مرحباً، أود الاستفسار عن عمليات تجميل الانف لديكم",
  },
  {
    id: 8,
    title: "زراعة الشعر",
    description:
      "تقنيات حديثة لزراعة الشعر بنتائج طبيعية ودائمة مع فترة تعافي قصيرة",
    image: "/images/services/hair-transplant.png",
    whatsappMessage: "مرحباً، أود الاستفسار عن عمليات زراعة الشعر لديكم",
  },
  {
    id: 9,
    title: "هوليوود سمايل",
    description:
      "تقنيات متطورة للحصول على ابتسامة هوليوود المثالية بأحدث المواد والتقنيات",
    image: "/images/services/hollywood-smile.png",
    whatsappMessage: "مرحباً، أود الاستفسار عن خدمة هوليوود سمايل لديكم",
  },
  {
    id: 10,
    title: "تصحيح النظر",
    description:
      "عمليات متطورة لتصحيح النظر والتخلص من النظارات والعدسات اللاصقة",
    image: "/images/services/vision-correction.png",
    whatsappMessage: "مرحباً، أود الاستفسار عن عمليات تصحيح النظر لديكم",
  },
];

export { slides, offers, services };
