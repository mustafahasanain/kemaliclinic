import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <div className="relative h-10 w-40 bg-white rounded-md p-1">
                <Image
                  src="/placeholder.svg?height=80&width=200&text=مركز+السياحة+الطبية"
                  alt="مركز السياحة الطبية"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              نقدم خدمات طبية متميزة بأيدي نخبة من الأطباء المتخصصين في مختلف المجالات الطبية.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">فيسبوك</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">انستغرام</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">تويتر</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">يوتيوب</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#offers" className="text-gray-300 hover:text-white">
                  العروض
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="#approach" className="text-gray-300 hover:text-white">
                  نهجنا
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  شد ورفع الصدر
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  شد الوجه مع الذقن والرقبة
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  شد ونحت الجسم
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  زراعة الشعر
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white">
                  تجميل الانف
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>شارع الرئيسي، المدينة الطبية، 12345</p>
              <p>هاتف: 7890 456 123+</p>
              <p>البريد الإلكتروني: info@medicaltourism.com</p>
            </address>
            <div className="mt-4">
              <Link
                href="https://wa.me/+1234567890?text=مرحباً،%20أود%20الاستفسار%20عن%20خدمات%20مركز%20السياحة%20الطبية"
                target="_blank"
                className="flex items-center text-white bg-[#25D366] hover:bg-[#128C7E] px-4 py-2 rounded-md w-fit"
              >
                <MessageSquare className="h-5 w-5 ml-2" />
                تواصل عبر واتساب
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-300">
          <p>© {new Date().getFullYear()} مركز السياحة الطبية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
