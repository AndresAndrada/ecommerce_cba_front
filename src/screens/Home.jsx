import Banner from "../module/home/components/Banner";
import BenefitsSection from "../module/home/components/BenefitsSection";
import CreatePetsSection from "../module/home/components/CreatePetsSection ";
import LandingSection from "../module/home/components/LandingSection";
import ShopExplore from "../module/home/components/ShopExplore";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Banner />
      <BenefitsSection />
      <CreatePetsSection />
      <LandingSection />
      <ShopExplore />
    </main>
  )
}