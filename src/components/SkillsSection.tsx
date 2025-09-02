"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Server, Smartphone, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux", level: 75 },
      { name: "SASS/SCSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "REST APIs", level: 92 },
      { name: "Microservices", level: 78 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 75 },
      { name: "Prisma", level: 88 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 78 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Docker", level: 82 },
      { name: "AWS", level: 75 },
      { name: "Git", level: 95 },
      { name: "CI/CD", level: 78 },
      { name: "Kubernetes", level: 65 },
      { name: "Vercel", level: 90 },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "React Native", level: 80 },
      { name: "Expo", level: 85 },
      { name: "PWA", level: 88 },
    ],
  },
  {
    title: "Other",
    icon: Code,
    color: "from-gray-500 to-slate-500",
    skills: [
      { name: "Figma", level: 75 },
      { name: "Jest", level: 82 },
      { name: "Cypress", level: 70 },
      { name: "Webpack", level: 78 },
      { name: "Vite", level: 85 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Teknik Yeteneklerim
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Modern web teknolojileri ve araçlarında deneyimim
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-slate-700 border-slate-600">
                <CardHeader>
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-white">
                            {skill.name}
                          </span>
                          <span className="text-sm text-slate-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
