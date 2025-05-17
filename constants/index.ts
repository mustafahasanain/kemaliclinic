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
];

const offers = [
  {
    id: 1,
    title: "عرض شفط 360 + شد البطن + تعبئة المؤخرة",
    description:
      "احصل على باقة تجميل كاملة تشمل شفط الدهون 360 درجة، شد البطن، وتعبئة المؤخرة بأسعار مميزة.",
    image:
      "/placeholder.svg?height=400&width=600&text=عرض+شفط+360+%2B+شد+البطن+%2B+تعبئة+المؤخرة",
    whatsappMessage:
      "مرحباً، أود الاستفسار عن عرض شفط 360 + شد البطن + تعبئة المؤخرة",
  },
  {
    id: 2,
    title: "عرض ابتسامة هوليوود",
    description:
      "ابتسامة هوليوود المثالية بأسعار تنافسية وتشمل تصميم الابتسامة وعدسات الأسنان.",
    image: "/placeholder.svg?height=400&width=600&text=عرض+ابتسامة+هوليوود",
    whatsappMessage: "مرحباً، أود الاستفسار عن عرض ابتسامة هوليوود",
  },
  {
    id: 3,
    title: "عرض تجميل الأنف",
    description:
      "احصل على خصم خاص على عملية تجميل الأنف مع أفضل الجراحين وخدمات عالية الجودة.",
    image: "/placeholder.svg?height=400&width=600&text=عرض+تجميل+الأنف",
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
    title: "شد الوجه مع الذقن والرقبة",
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
