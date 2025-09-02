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
import { fetchLinkedInUserPosts } from "@/lib/linkedin";

interface LinkedInPost {
  id: string;
  text: string;
  author: {
    name: string;
    url: string;
    avatar?: Array<{
      url: string;
      width: number;
      height: number;
    }>;
  };
  created_at: string;
  reaction_counts: Array<{
    type: string;
    count: number;
  }>;
  comment_count: number;
  content?: {
    images?: Array<{
      image: Array<{
        url: string;
        width: number;
        height: number;
      }>;
    }>;
  };
}

export default function BlogSection() {
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);
  const [linkedinPosts, setLinkedinPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [linkedinLoading, setLinkedinLoading] = useState(true);

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

    const loadLinkedInPosts = async () => {
      try {
        const response = await fetchLinkedInUserPosts(
          "ACoAABCtiL8B26nfi3Nbpo_AM8ngg4LeClT1Wh8"
        );
        setLinkedinPosts(response.posts?.slice(0, 4) || []);
      } catch (error) {
        console.error("Error loading LinkedIn posts:", error);
      } finally {
        setLinkedinLoading(false);
      }
    };

    loadMediumPosts();
    loadLinkedInPosts();
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

          {linkedinLoading ? (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="text-slate-400 mt-4">
                LinkedIn gönderileri yükleniyor...
              </p>
            </div>
          ) : linkedinPosts.length === 0 ? (
            <div className="text-center text-slate-400">
              <p>LinkedIn gönderileri yüklenemedi.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {linkedinPosts.map((post, index) => {
                const totalReactions = post.reaction_counts.reduce(
                  (sum, reaction) => sum + reaction.count,
                  0
                );
                const truncatedText =
                  post.text.length > 200
                    ? post.text.substring(0, 200) + "..."
                    : post.text;

                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group bg-slate-600 border-slate-500">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          {post.author.avatar && post.author.avatar[0] && (
                            <img
                              src={post.author.avatar[0].url}
                              alt={post.author.name}
                              className="w-8 h-8 rounded-full"
                            />
                          )}
                          <div>
                            <p className="text-sm text-white font-medium">
                              {post.author.name}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-slate-400">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.created_at).toLocaleDateString(
                                "tr-TR"
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <p className="text-white mb-4 leading-relaxed">
                          {truncatedText}
                        </p>

                        {post.content?.images &&
                          post.content.images.length > 0 && (
                            <div className="mb-4 rounded-lg overflow-hidden">
                              <img
                                src={post.content.images[0].image[0].url}
                                alt="Post image"
                                className="w-full h-48 object-cover"
                              />
                            </div>
                          )}

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              {totalReactions}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              {post.comment_count}
                            </div>
                          </div>
                        </div>

                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all border-slate-400 text-slate-300"
                          asChild
                        >
                          <Link
                            href={`https://www.linkedin.com/feed/update/urn:li:activity:${post.id}/`}
                            target="_blank"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            LinkedIn'de Gör
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
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
              <Link
                href="https://linkedin.com/in/doganay-balaban"
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
