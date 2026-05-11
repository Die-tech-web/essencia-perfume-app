"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "N°5 Eau de Parfum",
    brand: "Chanel",
    price: 185,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    reviews: 234,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Sauvage Eau de Toilette",
    brand: "Dior",
    price: 125,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    reviews: 189,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Black Orchid",
    brand: "Tom Ford",
    price: 210,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=600&auto=format&fit=crop",
    rating: 4.7,
    reviews: 156,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 4,
    name: "Libre Eau de Parfum",
    brand: "Yves Saint Laurent",
    price: 145,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    reviews: 201,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 5,
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: 135,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=600&auto=format&fit=crop",
    rating: 4.6,
    reviews: 178,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 6,
    name: "Oud Wood",
    brand: "Tom Ford",
    price: 295,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    reviews: 145,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 7,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 115,
    originalPrice: 140,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=600&auto=format&fit=crop",
    rating: 4.7,
    reviews: 223,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 8,
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: 165,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    reviews: 267,
    isNew: true,
    isBestSeller: true,
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative">
        {/* Image Container */}
        <Link href={`/produit/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-card">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs tracking-wider uppercase font-[var(--font-sans)]">
              Nouveau
            </span>
          )}
          {product.isBestSeller && (
            <span className="px-3 py-1 bg-foreground text-background text-xs tracking-wider uppercase font-[var(--font-sans)]">
              Best Seller
            </span>
          )}
          {product.originalPrice && (
            <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs tracking-wider uppercase font-[var(--font-sans)]">
              Promo
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm text-foreground hover:text-primary transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-all ${
              isWishlisted ? "fill-primary text-primary" : ""
            }`}
          />
        </button>

        {/* Quick Add Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="absolute bottom-4 left-4 right-4"
        >
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase font-[var(--font-sans)] hover:bg-gold-dark transition-colors">
            <ShoppingBag className="w-4 h-4" />
            <span>Ajouter au Panier</span>
          </button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <Link href={`/produit/${product.id}`} className="block group/link">
          <p className="text-xs tracking-wider uppercase text-muted-foreground font-[var(--font-sans)]">
            {product.brand}
          </p>
          <h3 className="mt-1 text-lg font-serif text-foreground group-hover/link:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span className="text-xs text-foreground font-[var(--font-sans)]">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground font-[var(--font-sans)]">
            ({product.reviews} avis)
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-serif text-primary">{product.price}€</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through font-[var(--font-sans)]">
              {product.originalPrice}€
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function ProductGrid() {
  return (
    <section className="py-24 md:py-32 bg-card/30 relative">
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
            Sélection
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif">
            Parfums <span className="text-primary italic">Populaires</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto font-[var(--font-sans)]">
            Notre sélection des fragrances les plus appréciées par nos clients
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/boutique"
            className="inline-flex items-center gap-3 px-10 py-4 border border-primary text-primary text-sm tracking-[0.2em] uppercase font-[var(--font-sans)] hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Voir tous les parfums
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
