"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Doganay_Balaban_CV.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden border-b border-slate-700">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-500 rounded-full"
              style={{
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Sol taraf - Profil bilgileri */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Doğanay{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Balaban
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl lg:text-3xl text-slate-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fullstack Developer
            </motion.h2>

            <motion.p
              className="text-lg text-slate-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan,
              ölçeklenebilir ve performanslı uygulamalar geliştiren bir yazılım
              geliştiricisiyim. React, Node.js, TypeScript ve cloud
              teknolojilerinde kendimi geliştiriyorum.
            </motion.p>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <MapPin className="w-5 h-5" />
              <span>İstanbul, Türkiye</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                onClick={handleDownloadCV}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                CV İndir
              </Button>

              <Button
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
                asChild
              >
                <Link href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  İletişime Geç
                </Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/doganaybalaban",
                  color: "hover:text-white",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/doganay-balaban",
                  color: "hover:text-blue-400",
                },
                {
                  icon: Mail,
                  href: "mailto:balabandoganay@gmail.com",
                  color: "hover:text-red-400",
                },
              ].map(({ icon: Icon, href, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  className={`text-slate-400 ${color} transition-all duration-300 hover:scale-110`}
                >
                  <Icon className="w-8 h-8" />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Sağ taraf - Profil fotoğrafı */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-6xl font-bold">
                  DB
                </div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-spin-slow" />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </motion.div>
    </section>
  );
}
