"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, Heart, MessageCircle } from "lucide-react";
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
import {
  fetchMediumPosts,
  MediumPost,
  stripHtml,
  truncateText,
} from "@/lib/api";

// Mock LinkedIn posts data - LinkedIn API gerektirdiği için mock data kullanıyoruz
const linkedinPosts = [
  {
    id: 1,
    content:
      "Yeni projemde Next.js 14'ün App Router özelliklerini kullanarak performans optimizasyonu yaptım. Server Components ile %40 daha hızlı sayfa yükleme süreleri elde ettik! 🚀",
    publishedAt: "2024-01-20",
    likes: 67,
    comments: 8,
    url: "https://linkedin.com/posts/doganaybalaban_nextjs-performance",
  },
  {
    id: 2,
    content:
      "Bugün ekibimizle birlikte GraphQL ve Apollo Client entegrasyonu üzerine workshop düzenledik. Real-time data fetching konusunda harika deneyimler paylaştık. Öğrenmeye devam! 📚",
    publishedAt: "2024-01-18",
    likes: 45,
    comments: 12,
    url: "https://linkedin.com/posts/doganaybalaban_graphql-apollo",
  },
];

export default function BlogSection() {
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMediumPosts = async () => {
      try {
        const posts = await fetchMediumPosts();
        setMediumPosts(posts);
      } catch (error) {
        console.error("Error loading Medium posts:", error);
      } finally {
        setLoading(false);
      }
    };

    loadMediumPosts();
  }, []);

  return (
    <section id="blog" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Medium Blog Posts */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Medium Yazılarım
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Medium'da teknoloji, yazılım geliştirme ve kişisel deneyimlerim
              hakkında yazdığım makaleler
            </p>
          </div>

          {loading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="text-slate-400 mt-4">
                Medium yazıları yükleniyor...
              </p>
            </div>
          ) : mediumPosts.length === 0 ? (
            <div className="text-center text-slate-400">
              <p>Henüz Medium yazısı bulunamadı.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediumPosts.map((post, index) => (
                <motion.div
                  key={post.guid}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group bg-slate-600 border-slate-500">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.pubDate).toLocaleDateString("tr-TR")}
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {truncateText(post.title, 80)}
                      </CardTitle>
                      <CardDescription className="text-slate-300">
                        {truncateText(
                          stripHtml(post.contentSnippet || post.content),
                          120
                        )}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.categories.slice(0, 3).map((category, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-slate-500 text-slate-200 rounded text-sm border border-slate-400"
                            >
                              #{category}
                            </span>
                          ))}
                        </div>
                      )}

                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all border-slate-400 text-slate-300"
                        asChild
                      >
                        <Link href={post.link} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Makaleyi Oku
                        </Link>
                      </Button>
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
              <Link href="https://medium.com/@balabandoganay" target="_blank">
                Tüm Yazıları Medium'da Gör
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* LinkedIn Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              LinkedIn Paylaşımlarım
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Profesyonel ağımda paylaştığım güncel teknoloji ve kariyer
              deneyimleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {linkedinPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group bg-slate-600 border-slate-500">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString("tr-TR")}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-white mb-4 leading-relaxed">
                      {post.content}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </div>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all border-slate-400 text-slate-300"
                      asChild
                    >
                      <Link href={post.url} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        LinkedIn'de Gör
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

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
              <Link
                href="https://linkedin.com/in/doganaybalaban"
                target="_blank"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                LinkedIn Profilimi Ziyaret Et
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
