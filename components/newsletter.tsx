"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Gift, Sparkles } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--gold) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-40 h-40 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 w-60 h-60 border border-primary/5 rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Gift className="w-5 h-5 text-primary" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary font-[var(--font-sans)]">
              Programme Anniversaire
            </span>
            <Sparkles className="w-5 h-5 text-primary" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-balance"
          >
            Recevez <span className="text-primary italic">25€</span> de réduction
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto font-[var(--font-sans)]"
          >
            Inscrivez-vous à notre newsletter et recevez un certificat cadeau de 25€ 
            pour votre anniversaire chaque année.
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="mt-10 max-w-md mx-auto"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 border border-primary/30 bg-primary/5"
              >
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-lg font-serif text-foreground">Merci pour votre inscription !</p>
                <p className="text-sm text-muted-foreground mt-2 font-[var(--font-sans)]">
                  Vous recevrez bientôt nos offres exclusives.
                </p>
              </motion.div>
            ) : (
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  required
                  className="w-full bg-background border border-border focus:border-primary px-6 py-4 pr-32 text-foreground placeholder:text-muted-foreground outline-none transition-colors font-[var(--font-sans)]"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-[var(--font-sans)] hover:bg-gold-dark transition-colors"
                >
                  <span className="hidden sm:inline">{"S'inscrire"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.form>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs tracking-wider uppercase text-muted-foreground font-[var(--font-sans)]"
          >
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Offres exclusives
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Nouveautés en avant-première
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Conseils personnalisés
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
