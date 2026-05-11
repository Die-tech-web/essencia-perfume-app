"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    title: "Pour Elle",
    subtitle: "Fragrances féminines",
    description: "Des parfums délicats et envoûtants pour sublimer votre féminité",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop",
    href: "/femme",
    count: "500+ parfums",
  },
  {
    title: "Pour Lui",
    subtitle: "Fragrances masculines",
    description: "Des senteurs puissantes et raffinées pour les hommes d'exception",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    href: "/homme",
    count: "400+ parfums",
  },
  {
    title: "Coffrets",
    subtitle: "L'art d'offrir",
    description: "Des ensembles cadeaux élégants pour des moments inoubliables",
    image: "https://images.unsplash.com/photo-1549049950-48d5887197a0?q=80&w=800&auto=format&fit=crop",
    href: "/coffrets",
    count: "100+ coffrets",
  },
]

export function Categories() {
  return (
    <section className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-[var(--font-sans)]">
            Explorer
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif">
            Nos <span className="text-primary italic">Univers</span>
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link href={category.href} className="block relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-card">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <span className="text-xs tracking-[0.2em] uppercase text-primary mb-2 font-[var(--font-sans)]">
                      {category.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-[var(--font-sans)] leading-relaxed mb-4">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs tracking-wider text-primary/80 font-[var(--font-sans)]">
                        {category.count}
                      </span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-sm text-foreground group-hover:text-primary transition-colors font-[var(--font-sans)]"
                      >
                        <span className="tracking-wider uppercase">Explorer</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Border Animation */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
