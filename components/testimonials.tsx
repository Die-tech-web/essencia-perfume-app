"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    location: "Paris, France",
    rating: 5,
    text: "Une expérience exceptionnelle ! Les parfums sont authentiques et le service client est irréprochable. Je recommande vivement Essencia.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    perfume: "Chanel N°5",
  },
  {
    id: 2,
    name: "Jean-Pierre Martin",
    location: "Lyon, France",
    rating: 5,
    text: "Livraison rapide et emballage soigné. Les échantillons offerts sont un vrai plus. Ma femme a adoré son cadeau.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    perfume: "Dior Sauvage",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    location: "Montréal, Canada",
    rating: 5,
    text: "Enfin une boutique en ligne qui propose des parfums de qualité au Canada. Les prix sont compétitifs et le choix est impressionnant.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    perfume: "Tom Ford Black Orchid",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

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
            Témoignages
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif">
            Ce que disent nos <span className="text-primary italic">Clients</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 border border-border hover:border-primary/30 bg-card/50 transition-all duration-500">
                {/* Quote Icon */}
                <Quote className="absolute -top-4 -left-2 w-10 h-10 text-primary/20" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground/80 leading-relaxed font-[var(--font-sans)] text-sm md:text-base">
                  {'"'}{testimonial.text}{'"'}
                </p>

                {/* Perfume */}
                <p className="mt-4 text-xs tracking-wider uppercase text-primary font-[var(--font-sans)]">
                  Achat: {testimonial.perfume}
                </p>

                {/* Author */}
                <div className="mt-6 pt-6 border-t border-border/50 flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground font-[var(--font-sans)]">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
