"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

const footerLinks = {
  boutique: [
    { label: "Femme", href: "/femme" },
    { label: "Homme", href: "/homme" },
    { label: "Nouveautés", href: "/nouveautes" },
    { label: "Coffrets", href: "/coffrets" },
    { label: "Promotions", href: "/promotions" },
  ],
  marques: [
    { label: "Chanel", href: "/marques/chanel" },
    { label: "Dior", href: "/marques/dior" },
    { label: "Tom Ford", href: "/marques/tom-ford" },
    { label: "Gucci", href: "/marques/gucci" },
    { label: "Toutes les marques", href: "/marques" },
  ],
  aide: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Livraison", href: "/livraison" },
    { label: "Retours", href: "/retours" },
    { label: "Guide des tailles", href: "/guide" },
  ],
  apropos: [
    { label: "Notre histoire", href: "/histoire" },
    { label: "Nos boutiques", href: "/boutiques" },
    { label: "Carrières", href: "/carrieres" },
    { label: "Presse", href: "/presse" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "Youtube" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col"
              >
                <span className="text-2xl font-serif tracking-[0.3em] text-cream">
                  ESSENCIA
                </span>
                <span className="text-[10px] tracking-[0.4em] text-primary mt-0.5 font-[var(--font-sans)]">
                  PARFUMS DE LUXE
                </span>
              </motion.div>
            </Link>
            <p className="mt-6 text-sm text-cream/60 leading-relaxed font-[var(--font-sans)] max-w-xs">
              Votre destination pour les parfums de luxe les plus exclusifs. 
              Authenticité garantie et service personnalisé.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <a
                href="mailto:contact@essencia.com"
                className="flex items-center gap-3 text-sm text-cream/60 hover:text-primary transition-colors font-[var(--font-sans)]"
              >
                <Mail className="w-4 h-4" />
                contact@essencia.com
              </a>
              <a
                href="tel:+15141234567"
                className="flex items-center gap-3 text-sm text-cream/60 hover:text-primary transition-colors font-[var(--font-sans)]"
              >
                <Phone className="w-4 h-4" />
                +1 514 123 4567
              </a>
              <div className="flex items-start gap-3 text-sm text-cream/60 font-[var(--font-sans)]">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123 Rue Sherbrooke Ouest<br />Montréal, QC H3A 1B1</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-cream/20 text-cream/60 hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-cream mb-6 font-[var(--font-sans)]">
              Boutique
            </h4>
            <ul className="space-y-3">
              {footerLinks.boutique.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-primary transition-colors font-[var(--font-sans)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-cream mb-6 font-[var(--font-sans)]">
              Marques
            </h4>
            <ul className="space-y-3">
              {footerLinks.marques.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-primary transition-colors font-[var(--font-sans)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-cream mb-6 font-[var(--font-sans)]">
              Aide
            </h4>
            <ul className="space-y-3">
              {footerLinks.aide.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-primary transition-colors font-[var(--font-sans)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-cream mb-6 font-[var(--font-sans)]">
              À Propos
            </h4>
            <ul className="space-y-3">
              {footerLinks.apropos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-primary transition-colors font-[var(--font-sans)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Methods & Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-cream/40 font-[var(--font-sans)]">
              © 2026 Essencia. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/confidentialite"
                className="text-xs text-cream/40 hover:text-primary transition-colors font-[var(--font-sans)]"
              >
                Politique de confidentialité
              </Link>
              <span className="text-cream/20">|</span>
              <Link
                href="/cgv"
                className="text-xs text-cream/40 hover:text-primary transition-colors font-[var(--font-sans)]"
              >
                CGV
              </Link>
              <span className="text-cream/20">|</span>
              <Link
                href="/mentions-legales"
                className="text-xs text-cream/40 hover:text-primary transition-colors font-[var(--font-sans)]"
              >
                Mentions légales
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-cream/40 font-[var(--font-sans)]">
              <span>Paiement sécurisé</span>
              <span className="text-cream/60">Visa • Mastercard • PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
