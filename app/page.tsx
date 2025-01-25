import TopBanner from "@/components/navigation/top-banner"
import NavBar from "@/components/navigation/nav-bar"
import HeroSection from "@/components/hero/hero-section"
import FeatureBanner from "@/components/hero/feature-banner"
import GutHealth from "@/components/sections/gut-health"
import FeaturedPress from "@/components/sections/featured-press"
import BestSellers from "@/components/sections/best-sellers"
import SharkTankSection from "@/components/sections/shark-tank"
import ProductShowcase from "@/components/sections/product-showcase"
import InfoCards from "@/components/sections/info-cards"
import Newsletter from "@/components/sections/newsletter"
import SocialGallery from "@/components/sections/social-gallery"
import Footer from "@/components/navigation/footer"

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

