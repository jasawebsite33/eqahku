import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import PackagesSection from '@/components/sections/PackagesSection'
import WhySection from '@/components/sections/WhySection'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import FaqSection from '@/components/sections/FaqSection'
import CtaSection from '@/components/sections/CtaSection'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <WhySection />
      <ProcessSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}