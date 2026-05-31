"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingBag, Heart, Menu, X, User } from "lucide-react"

const navLinks = [
  { href: "/femme", label: "Femme" },
  { href: "/homme", label: "Homme" },
  { href: "/collections", label: "Collections" },
  { href: "/marques", label: "Marques" },
  { href: "/nouveautes", label: "Nouveautés" },
  { href: "/coffrets", label: "Coffrets" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        {/* Top Bar */}
        <div className="hidden md:block border-b border-border/30">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-10 text-xs tracking-[0.2em] uppercase">
              <span className="text-muted-foreground font-[var(--font-sans)]">
                Livraison gratuite dès 65 000 F CFA
              </span>
              <div className="flex items-center gap-6 text-muted-foreground font-[var(--font-sans)]">
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link href="/boutiques" className="hover:text-primary transition-colors">
                  Nos Boutiques
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-foreground hover:text-primary transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center"
              >
                <span className="text-2xl md:text-3xl font-serif tracking-[0.3em] text-foreground">
                  ESSENCIA
                </span>
                <span className="text-[10px] tracking-[0.4em] text-primary font-[var(--font-sans)] mt-0.5">
                  PARFUMS DE LUXE
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm tracking-[0.15em] uppercase text-foreground/80 hover:text-primary transition-colors font-[var(--font-sans)] group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-4 md:gap-6">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/compte"
                className="hidden md:block p-2 text-foreground hover:text-primary transition-colors"
              >
                <User className="w-5 h-5" />
              </Link>
              <Link
                href="/wishlist"
                className="hidden md:block p-2 text-foreground hover:text-primary transition-colors"
              >
                <Heart className="w-5 h-5" />
              </Link>
              <Link
                href="/panier"
                className="relative p-2 text-foreground hover:text-primary transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center rounded-full">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-background border-r border-border z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <span className="text-xl font-serif tracking-[0.2em]">ESSENCIA</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-foreground hover:text-primary transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 text-lg tracking-[0.15em] uppercase text-foreground/80 hover:text-primary transition-colors border-b border-border/30"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-10 flex flex-col gap-4">
                  <Link
                    href="/compte"
                    className="flex items-center gap-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
                  >
                    <User className="w-5 h-5" />
                    Mon Compte
                  </Link>
                  <Link
                    href="/wishlist"
                    className="flex items-center gap-3 text-sm tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Heart className="w-5 h-5" />
                    Liste de Souhaits
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-start justify-center pt-32"
          >
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 p-2 text-foreground hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="w-full max-w-2xl px-6"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher un parfum, une marque..."
                  autoFocus
                  className="w-full bg-transparent border-b-2 border-border focus:border-primary py-4 text-xl md:text-2xl font-serif placeholder:text-muted-foreground outline-none transition-colors"
                />
                <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground tracking-wider">
                Recherches populaires: Chanel N°5, Dior Sauvage, Tom Ford
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
