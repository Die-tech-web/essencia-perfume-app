"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--gold) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-32">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-[var(--font-sans)]">
                Collection Exclusive 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[1.1] text-balance"
            >
              <span className="block text-foreground">{"L'art de laisser"}</span>
              <span className="block text-primary italic mt-2">une empreinte</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed font-[var(--font-sans)]"
            >
              Découvrez notre sélection exclusive de parfums de luxe. 
              Des fragrances uniques qui racontent votre histoire.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="/collections"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase font-[var(--font-sans)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(200,170,110,0.3)]"
              >
                <span className="relative z-10">Découvrir</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gold-dark transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

              <Link
                href="/nouveautes"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground text-sm tracking-[0.2em] uppercase font-[var(--font-sans)] hover:border-primary hover:text-primary transition-all duration-300"
              >
                <span>Nouveautés</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 pt-8 border-t border-border/50"
            >
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: "1000+", label: "Fragrances" },
                  { value: "50+", label: "Marques" },
                  { value: "10K+", label: "Clients" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-2xl md:text-3xl font-serif text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs tracking-wider uppercase text-muted-foreground mt-1 font-[var(--font-sans)]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4]">
              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/20 rounded-full scale-110"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/10 rounded-full scale-125"
              />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-card to-background">
                <video
                  src="/images/parfums/coco.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute -left-4 lg:-left-8 top-1/4 bg-card border border-border px-6 py-4 backdrop-blur-sm"
              >
                <div className="text-xs tracking-wider uppercase text-muted-foreground font-[var(--font-sans)]">
                  Best Seller
                </div>
                <div className="text-lg font-serif text-foreground mt-1">
                  Chanel N°5
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 }}
                className="absolute -right-4 lg:-right-8 bottom-1/4 bg-primary text-primary-foreground px-6 py-4"
              >
                <div className="text-xs tracking-wider uppercase font-[var(--font-sans)]">
                  Exclusif
                </div>
                <div className="text-lg font-serif mt-1">-20% Nouveaux</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-[var(--font-sans)]">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
