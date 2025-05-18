import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageSquare,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 text-center items-center">
          <div>
            <div className="mb-4">
              <h1 className="text-3xl text-white">Kemali Clinic</h1>
            </div>
            <p className="text-gray-300 mb-4 max-w-xl mx-auto">
              نقدم خدمات طبية متميزة بأيدي نخبة من الأطباء المتخصصين في مختلف
              المجالات الطبية.
            </p>

            <div className="flex justify-center space-x-4 space-x-reverse mb-4">
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

            <div className="mt-4 flex justify-center">
              <Link
                href="https://wa.me/+905352785119?text=مرحباً،%20أود%20الاستفسار%20عن%20خدمات%20مركز%20السياحة%20الطبية"
                target="_blank"
                className="flex items-center text-white bg-[#25D366] hover:bg-[#128C7E] px-4 py-2 rounded-md"
              >
                <MessageSquare className="h-5 w-5 ml-2" />
                تواصل عبر واتساب
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-300">
          <p>
            © {new Date().getFullYear()} مركز السياحة الطبية. جميع الحقوق
            محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
