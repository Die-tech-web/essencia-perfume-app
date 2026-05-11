"use client"

import { motion } from "framer-motion"
import { Truck, Shield, Gift, Sparkles } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Livraison Express",
    description: "Livraison gratuite dès 100€ d'achat partout au Canada",
  },
  {
    icon: Shield,
    title: "Authenticité Garantie",
    description: "100% des produits sont authentiques et certifiés",
  },
  {
    icon: Gift,
    title: "Échantillons Offerts",
    description: "Recevez des échantillons gratuits avec chaque commande",
  },
  {
    icon: Sparkles,
    title: "Conseil Expert",
    description: "Notre équipe vous accompagne dans votre choix",
  },
]

export function Features() {
  return (
    <section className="py-20 md:py-24 bg-background border-y border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mx-auto mb-6">
                <div className="absolute inset-0 border border-primary/30 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-primary relative z-10" />
              </div>
              <h3 className="text-lg md:text-xl font-serif text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-[var(--font-sans)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
