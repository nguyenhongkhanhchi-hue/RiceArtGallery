import HeroSection from '@/components/features/HeroSection';
import StorySection from '@/components/features/StorySection';
import BenefitsSection from '@/components/features/BenefitsSection';
import ProcessSection from '@/components/features/ProcessSection';
import ProductShowcase from '@/components/features/ProductShowcase';
import ProductGallery from '@/components/features/ProductGallery';
import TestimonialsSection from '@/components/features/TestimonialsSection';
import CustomerPhotosSlider from '@/components/features/CustomerPhotosSlider';
import PricingSection from '@/components/features/PricingSection';
import CharitySection from '@/components/features/CharitySection';
import GuaranteeSection from '@/components/features/GuaranteeSection';
import CTASection from '@/components/features/CTASection';
import OrderForm from '@/components/features/OrderForm';
import CountdownTimer from '@/components/features/CountdownTimer';
import StickyOrderButton from '@/components/features/StickyOrderButton';
import Footer from '@/components/layout/Footer';
import { COUNTDOWN_CONFIG } from '@/constants/content';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Countdown Timer Ưu Đãi */}
      {COUNTDOWN_CONFIG.enabled && (
        <CountdownTimer 
          endDate={COUNTDOWN_CONFIG.endDate}
          title={COUNTDOWN_CONFIG.title}
          description={COUNTDOWN_CONFIG.description}
        />
      )}
      
      <HeroSection />
      <StorySection />
      <BenefitsSection />
      <ProcessSection />
      <ProductShowcase />
      <ProductGallery />
      <TestimonialsSection />
      <CustomerPhotosSlider />
      <CharitySection />
      <GuaranteeSection />
      <PricingSection />
      <CTASection />
      <OrderForm />
      <Footer />
      
      {/* Sticky Order Button */}
      <StickyOrderButton />
    </div>
  );
}
