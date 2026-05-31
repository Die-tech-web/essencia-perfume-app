"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Star } from "lucide-react"

const EUR_TO_XOF = 655.957

function formatFcfaFromEuro(euroPrice: number) {
  const estimatedFcfa = Math.ceil((euroPrice * EUR_TO_XOF) / 500) * 500
  return `${new Intl.NumberFormat("fr-FR").format(estimatedFcfa)} F CFA`
}

const products = [
  {
    id: 1,
    name: "N°5 Eau de Parfum",
    brand: "Chanel",
    description: "Un floral aldéhydé iconique, élégant et intemporel.",
    price: 185,
    originalPrice: null,
    image: "/images/parfums/chanel5.png",
    rating: 4.9,
    reviews: 234,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Sauvage Eau de Toilette",
    brand: "Dior",
    description: "Fraîcheur vibrante et bois ambrés pour une signature masculine.",
    price: 125,
    originalPrice: null,
    image: "/images/parfums/sauvage.png",
    rating: 4.8,
    reviews: 189,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 3,
    name: "Black Opium Eau de Parfum",
    brand: "Yves Saint Laurent",
    description: "Un oriental gourmand, café et vanille, intensément sensuel.",
    price: 210,
    originalPrice: 250,
    image: "/images/parfums/blacopium.png",
    rating: 4.7,
    reviews: 156,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 4,
    name: "J'adore Eau de Parfum",
    brand: "Dior",
    description: "Un bouquet floral lumineux aux notes élégantes et féminines.",
    price: 145,
    originalPrice: null,
    image: "/images/parfums/jadore.png",
    rating: 4.8,
    reviews: 201,
    isNew: true,
    isBestSeller: false,
  },
  {
    id: 5,
    name: "Good Girl",
    brand: "Carolina Herrera",
    description: "Une dualité captivante entre tubéreuse lumineuse et fève tonka.",
    price: 135,
    originalPrice: null,
    image: "/images/parfums/goodgirl.png",
    rating: 4.6,
    reviews: 178,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 6,
    name: "Oud Wood",
    brand: "Tom Ford",
    description: "Un bois rare et sophistiqué, épicé, fumé et profondément chic.",
    price: 295,
    originalPrice: null,
    image: "/images/parfums/oud.png",
    rating: 4.9,
    reviews: 145,
    isNew: false,
    isBestSeller: true,
  },
  {
    id: 7,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    description: "Une signature sucrée-florale joyeuse autour de l'iris gourmand.",
    price: 115,
    originalPrice: 140,
    image: "/images/parfums/vieestbell=.png",
    rating: 4.7,
    reviews: 223,
    isNew: false,
    isBestSeller: false,
  },
  {
    id: 8,
    name: "Bleu de Chanel",
    brand: "Chanel",
    description: "Un aromatique boisé moderne, frais, profond et affirmé.",
    price: 165,
    originalPrice: null,
    image: "/images/parfums/bleu%20chanel.png",
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
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-[var(--font-sans)]">
            {product.description}
          </p>
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
          <span className="text-lg font-serif text-primary">{formatFcfaFromEuro(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through font-[var(--font-sans)]">
              {formatFcfaFromEuro(product.originalPrice)}
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
