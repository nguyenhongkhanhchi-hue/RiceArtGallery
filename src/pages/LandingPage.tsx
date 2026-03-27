import HeroSection from '@/components/features/HeroSection';
import StorySection from '@/components/features/StorySection';
import BenefitsSection from '@/components/features/BenefitsSection';
import ProcessSection from '@/components/features/ProcessSection';
import TestimonialsSection from '@/components/features/TestimonialsSection';
import PricingSection from '@/components/features/PricingSection';
import CTASection from '@/components/features/CTASection';
import OrderForm from '@/components/features/OrderForm';
import Footer from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <HeroSection />
      <StorySection />
      <BenefitsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <OrderForm />
      <Footer />
    </div>
  );
}
