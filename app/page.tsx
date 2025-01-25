import TopBanner from "@/components/top-banner"
import NavBar from "@/components/nav-bar"
import HeroSection from "@/components/hero-section"
import FeatureBanner from "@/components/feature-banner"
import GutHealth from "@/components/gut-health"
import FeaturedPress from "@/components/featured-press"
import BestSellers from "@/components/best-sellers"
import SharkTankSection from "@/components/shark-tank"
import ProductShowcase from "@/components/product-showcase"
import InfoCards from "@/components/info-cards"
import Newsletter from "@/components/newsletter"
import SocialGallery from "@/components/social-gallery"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <TopBanner />
      <NavBar />
      <HeroSection />
      <FeatureBanner />
      <GutHealth />
      <FeaturedPress />
      <BestSellers />
      <SharkTankSection />
      <ProductShowcase />
      <InfoCards />
      <Newsletter />
      <SocialGallery />
      <Footer />
    </main>
  )
}

