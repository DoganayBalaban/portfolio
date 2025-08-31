"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission logic burada olacak
    // Örneğin: EmailJS, Formspree, veya kendi API endpoint'iniz

    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım."
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DoganayBalaban",
      icon: Github,
      color: "hover:text-white",
      description: "Açık kaynak projelerim",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/doganay-balaban",
      icon: Linkedin,
      color: "hover:text-blue-400",
      description: "Profesyonel ağım",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/kami_0w",
      icon: Twitter,
      color: "hover:text-blue-400",
      description: "Güncel paylaşımlarım",
    },
    {
      name: "Email",
      url: "mailto:balabandoganay@gmail.com",
      icon: Mail,
      color: "hover:text-red-400",
      description: "Direkt iletişim",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-slate-900 border-t border-slate-700"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            İletişime Geçin
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Yeni projeler, iş birlikleri veya sadece merhaba demek için benimle
            iletişime geçebilirsiniz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Benimle İletişime Geçin
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Aşağıdaki kanallardan bana ulaşabilirsiniz
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <Link
                      href="mailto:balabandoganay@gmail.com"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      balabandoganay@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Telefon</h3>
                    <Link
                      href="tel:+905330224691"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      +90 533 022 46 91
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Konum</h3>
                    <p className="text-slate-400">İstanbul, Türkiye</p>
                  </div>
                </div>

                {/* Sosyal Medya Linkleri */}
                <div className="pt-6 border-t border-slate-700">
                  <h3 className="font-semibold text-white mb-4">
                    Sosyal Medya
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all duration-300 group"
                      >
                        <social.icon
                          className={`w-5 h-5 text-slate-400 group-hover:text-white transition-colors ${social.color}`}
                        />
                        <div>
                          <div className="font-medium text-sm text-white">
                            {social.name}
                          </div>
                          <div className="text-xs text-slate-400">
                            {social.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Mesaj Gönderin
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Formu doldurarak direkt olarak bana mesaj gönderebilirsiniz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Adınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 text-white"
                        placeholder="Adınızı girin"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 text-white"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 text-white"
                      placeholder="Mesajınızın konusu"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-400 text-white resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Gönderiliyor...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Mesajı Gönder
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-20 pt-8 border-t border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400">
            © 2024 Doğanay Balaban. Tüm hakları saklıdır.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Next.js, TypeScript ve Tailwind CSS ile ❤️ ile geliştirildi
          </p>
        </motion.div>
      </div>
    </section>
  );
}
