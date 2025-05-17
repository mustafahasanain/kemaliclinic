"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)

    // Open WhatsApp with form data
    const message = encodeURIComponent(
      `الاسم: ${formState.name}\nرقم الهاتف: ${formState.phone}\nالبريد الإلكتروني: ${formState.email}\nالرسالة: ${formState.message}`,
    )
    window.open(`https://wa.me/+1234567890?text=${message}`, "_blank")

    // Reset form
    setFormState({
      name: "",
      phone: "",
      email: "",
      message: "",
    })

    // Show success message
    alert("تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.")
  }

  return (
    <section id="contact" className="py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">اتصل بنا</h2>
        <p className="text-text-gray text-lg max-w-2xl mx-auto">
          نحن هنا للإجابة على جميع استفساراتك. يمكنك التواصل معنا من خلال النموذج أدناه أو عبر معلومات الاتصال المتوفرة
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">الاسم الكامل</Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="أدخل اسمك الكامل"
                required
                className="text-right"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                placeholder="أدخل رقم هاتفك"
                required
                className="text-right"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="أدخل بريدك الإلكتروني"
                className="text-right"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">الرسالة</Label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="اكتب رسالتك هنا"
                rows={5}
                required
                className="text-right"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-dark-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              إرسال الرسالة
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary ml-4 mt-1" />
                <div>
                  <h3 className="font-bold text-primary text-lg">اتصل بنا</h3>
                  <p className="text-text-gray">+123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary ml-4 mt-1" />
                <div>
                  <h3 className="font-bold text-primary text-lg">راسلنا</h3>
                  <p className="text-text-gray">info@medicaltourism.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary ml-4 mt-1" />
                <div>
                  <h3 className="font-bold text-primary text-lg">موقعنا</h3>
                  <p className="text-text-gray">شارع الرئيسي، المدينة الطبية، 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[300px] rounded-lg overflow-hidden shadow-md">
            {/* Google Maps placeholder - would be replaced with actual Google Maps embed */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-text-gray">خريطة جوجل ستظهر هنا</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
