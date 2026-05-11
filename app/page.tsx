import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { FeaturedBrands } from "@/components/featured-brands"
import { Categories } from "@/components/categories"
import { ProductGrid } from "@/components/product-grid"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <FeaturedBrands />
      <Categories />
      <ProductGrid />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
