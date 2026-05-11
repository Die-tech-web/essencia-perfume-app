"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const brands = [
  {
    name: "Chanel",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=600&auto=format&fit=crop",
    href: "/marques/chanel",
  },
  {
    name: "Dior",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop",
    href: "/marques/dior",
  },
  {
    name: "Tom Ford",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=600&auto=format&fit=crop",
    href: "/marques/tom-ford",
  },
  {
    name: "Gucci",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop",
    href: "/marques/gucci",
  },
]

export function FeaturedBrands() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

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
            Collections
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif">
            Nos <span className="text-primary italic">Marques</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto font-[var(--font-sans)]">
            Découvrez les plus grandes maisons de parfumerie au monde
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={brand.href} className="group block relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-card">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Border Animation */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-primary/50 transition-colors duration-500" />
                  
                  {/* Brand Name */}
                  <div className="absolute inset-0 flex items-end justify-center pb-8">
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-serif text-foreground tracking-wider">
                        {brand.name}
                      </h3>
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                        className="block h-px bg-primary mt-3 mx-auto"
                        style={{ maxWidth: "60px" }}
                      />
                      <span className="block mt-4 text-xs tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-[var(--font-sans)]">
                        Découvrir
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/marques"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors font-[var(--font-sans)] group"
          >
            <span>Voir toutes les marques</span>
            <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
