"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Star,
  GitFork,
  Code,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { fetchGitHubRepos, GitHubRepo, getTechColor } from "@/lib/api";

export default function ProjectsSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const githubRepos = await fetchGitHubRepos("DoganayBalaban");
        setRepos(githubRepos);
      } catch (error) {
        console.error("Error loading repos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="text-slate-400 mt-4">
              GitHub projelerim yükleniyor...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            GitHub Projelerim
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            GitHub'da geliştirdiğim açık kaynak projeler ve kişisel çalışmalarım
          </p>
        </motion.div>

        {repos.length === 0 ? (
          <div className="text-center text-slate-400">
            <p>Henüz proje bulunamadı.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group bg-slate-700 border-slate-600">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <div className="w-full h-48 bg-slate-600 flex items-center justify-center relative">
                      <Code className="w-16 h-16 text-slate-400" />
                      {repo.language && (
                        <div
                          className={`absolute top-4 right-4 bg-gradient-to-r ${getTechColor(
                            repo.language
                          )} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                        >
                          {repo.language}
                        </div>
                      )}
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {repo.name}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {repo.stargazers_count}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          {repo.forks_count}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-slate-300">
                      {repo.description || "Açıklama bulunmuyor"}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>
                        Son güncelleme:{" "}
                        {new Date(repo.updated_at).toLocaleDateString("tr-TR")}
                      </span>
                    </div>

                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {repo.topics.slice(0, 4).map((topic) => (
                          <span
                            key={topic}
                            className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-slate-500 text-slate-300 hover:bg-slate-600"
                        asChild
                      >
                        <Link href={repo.html_url} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          Kod
                        </Link>
                      </Button>
                      {repo.homepage && (
                        <Button
                          size="sm"
                          className="flex-1 bg-blue-600 hover:bg-blue-700"
                          asChild
                        >
                          <Link href={repo.homepage} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white"
            asChild
          >
            <Link href="https://github.com/DoganayBalaban" target="_blank">
              <Github className="w-5 h-5 mr-2" />
              Tüm Projeleri GitHub'da Gör
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
